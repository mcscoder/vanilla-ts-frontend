export type CustomEventType = "urlChanged" | "logging";

export class CustomEventManager {
  // Dispatch a custom event with a detail of type T
  static dispatchEvent<T = void>(type: CustomEventType, detail?: T): void {
    window.dispatchEvent(new CustomEvent(type, { detail }));
  }

  // Add an event listener for a custom event with a detail of type T
  static addEventListener<T = void>(
    type: CustomEventType,
    listener: (e: CustomEvent<T>) => void
  ): void {
    window.addEventListener(type, (e: Event) => {
      listener(e as CustomEvent<T>);
    });
  }
}
