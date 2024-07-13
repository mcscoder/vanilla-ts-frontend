import { HomeController } from "../../../controllers";
import { Order } from "../../../models";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Card,
  Container,
  OrdersTable,
  OrderStatCard,
  ProductStatCard,
  SaleGraph,
} from "../../components";

export const orderTableTest: Order[] = [
  {
    orderStatusId: 2,
    shippingId: 1,
    userPaymentMethodId: 1,
    address: "193 NLB",
    note: "note",
    createdAt: 1710429115219,
    id: 6,
    orderStatus: {
      id: 2,
      name: "Transport",
    },
    shipping: {
      id: 1,
      name: "Next Express",
    },
    userPaymentMethod: {
      id: 1,
      cardholderName: "USER 1",
      cardNumber: "123123123123",
      userId: 1,
      paymentMethodId: 0,
      paymentMethod: {
        id: 0,
        name: "Master Card",
      },
      user: {
        id: 1,
        firstName: "user 1",
        lastName: "user 1",
        email: "user1@gmail.com",
        phone: "user 1 phone",
        avatar:
          "https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905",
      },
    },
    orderProducts: [
      {
        orderId: 6,
        productId: 11,
        quantity: 1,
        price: 888.4,
        product: {
          name: "Tiger E",
          description:
            'The Pz.Kpfw. VI Tiger Ausf. E (Sd.Kfz. Index: Sd.Kfz. 181) is a rank III German heavy tank with a battle rating of 6.0 (AB/RB/SB). It was introduced in Update 1.47 "Big Guns".\n\nThe Tiger E is the late production model of the Tiger I featuring steel road wheels and Zimmerit paste on the armour. The Tiger E also introduces the more powerful APCR ammunition for the 88 mm KwK 36 gun, a shorter commander cupola and the pintle-mounted MG. ',
          quantity: 800,
          regularPrice: 135000,
          salePrice: 0,
          sku: "#germany",
          sales: 0,
          categoryId: 3,
          brandId: 2,
          id: 11,
          brand: {
            id: 2,
            name: "Germany",
          },
          category: {
            id: 3,
            name: "Heavy tanks",
            quantity: 0,
          },
          productImages: [
            {
              id: 11,
              imageName: "image_2024-03-07_122606596.png",
              imageURL:
                "/api/public/images/1709789207664-image_2024-03-07_122606596.png",
              productId: 11,
            },
          ],
        },
      },
      {
        orderId: 6,
        productId: 12,
        quantity: 1,
        price: 888.4,
        product: {
          name: "Object 279",
          description:
            'The Object 279 is a gift rank VI Soviet heavy tank with a battle rating of 9.0 (AB/RB/SB). It was introduced during Update 1.97 "Viking Fury" as a reward for the "Space Race" event.\n\nThe Object 279\'s unique look comes with its design as being more capable of cross-country travelling in a possible nuclear warfare scenario. This produces its unique hull shape, four-track designs, and a large 130 mm cannon to deal with threats.\n\nUpon release, Object 279 was nicknamed "Moon Rover" by the War Thunder Community. ',
          quantity: 2,
          regularPrice: 2290000,
          salePrice: 0,
          sku: "#ussr",
          sales: 10,
          categoryId: 3,
          brandId: 3,
          id: 12,
          brand: {
            id: 3,
            name: "USSR",
          },
          category: {
            id: 3,
            name: "Heavy tanks",
            quantity: 0,
          },
          productImages: [
            {
              id: 12,
              imageName: "image_2024-03-07_124838268.png",
              imageURL:
                "/api/public/images/1709790523996-image_2024-03-07_124838268.png",
              productId: 12,
            },
          ],
        },
      },
    ],
  },
];

export class Home extends ScreenLayout<HomeController> {
  constructor() {
    // Leading class name: "dashboard"

    // Container
    super("dashboard-container", new HomeController());
  }

  async initData() {
    super.initData();
    this.controller.fetchData(this.initContent.bind(this));
  }

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
      new ProductStatCard("Best sellers", this.controller.bestSellers).render()
    );
    // 3.3. Container
    const container3 = Container(
      "dashboard-container-3",
      saleGraph.render(),
      bestSellersCard.render()
    );

    // 4.1. Orders table
    const ordersTable = new OrdersTable(
      "Recent Orders",
      this.controller.orders
    );

    this.container.append(
      container1,
      container2,
      container3,
      ordersTable.render()
    );
  }

  render() {
    return this.container;
  }
}
