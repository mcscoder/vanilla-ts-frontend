import { Component } from "./Component";

export abstract class ScreenLayout extends Component {
  abstract initData(): void;
}
