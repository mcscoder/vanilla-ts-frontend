import {
  chevronDownIcon,
  notificationsIcon,
  searchIcon,
} from "../../../../constants";
import { Router } from "../../../../routes";
import { Component } from "../../../../types";
import { storageManager } from "../../../../utils";
import { Button, SearchOverlay } from "../../elements";
import { AccountDropdown } from "./AccountDropdown";

export class Header extends Component<"header"> {
  private accountDropdownDisplayed = false;
  private accountButton: Button;
  private accountDropdown: AccountDropdown;
  constructor() {
    // Leading class name: "primary_header"
    super("primary_header", "header");

    // 1. Initialize content
    this.initContent();

    // 2. Initialize events
    this.initEvents();
  }

  initContent() {
    const admin =
      storageManager.get("local", "admin") ||
      storageManager.get("session", "admin");

    const fullName = `${admin?.firstName} ${admin?.lastName}`;

    // 1. Search button
    const searchButton = new Button({
      startIcon: searchIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {
        const searchOverlay = new SearchOverlay();
        searchOverlay.onSearchSubmit(() => {
          Router.navigateTo("/products", {
            search: searchOverlay.searchInput.getValue(),
          });
        });
        searchOverlay.display(true);
      },
    });

    // 2. Notification button
    const notificationButton = new Button({
      startIcon: notificationsIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "",
      onClick: () => {},
    });

    // 3. Account button
    this.accountButton = new Button({
      text: fullName, // Data for testing
      endIcon: chevronDownIcon,
      variant: "primary",
      size: "sm",
      type: "outlined",
      className: "",
      onClick: (ev) => {
        ev.stopPropagation();
        this.onAccountClick(!this.accountDropdownDisplayed);
      },
    });

    // 4. Account dropdown
    this.accountDropdown = new AccountDropdown(fullName);

    // Add children to container
    this.container.append(
      searchButton.render(),
      notificationButton.render(),
      this.accountButton.render()
    );
  }

  initEvents() {
    // 1. Close account dropdown by click outside
    window.addEventListener("click", () => this.onAccountClick(false));
  }

  onAccountClick(display: boolean) {
    if (display) {
      this.accountDropdownDisplayed = true;
      this.container.append(this.accountDropdown.render());
    } else {
      if (!this.accountDropdownDisplayed) {
        return;
      }
      this.accountDropdownDisplayed = false;
      this.container.removeChild(this.accountDropdown.render());
    }
  }

  render(): HTMLElement {
    return this.container;
  }
}
