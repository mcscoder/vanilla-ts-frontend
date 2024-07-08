import { Component } from "../../../../types";
import { Button } from "../button";
import { Chart, CHART_TYPES } from "../chart";
import { Container, CreateElement } from "../htmls";

export class SaleGraph extends Component {
  private viewOptionButtons: [Button, CHART_TYPES][] = [];
  private container2: HTMLDivElement;
  constructor(
    className: string = "",
    private currentChartType: CHART_TYPES = CHART_TYPES.MONTHLY
  ) {
    // Leading class name: "sale_graph"

    // Container
    super(`sale_graph-container ${className}`);

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, view option buttons]
    const container1 = Container("sale_graph-container-1");
    {
      // 1.1. Title
      const title = CreateElement("h3", "sale_graph-title", ["Sale Graph"]);

      // 1.2. View option buttons
      const buttons = this.initViewOptionButtons();
      // Add children
      container1.append(title, buttons);
    }

    // 2. Container 2. [chart]
    this.container2 = Container("sale_graph-container-2");

    // 2.1. Chart
    // initializes chart element
    // use setTimeout will move this to the end of call stack
    // it mean chart will be execute after all of synchronous code executed
    // purpose: to set chart width == container width
    // dang, how genius i am
    setTimeout(() => {
      this.initChart(this.currentChartType);
    }, 0);

    // Add children
    this.container.append(container1, this.container2);
  }

  private initViewOptionButtons() {
    const container = Container("sale_graph-button_container");
    const buttonItems = [
      {
        label: "weekly",
        chartType: CHART_TYPES.WEEKLY,
      },
      {
        label: "monthly",
        chartType: CHART_TYPES.MONTHLY,
      },
      {
        label: "yearly",
        chartType: CHART_TYPES.YEARLY,
      },
    ];

    // Initialize buttons
    buttonItems.forEach(({ label, chartType }) => {
      const button = new Button({
        text: label,
        variant: "secondary",
        size: "sm",
        type: chartType === this.currentChartType ? "filled" : "outlined",
        onClick: this.onClickViewOption.bind(this, chartType),
      });
      container.append(button.render());
      this.viewOptionButtons.push([button, chartType]);
    });

    return container;
  }

  private onClickViewOption(buttonChartType: CHART_TYPES) {
    // Set current chart type to button chart type
    this.currentChartType = buttonChartType;

    this.viewOptionButtons.forEach(([button, chartType]) => {
      button.initButtonStyle({
        // Highlight the button that has chart type user just clicked
        // By changing type to filled
        type: chartType === this.currentChartType ? "filled" : "outlined",
      });
    });

    // Re-initialize chart to button chart type
    this.initChart(buttonChartType);
  }

  private initChart(chartType: CHART_TYPES) {
    const chart = Chart.InitChart(
      [50, 100, 50, 75, 60, 310],
      chartType,
      Math.max(this.container2.clientWidth, 750),
      250
    );
    this.container2.replaceChildren(chart);
  }

  render() {
    return this.container;
  }
}
