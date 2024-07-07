export type Category = {
  id: number;
  name: string;
  quantity: number;
};

export class CategoryData {
  constructor(public data: Category) {}
}
