import { LoginController } from "../../../controllers";
import { ScreenLayout } from "../../../types";
import { Container, LoginForm, RegisterForm } from "../../components";

export class Login extends ScreenLayout<LoginController> {
  private form: RegisterForm | LoginForm;
  constructor(private isRegister: boolean = false) {
    // Leading class name: "login"

    // Container
    super("login-container", new LoginController());
  }

  initData() {
    super.initData();
    this.form = this.isRegister ? new RegisterForm() : new LoginForm();

    this.initContent();
  }

  initContent() {
    // 1. Background blur layer
    const layer = Container("login-blur_layer");

    this.container.append(layer, this.form.render());
  }

  render() {
    return this.container;
  }
}
