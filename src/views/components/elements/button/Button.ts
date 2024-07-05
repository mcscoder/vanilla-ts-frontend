import { Component } from "../../../../types";
import { CreateElement, Icon } from "../htmls";

const VARIANTS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  icon: "",
};

const SIZES = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  icon: "",
};

const TYPES = {
  filled: "btn-filled",
  outlined: "btn-outlined",
  icon: "",
};

export type ButtonVariant = keyof typeof VARIANTS;

export type ButtonSize = keyof typeof SIZES;

export type ButtonType = keyof typeof TYPES;

export type ButtonProps = {
  text?: string;
  startIcon?: string;
  endIcon?: string;
  variant: ButtonVariant;
  size: ButtonSize;
  type: ButtonType;
  className: string;
  onClick: () => void;
};

export class Button extends Component<"button"> {
  constructor(private props: ButtonProps) {
    super("", "button");

    // 1. Initialize content
    this.initContent();

    // 2. Initialize events
    this.initEvents();
  }

  initContent() {
    // 1. Start icon
    if (this.props.startIcon) {
      const startIcon = Icon(this.props.startIcon);
      this.container.append(startIcon);
    }

    // 2. Text
    if (this.props.text) {
      const text = CreateElement("span");
      text.innerText = this.props.text;
      this.container.append(text);
    }

    // 3. End icon
    if (this.props.endIcon) {
      const endIcon = Icon(this.props.endIcon);
      this.container.append(endIcon);
    }

    // 4. Button class name
    const className = [
      "btn",
      VARIANTS[this.props.variant],
      SIZES[this.props.size],
      TYPES[this.props.type],
      this.props.className,
    ];
    this.container.className = className.join(" ");
  }

  initEvents() {
    // 1. Click event
    this.container.addEventListener("click", this.props.onClick);
  }

  render() {
    return this.container;
  }
}
