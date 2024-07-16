import { Controller } from "./controller";

export class MainLayoutController extends Controller {
  async fetchData(initContent: () => void) {
    initContent();
  }
}
