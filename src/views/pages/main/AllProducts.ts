import { addCircleIcon } from "../../../constants";
import { Product } from "../../../models";
import { ScreenLayout } from "../../../types";
import {
  Breadcrumb,
  Button,
  Container,
  Pagination,
  ProductCard,
} from "../../components";

const productsTest: Product[] = [
  {
    name: "M3 Bradley 123",
    description:
      'The search for the ideal mechanized infantry combat vehicle (MICV) in the US military began as early as 1964, but design dissatisfaction and the Vietnam War complicated the procurement process while introducing new requests in what the US wants in their infantry fighting vehicle (IFV). A breakthrough to the final design was made when the FMC Corporation designed XM723 MICV was considered for the vehicle of choice for the IFV as the XM2 IFV, though the design was complicated again by having to also fit with the US Cavalry requirement as the XM3 Cavalry Fighting Vehicle (CFV). Following evaluations and criticism of the overall program, the XM2/3 was provided production approval in January 1980 as the M2 and M3 Bradley. Though both the infantry and cavalry variant shared similar exterior looks, the cavalry differed with the infantry seat area configured to contain more ammunition and missiles for the M242 chain gun and TOW launchers. As improvements were introduced into the design, the original M2/M3 variants were designated with an "A0" suffix. Though some A0s were sent before the onset of Operation Desert Storm in 1991 (both M2A0 and M3A0 consisted of 19% of all Bradleys in theater), the A0s were more intended as attrition spares while the improved A1 and A2 variants were sent into combat.\n\nIntroduced in Update 1.85 "Supersonic", the M3 Bradley remains a relatively unique vehicle in the American lineup as an infantry fighting vehicle. Like in real-life, players would have to handle the Bradley\'s relatively large size alongside main battle tanks and its paper-thin armour against both kinetic and chemical shells. The mobility is nothing spectacular to write home about either aside from being able to get the Bradley from point A to point B in a suitable manner. That said, the variety of firepower it is able to dish out makes it a lethal machine. The APDS shells the autocannon armament fires can penetrate more than a few tanks from the side armour, not to mention being able to make mincemeat out of lightly armoured vehicles. However, when facing tanks or faraway targets, the TOW missiles are a great piece of tool to have to ensure a critical hit even from far out, the only downside being the long missile launcher deployment time from when the Bradley is moving to coming to a halt.',
    quantity: 160,
    regularPrice: 221400,
    salePrice: 0,
    sku: "#usa",
    sales: 0,
    categoryId: 1,
    brandId: 1,
    id: 1,
    brand: {
      id: 1,
      name: "USA",
    },
    category: {
      id: 1,
      name: "Light tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 1,
        imageName: "image_2024-03-07_113619616.png",
        imageURL:
          "/api/public/images/1709786188152-image_2024-03-07_113619616.png",
        productId: 1,
      },
    ],
  },
  {
    name: "Begleitpanzer 57",
    description:
      "At first glance, the Begleitpanzer 57 may be confused for a SPAA due to the light armoured chassis and the rapid-firing 57 mm autocannon. On the turret is also a TOW launcher with SACLOS guidance, meaning it will automatically align itself with where the crosshair is pointing.\n\nAs it shares the same chassis, the Begleitpanzer 57's construction is similar to that of the Marder A1-, with light armour all around and sides that heavy machine guns can penetrate. The main cannon's exterior mounting also means it can be disabled by machine guns and shrapnel.\n\nAs a light tank, the Begleitpanzer 57 carries great firepower and high mobility. The 57 mm autocannon has a penetration power close to that of the ZSU-57-2's, but the addition of a TOW launcher system makes this vehicle able to engage heavier targets. ",
    quantity: 400,
    regularPrice: 264400,
    salePrice: 0,
    sku: "#germany",
    sales: 0,
    categoryId: 1,
    brandId: 2,
    id: 2,
    brand: {
      id: 2,
      name: "Germany",
    },
    category: {
      id: 1,
      name: "Light tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 2,
        imageName: "image_2024-03-07_114725408.png",
        imageURL:
          "/api/public/images/1709786897835-image_2024-03-07_114725408.png",
        productId: 2,
      },
    ],
  },
  {
    name: "BMP-2M",
    description:
      'The BMP-2M is a squadron rank VII Soviet light tank (infantry fighting vehicle) with a battle rating of 10.0 (AB/RB/SB). It was introduced during Update "Starfighters". The BMP-2M is a light, mobile yet lethal light tank. Although its survivability and armour are not remarkable, its armament and utility are unmatched at its battle rating. ',
    quantity: 600,
    regularPrice: 710000,
    salePrice: 0,
    sku: "#ussr",
    sales: 0,
    categoryId: 1,
    brandId: 3,
    id: 3,
    brand: {
      id: 3,
      name: "USSR",
    },
    category: {
      id: 1,
      name: "Light tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 3,
        imageName: "image_2024-03-07_115040467.png",
        imageURL:
          "/api/public/images/1709787041902-image_2024-03-07_115040467.png",
        productId: 3,
      },
      {
        id: 17,
        imageName: "1313835.jpg",
        imageURL: "/api/public/images/1714547056901-1313835.jpg",
        productId: 3,
      },
      {
        id: 18,
        imageName: "379637837_834841054692851_4926159161020769310_n.jpg",
        imageURL:
          "/api/public/images/1714547553239-379637837_834841054692851_4926159161020769310_n.jpg",
        productId: 3,
      },
      {
        id: 19,
        imageName: "370107501_2269859519870308_7591553494577235281_n.png",
        imageURL:
          "/api/public/images/1714547553244-370107501_2269859519870308_7591553494577235281_n.png",
        productId: 3,
      },
    ],
  },
  {
    name: "M1A2 Abrams",
    description:
      'The Tank, Combat, Full Tracked, 120-mm Gun M1A2 (shortened to M1A2 Abrams) is a rank VIII American medium tank with a battle rating of 11.7 (AB/RB/SB). It was introduced in Update 1.93 "Shark Attack" as the top researchable vehicle in the US Ground Forces tech tree. The M1A2 introduces heavy depleted uranium armour and a commander\'s thermal sight. ',
    quantity: 580,
    regularPrice: 1080000,
    salePrice: 0,
    sku: "#usa",
    sales: 0,
    categoryId: 2,
    brandId: 1,
    id: 4,
    brand: {
      id: 1,
      name: "USA",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 4,
        imageName: "image_2024-03-07_115738818.png",
        imageURL:
          "/api/public/images/1709787460902-image_2024-03-07_115738818.png",
        productId: 4,
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
    name: "Т-90А",
    description:
      "The T-90A is the first variant of the T-90 main battle tank family. Intended to replace the T-72 main battle tank family as the new armoured spearhead, it features many improvements, such as a new 125 mm 2A46 tank gun, the 1A45T fire-control system, an upgraded engine, and advanced gunner's sight with thermal imaging equipment. Standard protection measures include steel and composite armour, smoke grenade dischargers, Kontakt-5 explosive reactive armour (ERA), and the Shtora-1 infrared anti-tank guided missile (ATGM) jamming system. When a weapon-guidance laser is directed at the tank, the jamming system first warns and highlights the direction for the tank's crew. After the crew has directed the turret to face the threat, the infrared jammer, TShU1-7 EOCMDAS, jams the semi-automatic command to line of sight (SACLOS) guidance system used by some anti-tank guided missiles (ATGM) to neutralize the threat.\n\nIntroduced in Update \"New Power\", the T-90A has a playstyle that is similar to that of traditional Soviet main battle tanks. It excels in support roles as well as flanking and sniping, thanks to its low profile and strong frontal armour. Due to its slow reverse speed, which is an inherent flaw in almost all Soviet main battle tanks, close-range engagements are not recommended unless absolutely necessary. It is best to take a hull-down position early in the game and lay down supportive fire for friendly forces leading the assault. ",
    quantity: 60,
    regularPrice: 830000,
    salePrice: 0,
    sku: "#ussr",
    sales: 0,
    categoryId: 2,
    brandId: 3,
    id: 6,
    brand: {
      id: 3,
      name: "USSR",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 6,
        imageName: "image_2024-03-07_121345526.png",
        imageURL:
          "/api/public/images/1709788426916-image_2024-03-07_121345526.png",
        productId: 6,
      },
    ],
  },
  {
    name: "Challenger 2 (2F)",
    description:
      'The FV4034 Challenger 2 (Dorchester Level 2F) is a modification of the Challenger 2 designed to provide enhanced protection in urban combat. First deployed in Iraq in 2004 to counter rocket-propelled grenades (RPGs), the armour package provides an extra level of protection over the previous Dorchester Level 2E, featuring extra Chobham armour (non-explosive reactive armour (NERA) and ceramic composites), as well as ROMOR-A explosive reactive armour (ERA) on the front plates and Dorchester Level 2F blocks on the hull and sides. The ERA tiles are installed on a frame, which is attached to the front hull. For protection against various portable anti-tank weapons, additional external composite armour is placed on both the turret and hull sides, as well as slat armour covering the rear parts of the hull and back of the turret.\n\nIntroduced in Update "Starfighters", the Challenger 2 (2F) offers substantially better protection than the standard Challenger 2. Certain small-calibre anti-tank high explosive (HEAT) ammunition, as well as some low-penetration anti-tank guided missiles (ATGMs), can be easily resisted. It is crucial to note, however, that the Dorchester 2F extra armour packages are intended to defend against portable anti-tank weapons rather than modern, heavy anti-tank weapons. Another significant difference is that the mobility of the Challenger 2 (2F) is significantly lower than that of the standard Challenger 2, resulting in even more disadvantages when compared to other nations\' main battle tanks. As a result, it is critical to be cautious when crossing open regions on the maps during matches and to keep an eye out for fast-flanking enemies. ',
    quantity: 200,
    regularPrice: 950000,
    salePrice: 0,
    sku: "#greatbritain",
    sales: 0,
    categoryId: 2,
    brandId: 5,
    id: 7,
    brand: {
      id: 5,
      name: "Great Britain",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 7,
        imageName: "image_2024-03-07_121700670.png",
        imageURL:
          "/api/public/images/1709788679781-image_2024-03-07_121700670.png",
        productId: 7,
      },
    ],
  },
  {
    name: "Type 10",
    description:
      'The Type 10 (10式戦車) was initially accepted into service in 2010 (with effect in 2012) to complement and replace the existing Type 74 and Type 90 main battle tanks. Compared to its predecessors, there was a bigger emphasis on the C4I system, weight reduction, and modular armour.\n\nIt was introduced in Update "Winged Lions". Like the prototype before it (TKX), it comes densely armoured with a weaker engine compared to its heavier brother the Type 90; but provides an excellent end tier Type 10 APFSDS shell which it can fire every 4 seconds. It can brawl at CQC combat due to its fast fire-rate, excel at sniping with its enhanced Gen 3 thermal imaging, sight zoom, and LWS/LRF. The Type 10 is an MBT that can full fill its role, with the only major downsides being the long first-ammo rack replenish rate and the armour not being on par with other end-tier MBTs. ',
    quantity: 150,
    regularPrice: 1080000,
    salePrice: 0,
    sku: "japan",
    sales: 0,
    categoryId: 2,
    brandId: 6,
    id: 8,
    brand: {
      id: 6,
      name: "Japan",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 8,
        imageName: "image_2024-03-07_121912504.png",
        imageURL:
          "/api/public/images/1709788753539-image_2024-03-07_121912504.png",
        productId: 8,
      },
    ],
  },
  {
    name: "Type 90 (B)",
    description:
      'The Type 90 (B) (90式戦車B型) is a small alteration on the Type 90 equipping mounting plates on the hull to allow for the Type 92 mine roller.\n\nIt was introduced in Update 1.95 "Northern Wind". Essentially being a backup to the previous Type 90, it does everything the same and offers only minor plates to the hull which won\'t exactly improve survivability. The only real downside of the plates is the inability to mount a dozer blade like its previous model. ',
    quantity: 150,
    regularPrice: 950000,
    salePrice: 0,
    sku: "#japan",
    sales: 50,
    categoryId: 2,
    brandId: 6,
    id: 9,
    brand: {
      id: 6,
      name: "Japan",
    },
    category: {
      id: 2,
      name: "Medium tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 9,
        imageName: "image_2024-03-07_121953072.png",
        imageURL:
          "/api/public/images/1709788826252-image_2024-03-07_121953072.png",
        productId: 9,
      },
    ],
  },
  {
    name: "T34",
    description:
      'The Heavy Tank T34 is a rank IV American heavy tank with a battle rating of 7.0 (AB) and 6.7 (RB/SB). It was introduced in Update 1.67 "Assault". A formidable heavy tank with thick armour and heavy gun, the T34 presents a radical new tank design, more so than any of its predecessors. ',
    quantity: 400,
    regularPrice: 210000,
    salePrice: 0,
    sku: "#usa",
    sales: 0,
    categoryId: 3,
    brandId: 1,
    id: 10,
    brand: {
      id: 1,
      name: "USA",
    },
    category: {
      id: 3,
      name: "Heavy tanks",
      quantity: 0,
    },
    productImages: [
      {
        id: 10,
        imageName: "image_2024-03-07_122516959.png",
        imageURL:
          "/api/public/images/1709789137440-image_2024-03-07_122516959.png",
        productId: 10,
      },
    ],
  },
  {
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
  {
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
  {
    name: "IS-1",
    description:
      "The IS-1 is the first variant of the IS heavy tank family. The new IS-1 was intended to overcome the lack of firepower and protection issues of the KV series with a whole new sloped hull design. This was a strong armour design intended to deflect or withstand projectiles from all sides. The only major design requirement was that the weight not surpass that of the interim KV-85. The new armament was the same as the KV-85, an outstanding 85 mm D-5T tank gun with significantly higher range and muzzle velocity than prior Soviet heavy tanks. The turret was also identical to that of the KV-85, with three crews. The drivetrain was similar to that of the KV-85, with enormous tracks supported by three pairs of double return rollers and six double-tired wheels suspended by massive torsion arms. Extra fuel tanks were fitted to the rear of the hull, as with all earlier heavy tanks, and massive mudguards housed storage boxes. The engine was replaced with a new V2-IS 12-cylinder diesel engine producing 520 horsepower. The typical top speed was 37 km/h, and the practical range was only 150 km. Chelyabinsk Kirov Plant was responsible for the IS-1 manufacturing, and the first IS-1 rolled off the line in October 1943, but production was halted in January 1944 as the IS-1 was swiftly replaced by the all-round better IS-2. As a result, only 200-207 units were produced in total.\n\nIntroduced in the Closed Beta Test for Ground Forces before Update 1.41, the IS-1 has slightly superior hull protection than the interim KV-85. Tank shells can be easily deflected at long ranges thanks to a unique sloped frontal hull. However, the hull's lower front armour plate remains a weakness, and nearly all opponents in its rank are able to penetrate it. The visual characteristics of the IS-1 are also comparable to those of the KV-85. Players who have previously played the KV-85 should have little difficulty adjusting to this vehicle. The IS-1, unlike its predecessor, was developed with the purpose of breaching enemy heavy defences and engaging hostile armoured vehicles in mind and, as such, has thicker sloping armour, a slightly longer chassis, a more powerful 85 mm D-5T tank gun, and a larger, rounder turret. ",
    quantity: 1000,
    regularPrice: 135000,
    salePrice: 400,
    sku: "#ussr",
    sales: 0,
    categoryId: 3,
    brandId: 3,
    id: 13,
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
        id: 13,
        imageName: "image_2024-03-07_124953734.png",
        imageURL:
          "/api/public/images/1709790596410-image_2024-03-07_124953734.png",
        productId: 13,
      },
    ],
  },
];

