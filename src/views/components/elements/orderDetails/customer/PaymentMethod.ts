import { masterCardIcon } from "../../../../../constants";
import { Component } from "../../../../../types";
import { creditCardFormat } from "../../../../../utils";
import { Container, CreateElement, Icon } from "../../htmls";

// 0: Master Card, 1: Paypal, ...
export const creditCardTypes = [
  {
    name: "Master Card",
    svgIcon: masterCardIcon,
  },
];

export class PaymentMethod extends Component {
  constructor(
    private cardType?: number,
    private cardNumber?: string,
    private cardholderName?: string
  ) {
    // Leading class name: "customer_details-information"

    // Container
    super("customer_details-information-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Title
    const title = CreateElement("h4", "customer_details-information-title", [
      "Payment Info",
    ]);

    // 2. Container 1. [payment method, cardholder name, card number]
    const container1 = Container("customer_details-information-container-1-1");
    {
      const paymentMethod = CreateElement(
        "p",
        "customer_details-information-description customer_details-information-payment_method"
      );

      // Check if the user use credit card or cash
      if (
        this.cardType !== undefined &&
        this.cardNumber !== undefined &&
        this.cardholderName !== undefined
      ) {
        // User using credit card
        const { name, svgIcon } = creditCardTypes[this.cardType];

        // 1. Payment method
        paymentMethod.append(Icon(svgIcon), CreateElement("p", "", [name]));
        // 2. Cardholder name
        const cardholderName = CreateElement(
          "p",
          "customer_details-information-description",
          [`Cardholder name: ${this.cardholderName}`]
        );
        // 3. Card number
        const cardNumber = CreateElement(
          "p",
          "customer_details-information-description",
          [`Card number: ${creditCardFormat(this.cardNumber)}`]
        );
        // Add children
        container1.append(paymentMethod, cardholderName, cardNumber);
      } else {
        // User using cash
        paymentMethod.textContent = "Cash";
        container1.append(paymentMethod);
      }
    }

    // Add children
    this.container.append(title, container1);
  }

  render() {
    return this.container;
  }
}
