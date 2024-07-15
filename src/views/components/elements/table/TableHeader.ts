import { CreateElement } from "../htmls";
import { TableComponent } from "./TableComponent";

export type TableHeaderData = (string | HTMLElement)[];

export class TableHeader extends TableComponent<"thead"> {
  private cellElements: HTMLTableCellElement[] = [];
  constructor(private headings: TableHeaderData) {
    // Leading class name: "list_table-table-header"

    // Table header
    super("list_table-table-header", "thead");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Table row. [table headings]
    const tableRow = CreateElement("tr", "list_table-table-header-row");
    {
      // 1.1. Table headings
      this.headings.forEach((heading) => {
        const th = CreateElement("th", "list_table-table-header-data", [
          heading,
        ]);
        this.cellElements.push(th);
        tableRow.append(th);
      });
    }

    // Add children
    this.container.append(tableRow);
  }

  addColumnClassName(columnIndex: number, ...className: string[]): void {
    this.cellElements[columnIndex].classList.add(...className);
  }

  removeColumnClassName(columnIndex: number, ...className: string[]): void {
    const classList = this.cellElements[columnIndex].classList;
    className.forEach((name) => {
      if (classList.contains(name)) {
        classList.remove(name);
      }
    });
  }

  render() {
    return this.container;
  }
}
