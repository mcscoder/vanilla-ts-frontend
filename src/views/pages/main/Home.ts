import { Product } from "../../../models";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Card,
  Container,
  OrderStatCard,
  ProductStatCard,
  SaleGraph,
} from "../../components";

const bestSellerTest: Product[] = [
  {
    name: "Leopard 2A6",
    description:
      'The Leopard 2A6 is the seventh variant of the Leopard 2 main battle tank family. It is commonly referred to as the "long" Leopard 2A5 since it is nearly identical to the Leopard 2A5 variant but incorporates the new longer-barrelled 120 mm Rheinmetall L/55 tank gun. This version not only allows for heavier and newer ammunition to be fired, but it also results in greater muzzle velocity, range, and precision. Otherwise, only slight improvements are introduced compared to the previous Leopard 2A5 variant. Several subvariants were developed, including the Leopard 2A6A1, a command variant derived from the KWS I program. Additional radios (depending on the level of command) are installed in the vehicle to accommodate communications for section, platoon, troop, company, squadron, or battalion leaders. Another well-known subvariant is the Leopard 2A6M, a Leopard 2A6 with improved mine protection beneath the hull chassis and internal improvements to improve crew survivability. Canada borrowed 20 Leopard A6Ms from Germany in the summer of 2007 for deployment to Afghanistan.\n\nIntroduced in Update "New Power", the Leopard 2A6 seeks to give superior firepower to combat increasingly strong adversaries in future battlefields, and it is equipped with cutting-edge technology. The Leopard 2A6 can fire the latest armour piercing fin stabilised discarding sabot (APFSDS) with the new 120 mm Rheinmetall L/55 tank gun, allowing players to engage the most modern opponents with ease. The tank layouts are nearly identical to the Leopard 2A5, with the same crew placements and overall layouts. ',
    quantity: 100,
    regularPrice: 1100000,
    salePrice: 0,
    sku: "#germany",
    sales: 90,
    categoryId: 2,
    brandId: 2,
    id: 5,
    brand: {
      id: 2,
      name: "Germany",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 5,
        imageName: "image_2024-03-07_121234615.png",
        imageURL:
          "/api/public/images/1709788355834-image_2024-03-07_121234615.png",
        productId: 5,
      },
    ],
  },
  {
    name: "Leopard 2A6",
    description:
      'The Leopard 2A6 is the seventh variant of the Leopard 2 main battle tank family. It is commonly referred to as the "long" Leopard 2A5 since it is nearly identical to the Leopard 2A5 variant but incorporates the new longer-barrelled 120 mm Rheinmetall L/55 tank gun. This version not only allows for heavier and newer ammunition to be fired, but it also results in greater muzzle velocity, range, and precision. Otherwise, only slight improvements are introduced compared to the previous Leopard 2A5 variant. Several subvariants were developed, including the Leopard 2A6A1, a command variant derived from the KWS I program. Additional radios (depending on the level of command) are installed in the vehicle to accommodate communications for section, platoon, troop, company, squadron, or battalion leaders. Another well-known subvariant is the Leopard 2A6M, a Leopard 2A6 with improved mine protection beneath the hull chassis and internal improvements to improve crew survivability. Canada borrowed 20 Leopard A6Ms from Germany in the summer of 2007 for deployment to Afghanistan.\n\nIntroduced in Update "New Power", the Leopard 2A6 seeks to give superior firepower to combat increasingly strong adversaries in future battlefields, and it is equipped with cutting-edge technology. The Leopard 2A6 can fire the latest armour piercing fin stabilised discarding sabot (APFSDS) with the new 120 mm Rheinmetall L/55 tank gun, allowing players to engage the most modern opponents with ease. The tank layouts are nearly identical to the Leopard 2A5, with the same crew placements and overall layouts. ',
    quantity: 100,
    regularPrice: 1100000,
    salePrice: 0,
    sku: "#germany",
    sales: 90,
    categoryId: 2,
    brandId: 2,
    id: 5,
    brand: {
      id: 2,
      name: "Germany",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 5,
        imageName: "image_2024-03-07_121234615.png",
        imageURL:
          "/api/public/images/1709788355834-image_2024-03-07_121234615.png",
        productId: 5,
      },
    ],
  },
  {
    name: "Leopard 2A6",
    description:
      'The Leopard 2A6 is the seventh variant of the Leopard 2 main battle tank family. It is commonly referred to as the "long" Leopard 2A5 since it is nearly identical to the Leopard 2A5 variant but incorporates the new longer-barrelled 120 mm Rheinmetall L/55 tank gun. This version not only allows for heavier and newer ammunition to be fired, but it also results in greater muzzle velocity, range, and precision. Otherwise, only slight improvements are introduced compared to the previous Leopard 2A5 variant. Several subvariants were developed, including the Leopard 2A6A1, a command variant derived from the KWS I program. Additional radios (depending on the level of command) are installed in the vehicle to accommodate communications for section, platoon, troop, company, squadron, or battalion leaders. Another well-known subvariant is the Leopard 2A6M, a Leopard 2A6 with improved mine protection beneath the hull chassis and internal improvements to improve crew survivability. Canada borrowed 20 Leopard A6Ms from Germany in the summer of 2007 for deployment to Afghanistan.\n\nIntroduced in Update "New Power", the Leopard 2A6 seeks to give superior firepower to combat increasingly strong adversaries in future battlefields, and it is equipped with cutting-edge technology. The Leopard 2A6 can fire the latest armour piercing fin stabilised discarding sabot (APFSDS) with the new 120 mm Rheinmetall L/55 tank gun, allowing players to engage the most modern opponents with ease. The tank layouts are nearly identical to the Leopard 2A5, with the same crew placements and overall layouts. ',
    quantity: 100,
    regularPrice: 1100000,
    salePrice: 0,
    sku: "#germany",
    sales: 90,
    categoryId: 2,
    brandId: 2,
    id: 5,
    brand: {
      id: 2,
      name: "Germany",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 5,
        imageName: "image_2024-03-07_121234615.png",
        imageURL:
          "/api/public/images/1709788355834-image_2024-03-07_121234615.png",
        productId: 5,
      },
    ],
  },
];

export class Home extends ScreenLayout {
  constructor() {
    // Leading class name: "dashboard"
    super("dashboard-container");

    // 1. Initialize content
    this.initContent();
  }

  initData() {}

  initContent() {
    // 1. Container 1. [breadcrumb, calendar]
    // 1.1. Breadcrumb
    const breadcrumb = new Breadcrumb(["home"]);
    // 1.2. Container
    const container1 = Container("dashboard-container-1", breadcrumb.render());

    // 2. Container 2. [order's stat cards]
    // 2.1. Total order
    const totalOrder = new OrderStatCard(
      "Total Orders",
      126.5,
      34.7,
      "Oct 2023"
    );
    // 2.2. Container
    const container2 = Container(
      "dashboard-container-2",
      totalOrder.render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render(),
      new OrderStatCard("Total Orders", 126.5, 34.7, "Oct 2023").render()
    );

    // 3. Container 3. [sale graph, best sellers card]
    // 3.1. Sale graph
    const saleGraph = new Card(
      "dashboard-container-3-graph",
      new SaleGraph().render()
    );
    // 3.2. Best sellers card
    const bestSellersCard = new Card(
      "",
      new ProductStatCard("Best sellers", bestSellerTest).render()
    );
    // 3.3. Container
    const container3 = Container(
      "dashboard-container-3",
      saleGraph.render(),
      bestSellersCard.render()
    );

    this.container.append(container1, container2, container3);
  }

  render() {
    return this.container;
  }
}
