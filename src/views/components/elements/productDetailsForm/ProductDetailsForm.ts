import { defaultThumbnail } from "../../../../constants";
import { Brand, Category, Product } from "../../../../models";
import { handleNumberInput } from "../../../../utils";
import { Button } from "../button";
import { DropDownMenu } from "../dropDownMenu";
import { Container, Form } from "../htmls";
import { Input, InputContainer, TextArea } from "../input";
import { Toast } from "../toast";
import { ProductGallery } from "./ProductGallery";
import { ProductThumbnail } from "./ProductThumbnail";

export class ProductDetailsForm extends Form {
  productGallery: ProductGallery;

  constructor(
    private product: Product,
    private categories: Category[],
    private brandNames: Brand[],
    private actions: {
      onUpdate: () => void;
      onDelete: () => void;
      onCancel: () => void;
      onAdd: () => void;
    },
    private isAddNew: boolean = false
  ) {
    // Leading class name: "product_details_form"

    // Container
    super("product_details_form-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [container 1.1]
    const container1 = Container("product_details_form-container-1");
    {
      // 1.1. Container 1.1. [inputs]
      const container1_1 = Container("product_details_form-container-1-1");
      {
        // 1. Product name input
        const productNameInput = new InputContainer(
          "Product Name",
          new Input(
            {
              defaultValue: this.product.name,
              required: true,
            },
            "",
            (value) => {
              this.product.name = value;
            }
          )
        );
        // 2. Description input
        const descriptionInput = new InputContainer(
          "Description",
          new TextArea(
            {
              defaultValue: this.product.description,
              required: true,
              rows: 6,
            },
            "",
            (value) => {
              this.product.description = value;
            }
          )
        );
        // 3. Category dropdown
        const categoryDropdown = new InputContainer(
          "Category",
          new DropDownMenu(
            this.categories.map(({ id, name }) => {
              return { value: id, label: name };
            }),
            this.product.categoryId,
            ({ value }) => {
              this.product.categoryId = value;
            },
            "Select Category"
          )
        );
        // 4. Brand name input
        const brandNameInput = new InputContainer(
          "Brand Name",
          new DropDownMenu(
            this.brandNames.map(({ id, name }) => {
              return { value: id, label: name };
            }),
            this.product.brandId,
            ({ value }) => {
              this.product.brandId = value;
            },
            "Select Brand"
          )
        );
        // 5. SKU input
        const skuInput = new InputContainer(
          "SKU",
          new Input(
            { defaultValue: this.product.sku, required: true },
            "",
            (value) => {
              this.product.sku = value;
            }
          ),
          "flex-1"
        );
        // 6. Stock quantity input
        const quantityInput = new InputContainer(
          "Stock Quantity",
          new Input(
            {
              defaultValue: `${this.product.quantity}`,
              onchange: handleNumberInput,
              required: true,
            },
            "",
            (value) => {
              this.product.quantity = Number(value);
            }
          ),
          "flex-1"
        );
        // 7. Regular price input
        const regularPriceInput = new InputContainer(
          "Regular price",
          new Input(
            {
              defaultValue: `${this.product.regularPrice}`,
              onchange: handleNumberInput,
              required: true,
            },
            "",
            (value) => {
              this.product.regularPrice = Number(value);
            }
          ),
          "flex-1"
        );
        // 8. Sale price input
        const salePriceInput = new InputContainer(
          "Sale Price",
          new Input(
            {
              defaultValue: `${this.product.salePrice}`,
              onchange: handleNumberInput,
              required: true,
            },
            "",
            (value) => {
              this.product.salePrice = Number(value);
            }
          ),
          "flex-1"
        );

        // Add children
        container1_1.append(
          productNameInput.render(),
          descriptionInput.render(),
          categoryDropdown.render(),
          brandNameInput.render(),
          Container(
            "product_details_form-container-1-1-group",
            skuInput.render(),
            quantityInput.render()
          ),
          Container(
            "product_details_form-container-1-1-group",
            regularPriceInput.render(),
            salePriceInput.render()
          )
        );
      }
      // 1.2. Container 1.2. [product thumbnail, product gallery]
      const container1_2 = Container("product_details_form-container-1-2");
      {
        // 1. Product thumbnail
        const thumbnail = new ProductThumbnail(
          this.product.productImages
            ? this.product.productImages[0].imageURL
            : defaultThumbnail,
          "product_details_form-gallery-big_thumbnail"
        );
        // 2. Product gallery
        this.productGallery = new ProductGallery(this.product.productImages);
        // Add children
        container1_2.append(thumbnail.render(), this.productGallery.render());
      }
      // Add children
      container1.append(container1_1, container1_2);
    }

    // 2. Container 2. [buttons]
    const container2 = Container("product_details_form-container-2");
    if (!this.isAddNew) {
      // 1. Update button
      const updateButton = new Button({
        text: "update",
        variant: "primary",
        size: "lg",
        type: "filled",
        className: "product_details_form-function_button",
        onClick: () => {
          if (this.isFormValidity()) {
            Toast.confirmation({
              title: "Update product",
              message: "Are you sure? this action cannot be undone",
              confirmLabel: "Update",
              onClickConfirm: (isConfirmed) => {
                if (isConfirmed) {
                  this.actions.onUpdate();
                }
              },
            });
          }
        },
      });
      // 2. Delete button
      const deprecatedButton = new Button({
        text: "deprecated",
        variant: "secondary",
        size: "lg",
        type: "filled",
        className: "product_details_form-function_button",
        onClick: () => {
          Toast.confirmation({
            title: "Discontinue product",
            message: "Are you sure? this action cannot be undone",
            confirmLabel: "Discontinue",
            onClickConfirm: (isConfirmed) => {
              if (isConfirmed) {
                this.actions.onDelete();
              }
            },
          });
        },
      });
      // 3. Cancel button
      const cancelButton = new Button({
        text: "cancel",
        variant: "primary",
        size: "lg",
        type: "outlined",
        className: "product_details_form-function_button",
        onClick: () => {
          this.actions.onCancel();
        },
      });

      // Add children
      container2.append(
        updateButton.render(),
        deprecatedButton.render(),
        cancelButton.render()
      );
    } else {
      // 4. Add button
      const addButton = new Button({
        text: "add",
        variant: "primary",
        size: "lg",
        type: "filled",
        className: "product_details_form-function_button",
        onClick: () => {
          if (this.isFormValidity()) {
            Toast.confirmation({
              title: "Add product",
              message: "Are you sure? this action cannot be undone",
              confirmLabel: "Add itttttt!",
              cancelLabel: "Hold on",
              onClickConfirm: (isConfirmed) => {
                if (isConfirmed) {
                  this.actions.onAdd();
                }
              },
            });
          }
        },
      });

      // Add children
      container2.append(addButton.render());
    }

    // Add children
    this.container.append(container1, container2);
  }

  private isFormValidity() {
    if (this.product.categoryId === -1) {
      Toast.alert({ message: "You must select a category", type: "ERROR" });
      return false;
    }

    if (this.product.brandId === -1) {
      Toast.alert({ message: "You must select a brand", type: "ERROR" });
      return false;
    }

    if (this.productGallery.numberOfImages === 0) {
      Toast.alert({
        message: "You must specific at least an image",
        type: "ERROR",
      });
      return false;
    }
    return this.container.checkValidity();
  }

  render() {
    return this.container;
  }
}
