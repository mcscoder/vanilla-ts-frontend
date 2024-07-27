import { pictureIcon, xMarkIcon } from "../../../../constants";
import { ProductImage } from "../../../../models";
import { Component } from "../../../../types";
import { extractImageFile } from "../../../../utils";
import { Button } from "../button";
import { DragDropUploader } from "../dragDropUploader";
import { Container, CreateElement, Icon } from "../htmls";
import { Toast } from "../toast";
import { ProductThumbnail } from "./ProductThumbnail";

export class ProductGallery extends Component {
  newImageFiles: (File | undefined)[] = [];
  deleteImageIds: number[] = [];
  numberOfImages: number = 0;

  imageItemNodes: HTMLDivElement[] = [];
  private container2: HTMLDivElement = Container(
    "product_details_form-gallery-container-2"
  );

  constructor(private productImages: ProductImage[]) {
    // Leading class name: "product_details_form-gallery"

    // Container
    super("product_details_form-gallery-container");

    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    // 1. Container 1. [picture icon, description]
    const container1 = new DragDropUploader(
      "product_details_form-gallery-container-1",
      async (files) => {
        const fileList = [...files];

        await Promise.all(
          fileList.map(async (file) => {
            const { imageName, imageUrl } = await extractImageFile(file);
            // Preview images as base 64
            this.renderPreviewImage({
              imageName: imageName,
              imageUrl: imageUrl as string,
              newImageIndex: this.newImageFiles.length,
            });
            this.newImageFiles.push(file);
          })
        );
        Toast.alert({ message: "Image has bene added", type: "SUCCESS" });
      },
      [
        Icon(pictureIcon),
        CreateElement("p", "product_details_form-gallery-description", [
          "Drop your images here, or browse. jpeg, png are allowed",
        ]),
      ]
    );

    // Container 2
    this.productImages.forEach(({ id, imageName, imageURL }) => {
      this.renderPreviewImage({
        id: id,
        imageName: imageName,
        imageUrl: imageURL,
      });
    });

    // Add children
    this.container.append(container1.render(), this.container2);
  }

  renderPreviewImage({
    id,
    imageName,
    imageUrl,
    newImageIndex,
  }: {
    id?: number;
    imageName: string;
    imageUrl: string;
    newImageIndex?: number;
  }) {
    // Container
    const container = Container("product_details_form-gallery-image_item");

    // 1. Product image
    const image = new ProductThumbnail(
      imageUrl,
      "product_details_form-gallery-image_item-image"
    );
    // 2. Image title
    const name = CreateElement(
      "p",
      "product_details_form-gallery-image_item-file_name",
      [imageName]
    );

    // 3. Delete image button
    const deleteButton = new Button({
      startIcon: xMarkIcon,
      variant: "icon",
      size: "icon",
      type: "icon",
      className: "product_details_form-gallery-image_item-delete_btn",
      onClick: () => {
        Toast.confirmation({
          title: "Delete image",
          message: "Are you sure to delete?",
          confirmLabel: "Yea sure",
          onClickConfirm: (isConfirmed) => {
            if (isConfirmed) {
              this.onDeleteClick.bind(this, {
                id: id,
                imageItemNodeIndex: this.imageItemNodes.length,
                newImageFileIndex: newImageIndex,
              });
            }
          },
        });
      },
    });

    // Add children
    container.append(image.render(), name, deleteButton.render());

    this.imageItemNodes.push(container);
    this.container2.append(container);

    // Increase an image
    this.numberOfImages += 1;
  }

  onDeleteClick({
    id,
    imageItemNodeIndex,
    newImageFileIndex,
  }: {
    imageItemNodeIndex: number;
    id?: number;
    newImageFileIndex?: number;
  }) {
    this.imageItemNodes[imageItemNodeIndex].style.display = "none";

    if (id) {
      // If id is provided, delete the image from the database
      this.deleteImageIds.push(id);
    } else {
      // If not that means this is a new image
      // Just delete it out of the new image files array
      this.newImageFiles[newImageFileIndex!] = undefined;
    }

    // Decrease an image
    this.numberOfImages -= 1;

    Toast.alert({ message: "Image has been deleted", type: "SUCCESS" });
  }

  render() {
    return this.container;
  }
}
