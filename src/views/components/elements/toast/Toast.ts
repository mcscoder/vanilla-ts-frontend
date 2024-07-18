import {
  checkSuccessIcon,
  errorCircleIcon,
  infoCircleIcon,
  warningIcon,
  xMarkIcon,
} from "../../../../constants";
import { Overlay } from "../../layouts";
import { Button } from "../button";
import { Container, CreateElement, Icon } from "../htmls";

const ALERT_TYPES = {
  SUCCESS: checkSuccessIcon,
  WARNING: warningIcon,
  INFO: infoCircleIcon,
  ERROR: errorCircleIcon,
};

type AlertType = keyof typeof ALERT_TYPES;

export class Toast {
  static alert({
    title,
    message,
    type,
    duration = 6000,
  }: {
    title?: string;
    message: string;
    type: AlertType;
    duration?: number;
  }) {
    // Leading class name: "toast"
    const container = Container(
      "toast-container",
      Container(
        "toast-content",
        Icon(ALERT_TYPES[type]),
        Container(
          "flex flex-col flex-1",
          CreateElement("h4", "toast-title", [title || ""]),
          CreateElement("p", "toast-message", [message])
        ),
        new Button({
          startIcon: xMarkIcon,
          variant: "icon",
          size: "icon",
          type: "icon",
          onClick: () => {
            container.remove();
          },
        }).render()
      )
    );

    document.querySelector<HTMLBodyElement>("body")?.append(container);

    setTimeout(() => {
      container.remove();
    }, duration);
  }

  static confirmation({
    title,
    message,
    confirmLabel = "OK",
    cancelLabel = "CANCEL",
    onClickConfirm,
  }: {
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onClickConfirm: (isConfirmed: boolean) => void;
  }) {
    // Leading class name: "toast-confirmation"

    const overlay = new Overlay();

    const container = Container(
      "toast-confirmation-container",
      CreateElement("h4", "toast-title", [title]),
      CreateElement("p", "toast-message", [message]),
      Container(
        "flex items-center justify-end gap-1",
        new Button({
          text: confirmLabel,
          variant: "primary",
          size: "sm",
          type: "filled",
          onClick: () => {
            onClickConfirm(true);
            overlay.display(false);
          },
        }).render(),
        new Button({
          text: cancelLabel,
          variant: "primary",
          size: "sm",
          type: "outlined",
          onClick: () => {
            onClickConfirm(false);
            overlay.display(false);
          },
        }).render()
      )
    );

    overlay.display(true, container);
  }
}
