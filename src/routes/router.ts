import { CustomEventManager } from "../events";
import { ScreenRoute } from "../types";
import { routerStates, routes } from "./routes";

export class Router {
  constructor() {
    Router.navigateToMatchedComponent();

    // Auto navigate to the corresponding screen component when custom event "urlChanged" dispatched
    CustomEventManager.addEventListener("urlChanged", () => {
      Router.navigateToMatchedComponent();
    });

    // Dispatch the "urlChanged" custom event
    window.addEventListener("popstate", () => {
      CustomEventManager.dispatchEvent("urlChanged");
    });
  }

  // Navigate to the component based on window path
  static navigateToMatchedComponent() {
    const screenRoute = this.findRoute();
    const app = document.querySelector<HTMLDivElement>("#app")!;

    // Check if found out screen path and component
    if (screenRoute) {
      app.replaceChildren(screenRoute.node);
      return;
    }

    // Not found
    app.replaceChildren("Not Found");
  }

  // Find the correct path and component based on window path
  static findRoute(): ScreenRoute | null {
    const windowPath = window.location.pathname;

    for (const route1 of routes) {
      // Initialize route1 component
      const route1Component = route1.component;

      // Check if children is not undefined
      if (route1.children) {
        for (const route2 of route1.children) {
          const screenPath = `${route1.path}${route2.path}`;
          if (this.isPathMatch(windowPath, screenPath)) {
            // Testing
            routerStates.currentScreenPath = screenPath;

            const route2Component = route2.component;
            return {
              node: route1Component.render(route2Component.render()),
              path: screenPath,
            };
          }
        }
      } else {
        const screenPath = route1.path;
        if (this.isPathMatch(windowPath, screenPath)) {
          // Testing
          routerStates.currentScreenPath = screenPath;

          return {
            node: route1Component.render(),
            path: screenPath,
          };
        }
      }
    }

    return null;
  }

  // Check if window path and screen path is match
  static isPathMatch(windowPath: string, screenPath: string): boolean {
    const windowPathSegments = windowPath.split("/");
    const screenPathSegments = screenPath.split("/");

    // Check if length is equal
    if (windowPathSegments.length != screenPathSegments.length) {
      return false;
    }

    // Check if string match
    for (let i = 0; i < windowPathSegments.length; i++) {
      if (
        windowPathSegments[i] != screenPathSegments[i] &&
        !screenPathSegments[i].startsWith(":")
      ) {
        return false;
      }
    }

    return true;
  }

  // Interact with window url
  static pushState(url: string | URL) {
    window.history.pushState({}, "", url);
    CustomEventManager.dispatchEvent("urlChanged");
  }

  // Navigate to specified screen path
  static navigateTo(
    path: string,
    searchParams: { [key: string]: string } = {}
  ): boolean {
    if (location.pathname === path) {
      return false;
    }

    const newUrl = new URL(path, location.origin);
    Object.entries(searchParams).forEach(([key, value]) => {
      newUrl.searchParams.set(key, value);
    });

    this.pushState(newUrl);
    return true;
  }

  // Interact with url search params
  static urlSearchParams<T = void>(
    action: (searchParams: URLSearchParams) => T
  ): T {
    const url = new URL(location.href);
    return action(url.searchParams);
  }

  // Get Search Param
  static getSearchParam(key: string): string | null {
    const searchParam = this.urlSearchParams<string | null>((searchParams) => {
      return searchParams.get(key);
    });
    return searchParam;
  }

  // Set Search Param
  static setSearchParam(key: string, value: string) {
    this.urlSearchParams((searchParams) => {
      searchParams.set(key, value);
    });
  }

  // Delete Search Param
  static deleteSearchParam(key: string, value?: string) {
    this.urlSearchParams((searchParams) => {
      searchParams.delete(key, value);
    });
  }

  static getParams() {
    const windowPath = location.pathname;
    const screenPath = routerStates.currentScreenPath;

    const windowPathSegments = windowPath.split("/");
    const screenPathSegments = screenPath.split("/");
    const params: { [key: string]: string } = {};

    for (let i = 0; i < screenPathSegments.length; i++) {
      if (screenPathSegments[i].startsWith(":")) {
        const paramKey = screenPathSegments[i].slice(1);
        params[paramKey] = windowPathSegments[i];
      }
    }

    return params;
  }
}
