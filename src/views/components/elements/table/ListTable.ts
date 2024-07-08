import { threeDotsVerticalIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { Button } from "../button";
import { Container, CreateElement } from "../htmls";
import { TableBody, TableBodyData } from "./TableBody";
import { TableHeader, TableHeaderData } from "./TableHeader";

export class ListTable extends Component {
  tableHeader: TableHeader;
  tableBody: TableBody;
  constructor(
    private title: string,
    private headerData: TableHeaderData,
    private bodyData: TableBodyData
  ) {
    // Leading class name: "list_table"

    // Container
    super("list_table-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, option button]
    const container1 = Container("list_table-container-1");
    {
      // 1.1. Title
      const title = CreateElement("h3", "list_table-title", [this.title]);
      // 1.2. Option button
      const button = new Button({
        startIcon: threeDotsVerticalIcon,
        variant: "icon",
        size: "icon",
        type: "icon",
        onClick: () => {},
      });
      // Add children
      container1.append(title, button.render());
    }

    // 2. Container 2. [table]
    const container2 = Container("list_table-container-2");
    {
      // 2.1. Table
      // 2.1.1. Table Header
      this.tableHeader = new TableHeader(this.headerData);
      // 2.1.2. Table body
      this.tableBody = new TableBody(this.bodyData);
      // 2.1.3. Table
      const table = CreateElement("table", "list_table-table", [
        this.tableHeader.render(),
        this.tableBody.render(),
      ]);
      // Add children
      container2.append(table);
    }

    // Add children
    this.container.append(container1, container2);
  }

  render() {
    return this.container;
  }
}
