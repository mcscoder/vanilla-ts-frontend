import { logoutIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { storageManager } from "../../../../utils";
import { Button, CreateElement, Toast } from "../../elements";

export class AccountDropdown extends Component {
  constructor(private fullName: string) {
    // Leading class name: "primary_header-dropdown"

    // Container
    super("primary_header-dropdown card");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Admin name
    const adminName = CreateElement("h4", "primary_header-dropdown-title", [
      this.fullName,
    ]);
    // 2. Logout button
    const logoutButton = new Button({
      text: "logout",
      endIcon: logoutIcon,
      variant: "secondary",
      size: "sm",
      type: "filled",
      onClick: () => {
        Toast.confirmation({
          title: "Logout",
          message: "Are you logging out?",
          confirmLabel: "Yes",
          onClickConfirm: (isConfirmed) => {
            if (isConfirmed) {
              storageManager.remove("local", "admin");
              storageManager.remove("session", "admin");
              location.reload();
            }
          },
        });
      },
    });
    // Add children
    this.container.append(adminName, logoutButton.render());
  }

  render() {
    return this.container;
  }
}
