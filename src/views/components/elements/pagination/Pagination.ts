import {
  chevronForwardIcon,
  threeDotsHorizontalIcon,
} from "../../../../constants";
import { Router } from "../../../../routes";
import { Component } from "../../../../types";
import { Button } from "../button";

const searchParamKey = "page";

export class Pagination extends Component {
  private currentPageIndex: number;
  private totalPage: number;
  private navigationButtons: Button[] = [];
  private threeDotsButton: Button;
  private nextButton: Button;

  /**
   * @param totalItems - The total number of items to be paginated.
   * @param limit - The number of items to be displayed on each page.
   * @param onNavigate - Callback function to handle page navigation.
   */
  constructor(
    private totalItems: number,
    private limit: number,
    private onNavigate: (
      pageIndex: number,
      startIndex: number,
      endIndex: number
    ) => void
  ) {
    // Leading class name: "pagination"

    // Container
    super("pagination-container");

    // 1. Get current page index
    this.currentPageIndex = Number(Router.getSearchParam(searchParamKey) || 0);

    // 2. Navigate
    this.navigate();

    // 3. Total page
    // Calculate the total number of pages based on total items and limit of items on each page
    this.totalPage = Math.ceil(this.totalItems / this.limit);

    // 4. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Initialize navigation buttons
    this.initNavigationButtons();

    // 2. Render those buttons
    this.renderNavigationButtons();
  }

  private initNavigationButtons() {
    // 1. Iterates over to create navigation buttons for each page
    for (let pageIndex = 0; pageIndex < this.totalPage; pageIndex++) {
      // Navigation button
      // Active button: filled
      // Inactive button: outlined
      const button = new Button({
        text: `${pageIndex + 1}`,
        size: "sm",
        type: pageIndex === this.currentPageIndex ? "filled" : "outlined",
        onClick: this.onClickNavigationButton.bind(this, pageIndex),
      });
      this.navigationButtons.push(button);
    }

    // 2. Ellipsis icon button
    this.threeDotsButton = new Button({
      startIcon: threeDotsHorizontalIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      onClick: () => {},
    });

    // 3. "Next" button
    this.nextButton = new Button({
      text: "next",
      endIcon: chevronForwardIcon,
      size: "sm",
      type: "outlined",
      onClick: this.onClickNextButton.bind(this),
    });
  }

  private renderNavigationButtons() {
    // Clears the container before appending new navigation buttons
    this.container.innerText = "";

    // Calculate the start and end indices for navigation buttons within visible range
    const [buttonStartIndex, buttonEndIndex] = [
      Math.max(0, this.currentPageIndex - 2), // 2 buttons on the left side of the current page button
      Math.min(this.currentPageIndex + 2, this.totalPage - 1), // 2 buttons on the right side of the current page button
    ];

    // Append navigation buttons within visible range to the container
    for (
      let pageIndex = buttonStartIndex;
      pageIndex <= buttonEndIndex;
      pageIndex++
    ) {
      this.container.append(this.navigationButtons[pageIndex].render());
    }

    // Add ellipsis icon if there are additional pages after visible range
    if (this.totalPage - 1 > buttonEndIndex + 1) {
      this.container.append(this.threeDotsButton.render());
    }

    // Add the last navigation button if there are more pages beyond the visible range
    if (this.totalPage - 1 >= buttonEndIndex + 1) {
      const lastNavigationButton =
        this.navigationButtons[this.navigationButtons.length - 1];
      this.container.append(lastNavigationButton.render());
    }

    // Add the "next" button for navigating to the next page
    this.container.append(this.nextButton.render());

    // Handle disable "next" button if current page index === total page
    this.nextButton.disable(this.currentPageIndex === this.totalPage - 1);
  }

  private onClickNavigationButton(pageIndex: number) {
    if (pageIndex > this.totalPage - 1) {
      return;
    }
    this.currentPageIndex = pageIndex;

    if (pageIndex === 0) {
      console.log("deleteSearchParam");
      Router.deleteSearchParam(searchParamKey);
    } else {
      console.log("setSearchParam");
      Router.setSearchParam(searchParamKey, `${pageIndex}`);
    }

    // Navigate
    this.navigate();

    // Handle navigating
    this.navigationButtons.forEach((button, index) => {
      button.initButtonStyle({
        type: index === this.currentPageIndex ? "filled" : "outlined",
      });
    });

    this.renderNavigationButtons();
  }

  private onClickNextButton() {
    this.onClickNavigationButton(this.currentPageIndex + 1);
  }

  private navigate() {
    this.onNavigate(
      this.currentPageIndex,
      this.currentPageIndex * this.limit,
      Math.min(this.currentPageIndex * this.limit + this.limit, this.totalItems)
    );
  }

  render() {
    return this.container;
  }
}
