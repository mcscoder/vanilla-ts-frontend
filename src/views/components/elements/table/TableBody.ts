import { Component } from "../../../../types";
import { CreateElement } from "../htmls";

export type TableBodyData = (string | HTMLElement)[][];

export class TableBody extends Component<"tbody"> {
  cellElements: HTMLTableCellElement[][] = [];
  constructor(private bodyData: TableBodyData) {
    // Leading class name: "list_table-table-body"

    // Table body
    super("list_table-table-body", "tbody");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Table data
    this.bodyData.forEach((rowData) => {
      const tableRow = CreateElement("tr", "list_table-table-body-row");

      const rowCellElements: HTMLTableCellElement[] = [];
      rowData.forEach((cellData) => {
        const td = CreateElement("td", "list_table-table-body-data", [
          cellData,
        ]);
        tableRow.append(td);
        rowCellElements.push(td);
      });

      // Push row cell elements to global cell elements
      this.cellElements.push(rowCellElements);

      // Add table row to table body
      this.container.append(tableRow);
    });
  }

  addColumnClassName(columnIndex: number, ...className: string[]): void {
    this.cellElements.forEach((rowCellElements) => {
      rowCellElements[columnIndex].classList.add(...className);
    });
  }

  removeColumnClassName(columnIndex: number, ...className: string[]): void {
    this.cellElements.forEach((rowCellElements) => {
      const columnClassList = rowCellElements[columnIndex].classList;
      className.forEach((name) => {
        if (columnClassList.contains(name)) {
          columnClassList.remove(name);
        }
      });
    });
  }

  render() {
    return this.container;
  }
}
