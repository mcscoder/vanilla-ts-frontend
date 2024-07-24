import { chevronForwardIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { handleEmailFormat, handlePasswordFormat } from "../../../../utils";
import { Button } from "../button";
import { Container, CreateElement, Form } from "../htmls";
import { Input } from "../input";
import { Link } from "../links";
import { Checkbox } from "./Checkbox";
import { OtherMethods } from "./OtherMethods";

export class LoginForm extends Component {
  form: Form;
  emailInput: Input;
  passwordInput: Input;
  keepLogged: Checkbox;
  constructor() {
    // Leading class name: "form-login"

    // Container
    super("form-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, forgot password]
    const container1 = Container("form-login-container-1");
    {
      // 1.1. Title
      const title = CreateElement("h1", "form-title-1", ["Login"]);
      // 1.2. Forgot password link
      const forgotPassword = new Link(
        "#",
        "form-link",
        "Forgot your password?"
      );
      // Add children
      container1.append(title, forgotPassword.render());
    }

    // 2. Form
    this.form = new Form("form");
    {
      // 2.1. Email input
      this.emailInput = new Input(
        {
          placeholder: "Email",
          required: true,
          onchange: () => handleEmailFormat(this.emailInput.container),
        },
        "form-input"
      );
      // 2.2. Password input
      this.passwordInput = new Input(
        {
          placeholder: "Password",
          required: true,
          type: "password",
          onchange: () => handlePasswordFormat(this.passwordInput.container),
        },
        "form-input"
      );
      // 2.3. Keep login
      this.keepLogged = new Checkbox("keepLogin", "form-checkbox", [
        "Keep me logged in",
      ]);
      // 2.4. Login button
      const loginButton = new Button({
        text: "email login",
        endIcon: chevronForwardIcon,
        variant: "secondary",
        size: "lg",
        type: "filled",
        onClick: () => {},
      });
      // Add children
      this.form.container.append(
        this.emailInput.render(),
        this.passwordInput.render(),
        this.keepLogged.render(),
        loginButton.render()
      );
    }

    // 3. Other methods
    const otherMethods = new OtherMethods();

    // 4. Term and condition
    const term = CreateElement("p", "", [
      "By clicking 'Log In' you agree to our website ",
      new Link("#", "form-link", "Terms & Conditions.").render(),
    ]);

    // 5. Register
    const register = CreateElement("p", "", [
      "Need an account? ",
      new Link("/register", "form-link", "Register").render(),
    ]);

    // Add element
    this.container.append(
      container1,
      this.form.render(),
      otherMethods.render(),
      term,
      register
    );
  }

  render() {
    return this.container;
  }
}
