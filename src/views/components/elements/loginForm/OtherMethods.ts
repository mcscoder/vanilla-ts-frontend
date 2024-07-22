import { appleIcon, facebookIcon, googleIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { Button } from "../button";

export class OtherMethods extends Component {
  constructor() {
    // Leading class name: "form-other_method"

    // Container
    super("form-other_method-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Goggle button
    const goggleButton = new Button({
      startIcon: googleIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "form-other_method-btn",
      onClick: () => {},
    });
    // 2. Apple button
    const appleButton = new Button({
      startIcon: appleIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "form-other_method-btn",
      onClick: () => {},
    });
    // 3. Facebook button
    const facebookButton = new Button({
      startIcon: facebookIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "form-other_method-btn",
      onClick: () => {},
    });

    // Add children
    this.container.append(
      goggleButton.render(),
      appleButton.render(),
      facebookButton.render()
    );
  }

  render() {
    return this.container;
  }
}
