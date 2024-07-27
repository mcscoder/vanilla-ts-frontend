import { searchIcon } from "../../../../constants";
import { Overlay } from "../../layouts";
import { Button } from "../button";
import { Form } from "../htmls";
import { Input } from "../input";

export class SearchOverlay extends Form {
  overlay = new Overlay();
  searchInput: Input;
  constructor() {
    super("flex gap-1");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Search input
    this.searchInput = new Input({}, "form-input");

    // 2. Submit button
    const submitButton = new Button({
      startIcon: searchIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {},
    });

    this.container.append(this.searchInput.render(), submitButton.render());
  }

  display(isDisplay: boolean) {
    this.overlay.display(isDisplay, this.container);
  }

  onSearchSubmit(action: () => void) {
    this.onSubmit(() => {
      this.overlay.display(false);
      action();
    });
  }
}