export class AllProducts extends ScreenLayout {
  productGrid: HTMLDivElement = Container("all_products-container-2-1");
  constructor() {
    // Leading class name: "all_products"

    // Container
    super("all_products-container");
  }

  initData() {
    // 1. Initialize content
    this.initContent();
  }

  initContent() {
    this.container.innerText = "";

    // 1. Container 1. [breadcrumb, add new product button]
    const container1 = Container("all_products-container-1");
    {
      // 1.1. Breadcrumb
      const breadcrumb = new Breadcrumb(["allProducts"]);
      // 1.2. Button
      const button = new Button({
        startIcon: addCircleIcon,
        text: "add new product",
        onClick: () => {},
      });
      // Add children
      container1.append(breadcrumb.render(), button.render());
    }

    // 2. Container 2. [product grid, pagination]
    const container2 = Container("all_products-container-2");
    {
      // 2.1. Product grid
      this.productGrid;
      // 2.2. Pagination
      const pagination = new Pagination(
        productsTest.length,
        12,
        (pageIndex, start, end) => {
          pageIndex;
          this.initProductCards(start, end);
        }
      );
      // Add children
      container2.append(this.productGrid, pagination.render());
    }

    // Add children
    this.container.append(container1, container2);
  }

  private initProductCards(start: number, end: number) {
    this.productGrid.innerText = "";
    productsTest.slice(start, end).forEach((product) => {
      const productCard = new ProductCard(product);
      this.productGrid.append(productCard.render());
    });
  }

  render() {
    return this.container;
  }
}
