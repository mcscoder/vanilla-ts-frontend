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
    this.initEvents();
  }

  initContent() {
    // 1. Background blur layer
    const layer = Container("login-blur_layer");

    this.container.append(layer, this.form.render());
  }

  initEvents() {
    this.form.form.onSubmit(async () => {
      if (!this.isRegister) {
        const form = this.form as LoginForm;
        await this.controller.authenticate({
          admin: {
            email: form.emailInput.getValue(),
            password: form.passwordInput.getValue(),
          },
          isKeepLogged: form.keepLogged.isChecked(),
        });
      } else {
        const form = this.form as RegisterForm;
        await this.controller.register({
          firstName: form.firstNameInput.getValue(),
          lastName: form.lastNameInput.getValue(),
          email: form.emailInput.getValue(),
          password: form.passwordInput.getValue(),
        });
      }
    });
  }

  render() {
    return this.container;
  }
}
