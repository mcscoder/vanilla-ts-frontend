import { Controller } from "./controller";

export class LoginController extends Controller {
  async fetchData(initContent: () => void) {
    initContent();
  }
}
