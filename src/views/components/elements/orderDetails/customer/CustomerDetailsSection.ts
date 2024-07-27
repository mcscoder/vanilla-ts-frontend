import {
  bagHandleIcon,
  calendarIcon,
  printerIcon,
  userIcon,
} from "../../../../../constants";
import { Order, OrderStatus } from "../../../../../models";
import { Component } from "../../../../../types";
import { formatDate } from "../../../../../utils";
import { Card } from "../../../layouts";
import { Button } from "../../button";
import { DropDownMenu } from "../../dropDownMenu";
import { Container, CreateElement, Icon } from "../../htmls";
import { InputContainer, TextArea } from "../../input";
import { Tag } from "../../tag";
import { Toast } from "../../toast";
import { CustomerInfo } from "./CustomerInfo";
import { PaymentMethod } from "./PaymentMethod";

export class CustomerDetailsSection extends Component {
  private note: InputContainer<TextArea>;
  private dropdown: DropDownMenu;

  constructor(
    private order: Order,
    private orderStatuses: OrderStatus[],
    private onSave: (orderStatusId: number, note: string) => void
  ) {
    // Leading class name: "customer_details"

    // Container
    super("customer_details-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [order id, status tag]
    const container1 = Container("customer_details-container-1");
    {
      // 1. Order id
      const orderId = CreateElement("h3", "customer_details-order_id", [
        `Order ID: #${this.order.id}`,
      ]);
      // 2. Status tag
      const statusTag = new Tag(
        this.order.orderStatus.name,
        "orderStatuses",
        this.order.orderStatus.id
      );
      // Add children
      container1.append(orderId, statusTag.render());
    }

    // 2. Container 2. [container 2.1, container 2.2]
    const container2 = Container("customer_details-container-2");
    {
      // 2.1. Container 2.1. [date, status dropdown, print button, save button]
      const container2_1 = Container("customer_details-container-2-1");
      {
        // 2.1.1. Date
        const date = Container(
          "customer_details-date",
          Icon(calendarIcon),
          CreateElement("p", "", [formatDate(this.order.createdAt)])
        );
        // 2.1.2. Status dropdown
        this.dropdown = new DropDownMenu(
          this.orderStatuses.map(({ id, name }) => {
            return { value: id, label: name };
          }),
          this.order.orderStatus.id,
          () => {}
        );
        // 2.1.3. Print button
        const printButton = new Button({
          startIcon: printerIcon,
          variant: "icon",
          size: "icon",
          type: "icon",
          className: "customer_details-button",
          onClick: () => {},
        });
        // 2.1.4. Save button
        const saveButton = new Button({
          text: "save",
          variant: "icon",
          size: "icon",
          type: "icon",
          className: "customer_details-button",
          onClick: () => {
            Toast.confirmation({
              title: "Update order",
              message: "Are you sure? this action cannot be undone",
              confirmLabel: "Update",
              onClickConfirm: (isConfirmed) => {
                if (isConfirmed) {
                  this.onSave(
                    this.dropdown.getValue(),
                    this.note.input.getValue()
                  );
                }
              },
            });
          },
        });
        // Add children
        container2_1.append(
          date,
          this.dropdown.render(),
          printButton.render(),
          saveButton.render()
        );
      }
      // 2.2. Container 2.2. [customer information]
      const container2_2 = Container("customer_details-container-2-2");
      {
        // Include: customer, order info, address, payment, note
        // 1. Customer info
        const customerInfo = new CustomerInfo(
          userIcon,
          "Customer",
          [
            [
              "Full Name",
              `${this.order.userPaymentMethod.user.firstName} ${this.order.userPaymentMethod.user.lastName}`,
            ],
            ["Email", this.order.userPaymentMethod.user.email],
            ["Phone", this.order.userPaymentMethod.user.phone],
          ],
          "View profile"
        );
        // 2. Order info
        const orderInfo = new CustomerInfo(
          bagHandleIcon,
          "Order Info",
          [
            ["Shipping", this.order.shipping.name],
            ["Payment Method", this.order.userPaymentMethod.paymentMethod.name],
            ["Status", this.order.orderStatus.name],
          ],
          "Download info"
        );
        // 3. Delivery info
        const deliveryInfo = new CustomerInfo(
          bagHandleIcon,
          "Deliver to",
          [["Address", this.order.address]],
          "View profile"
        );
        // 4. Payment info
        const paymentInfo = new PaymentMethod(
          this.order.userPaymentMethod.paymentMethod.id,
          this.order.userPaymentMethod.cardNumber,
          this.order.userPaymentMethod.cardholderName
        );
        // 5. Note
        this.note = new InputContainer(
          "Note",
          new TextArea({
            placeholder: "Type some notes",
            defaultValue: this.order.note,
          }),
          "customer_details-information-input_container"
        );
        // Add children
        container2_2.append(
          customerInfo.render(),
          orderInfo.render(),
          deliveryInfo.render(),
          paymentInfo.render(),
          this.note.render()
        );
      }

      // Add children
      container2.append(container2_1, container2_2);
    }

    // Add children
    this.container.append(container1, container2);
  }

  render() {
    return new Card("", this.container).render();
  }
}
