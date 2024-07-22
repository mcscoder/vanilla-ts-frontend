import { chevronForwardIcon } from "../../../../constants";
import { Component } from "../../../../types";
import { handleEmailFormat, handlePasswordFormat } from "../../../../utils";
import { Button } from "../button";
import { Container, CreateElement, Form } from "../htmls";
import { Input } from "../input";
import { Link } from "../links";
import { Checkbox } from "./Checkbox";
import { OtherMethods } from "./OtherMethods";

export class RegisterForm extends Component {
  form: Form;
  constructor() {
    // Leading class name: "form"

    // Container
    super("form-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [title, login link, title 1, title 2.1, other methods, title 2.2]
    const container1 = Container("form-register-container-1");
    {
      // 1. Title 1
      const title1 = CreateElement("h1", "form-title-1", ["Register"]);
      // 2. Login link
      const loginLink = CreateElement("p", "", [
        "Already have an account? ",
        new Link("/login", "form-link", "Login").render(),
      ]);
      // 3. Title 2.1
      const title2_1 = CreateElement("p", "form-title-2", ["Sign up with"]);
      // 4. Other methods
      const otherMethods = new OtherMethods();
      // 5. title 2.2
      const title2_2 = CreateElement("p", "form-title-2", ["OR"]);
      // Add children
      container1.append(
        title1,
        loginLink,
        title2_1,
        otherMethods.render(),
        title2_2
      );
    }

    // 2. Form. [title 3.1, first name input, last name input, title 3.2, email input, password input, term, register button]
    this.form = new Form("");
    {
      // 1. Title 3.1.
      const title3_1 = CreateElement("p", "form-title-3", ["Your Name"]);
      // 2. First name input
      const firstNameInput = new Input(
        { placeholder: "First Name", required: true },
        "form-input"
      );
      // 3. Last name input
      const lastNameInput = new Input(
        { placeholder: "Last Name", required: true },
        "form-input"
      );
      // 4. Title 3.2
      const title3_2 = CreateElement("p", "form-title-3", ["Login Details"]);
      // 5. Email input
      const emailInput = new Input(
        {
          placeholder: "Email",
          required: true,
          onchange: () => handleEmailFormat(emailInput.container),
        },
        "form-input"
      );
      // 6. Password input
      const passwordInput = new Input(
        {
          placeholder: "Password",
          type: "password",
          required: true,
          onchange: () => handlePasswordFormat(passwordInput.container),
        },
        "form-input"
      );
      // 7. Term
      const termCheckbox = new Checkbox("acceptTerm", "form-checkbox", [
        "By clicking 'Log In' you agree to our website ",
        new Link("#", "form-link", "Terms & Conditions.").render(),
      ]);
      // 8. Register button
      const registerButton = new Button({
        text: "email login",
        endIcon: chevronForwardIcon,
        variant: "secondary",
        size: "lg",
        type: "filled",
        onClick: () => {},
      });
      // Add children
      this.form.container.append(
        title3_1,
        firstNameInput.render(),
        lastNameInput.render(),
        title3_2,
        emailInput.render(),
        passwordInput.render(),
        termCheckbox.render(),
        registerButton.render()
      );
    }

    // Add children
    this.container.append(container1, this.form.render());
  }

  render() {
    return this.container;
  }
}
