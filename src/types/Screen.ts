import { Controller } from "../controllers";
import { Component } from "./Component";

export abstract class ScreenLayout<
  T extends Controller = Controller,
> extends Component {
  constructor(
    className: string,
    protected controller: T
  ) {
    super(className);
  }

  initData() {
    this.container.innerText = "";
  }
}
