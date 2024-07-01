export abstract class Component {
  abstract initContent(...params: any[]): void;
  abstract render(...params: any[]): HTMLElement;
}
