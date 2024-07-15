import { Component } from "../../../../types";

type TableComponentType = keyof Pick<HTMLElementTagNameMap, "thead" | "tbody">;

export abstract class TableComponent<
  T extends TableComponentType,
> extends Component<T> {
  abstract addColumnClassName(
    columnIndex: number,
    ...className: string[]
  ): void;
  abstract removeColumnClassName(
    columnIndex: number,
    ...className: string[]
  ): void;
}
