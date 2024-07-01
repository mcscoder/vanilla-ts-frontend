import { routes } from "./routes";

export class Router {
  constructor() {
    Router.navigateToMatchedComponent();
  }

  static navigateToMatchedComponent() {
    const childNode = this.findRoute();
    const app = document.querySelector<HTMLDivElement>("#app")!;

    if (childNode) {
      app.replaceChildren(childNode);
      return;
    }

    app.replaceChildren("Not Found");
  }

  static findRoute(): HTMLElement | null {
    let childNode: HTMLElement | null = null;

    const windowPath = window.location.pathname;

    for (const route1 of routes) {
      // Initialize route1 component
      const route1Component = new route1.component();

      // Check if children is not undefined
      if (route1.children) {
        for (const route2 of route1.children) {
          const screenPath = `${route1.path}${route2.path}`;
          if (this.isPathMatch(windowPath, screenPath)) {
            const route2Component = new route2.component();
            childNode = route1Component.render(route2Component.render());
            return childNode;
          }
        }
      } else {
        const screenPath = route1.path;
        if (this.isPathMatch(windowPath, screenPath)) {
          childNode = route1Component.render();
          return childNode;
        }
      }
    }

    return null;
  }

  static isPathMatch(windowPath: string, screenPath: string): boolean {
    const windowPathSegments = windowPath.split("/");
    const screenPathSegments = screenPath.split("/");

    // Check if length is equal
    if (windowPathSegments.length != screenPathSegments.length) {
      return false;
    }

    // Check if string match
    for (let i = 0; i < windowPathSegments.length; i++) {
      if (windowPathSegments[i] != screenPathSegments[i]) {
        return false;
      }
    }

    return true;
  }
}
