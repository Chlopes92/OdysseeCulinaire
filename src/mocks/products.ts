export interface IProductImg {
    src: string;
    alt: string;
}

export interface IIngredient {
    id: number;
    title: string;
}

export interface IIncludedIngredient {
    ingredient: IIngredient;
    isSelected: boolean;
}

export interface IExtraIngredient {
    ingredient: IIngredient;
    additionalPrice: number;
    isSelected: boolean;
}

export type ProductCategoryType = "entrees" | "plats" | "desserts" | "boissons";

export type TagType = "vegan" | "vegetarien" | "viande" | "sans-gluten" | "avec-alcool" | "sans-alcool";

export type ProductAllergyType = "produits-laitiers" | "allium" | "poisson" | "arachide";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    mythologie?: string | null;
    price: number;
    maxQuantity: number;
    quantity: number;
    category: string[];
    tags?: TagType[];
    allergy?: ProductAllergyType[];
    img: IProductImg;
    includedIngredients: IIncludedIngredient[];
    extras: IExtraIngredient[];
    isAddToCart: boolean;
}

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        title: "Tzatziki d'Apollon",
        description: "Sauce à base de yaourt, de concombre, d'ail et d'huile d'olive, servie avec du pain pita.",
        mythologie: "* Dieu de la lumière, du soleil, de la musique, des arts, des soins, des prophéties, de la poésie, de la pureté, des sports et de la beauté. Il est le fils de Zeus, le roi des dieux et de la titanide Léto ainsi que le frère jumeau d'Artémis et le père du dieu de la médecine Asclépios",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegetarien", "sans-gluten"],
        allergy: ["allium", "produits-laitiers"],
        img: {
            src: "/image/tzatziki.png",
            alt: "Tzatziki"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Pita"
                },
                isSelected: true,
            }
        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Légumes crus",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 2,
        title: "Dolmadakia des Dryades ",
        description: "Feuilles de vigne farcies de riz, d'oignons, d'herbes et de tomates.",
        mythologie: "* Nymphes des arbres et des forêts",
        price: 6,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegetarien", "vegan", "sans-gluten"],
        img: {
            src: "/image/dolmadakia.png",
            alt: "Dolmadakia"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Oignons"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Tomates"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Viande hachée",
                },
                additionalPrice: 3.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 3,
        title: "Choriatiki Actée ",
        description: "Salade avec des morceaux de feta, de tomates, de concombre, relevé par des olives noires, de l'huile d'olive et du jus de citron.",
        mythologie: "* Une Néréide, citée par Apollodore, déesse des rivages.",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegetarien", "sans-gluten"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/salade-feta.png",
            alt: "Salade Feta"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Feta"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Tomates"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Concombre"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 4,
                    title: "Olives noires"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Feta",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 4,
        title: "Tarama Lélantos",
        description: "Pâte à base d'oeufs de cabillaud, d'huile d'olive et de jus de citron, servie avec du pain grillé.",
        mythologie: "* Un jeune Titan, né d'Ouranos (le Ciel) et de Gaïa (la Terre),dieu des qualités animales permettant de passer inaperçu ou de s'échapper mais aussi de l'invisibilité de la brise. ",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegetarien", "sans-gluten"],
        allergy: ["poisson"],
        img: {
            src: "/image/tamara.png",
            alt: "Tarama"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Pain grillé"
                },
                isSelected: true,
            }
        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Citron",
                },
                additionalPrice: 0.5,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 1,
                    title: "Pain grillé",
                },
                additionalPrice: 1,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 5,
        title: "Fava d'Héraclès ",
        description: "Purée de pois cassés jaunes, assaisonnée d'huile d'olive, de jus de citron frais et de fines herbes.",
        mythologie: "* Fils de Zeus et d’Alcmène, est l'un des héros les plus vénérés de la Grèce antique. Il naît à Thèbes, héros célèbre pour ses douze travaux. ",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegan", "vegetarien", "sans-gluten"],
        img: {
            src: "/image/fava.png",
            alt: "Fava"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Huile d'olive"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Jus de citron"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Feta",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 6,
        title: "Psarosoupa d'Hébé",
        description: "Soupe grecque traditionnelle à base de poisson, de légumes frais et d'épices.",
        mythologie: "* déesse de la jeunesse",
        price: 5.5,
        maxQuantity: 10,
        quantity: 1,
        category: ['entrees'],
        tags: ["vegetarien", "sans-gluten"],
        allergy: ["poisson"],
        img: {
            src: "/image/psarosoupa.png",
            alt: "Psarosoupa"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Herbes aromatiques"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Carottes"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Pommes de terres",
                },
                additionalPrice: 1,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Carottes",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 7,
        title: "Ezme Églé",
        description: "Purée de tomates, poivrons et d'oignons épicés.",
        mythologie: "* déesse de la bonne santé radieuse, la mère des Trois Grâces qu'elle aurait eues avec Hélios.",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        tags: ["vegan", "vegetarien", "sans-gluten"],
        img: {
            src: "/image/ezme.png",
            alt: "Ezme"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Tomates"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Poivrons"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Oignons"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Epices",
                },
                additionalPrice: 1,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 8,
        title: "Meze Mixte Athéna",
        description: "Assortiment d'entrées",
        mythologie: "* Déesse de l'intelligence, de la stratégie guerrière, de la sagesse",
        price: 10,
        maxQuantity: 10,
        quantity: 1,
        category: ["entrees"],
        img: {
            src: "/image/meze-mixte.png",
            alt: "Meze Mixte"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Olives noires"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Olives vertes"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Tzatziki"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 4,
                    title: "Salade feta"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "salade verte",
                },
                additionalPrice: 1,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 9,
        title: "Souvlaki de Déméter ",
        description: "Morceaux de viande marinés et grillés, enveloppés dans un pain pita, garnis de légumes frais & des frites, de sauce tzatziki et d'herbes parfumées.",
        mythologie: "* Déesse de la fertilité, de l'agriculture, des céréales et des moissons. Déméter enseigna aux humains le labour. Déméter est souvent représentée assise, avec une gerbe d'épis de blé tressés.",
        price: 10.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande"],
        allergy: ["produits-laitiers", "allium"],
        img: {
            src: "/image/souvlaki.png",
            alt: "Souvlaki"
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Frites"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Tzatziki"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Frites",
                },
                additionalPrice: 2.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 10,
        title: "Spanakopita d'Apollon",
        description: "Feuilletés fourrés d'épinards et de fromage feta.",
        mythologie: "* Dieu de la guérison et de la médecine, des arts, du chant, de la musique, de la beauté masculine, de la poésie et de la lumière. Il est conducteur des neuf muses. Apollon est également le dieu des purifications et de la guérison.",
        price: 11,
        maxQuantity: 10,
        quantity: 1,
        category: ['plats'],
        tags: ["vegetarien", "vegan"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/spanakopita.png",
            alt: "Spanakopita",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sauce Tzatziki"
                },
                isSelected: true,
            }
        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Salade verte",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 11,
        title: "Moussaka d'Euthénie",
        description: "Gratin d'aubergines, de viande hachée, de tomates et de béchamel.",
        mythologie: "* Esprit de la prospérité, de l'abondance et de la profusion.",
        price: 10,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/moussaka.png",
            alt: "Moussaka",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Piment"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Basilic"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Béchamel",
                },
                additionalPrice: 1.25,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 12,
        title: "Pastitsio d'Hormê ",
        description: "Gratiné composé de couches de pâtes, de viande hachée assaisonnée et de sauce béchamel.",
        mythologie: "* Esprit de l'élan, de l'enthousiasme, du fait de se mettre en mouvement et de commencer une action. La personnification de l'activité énergétique, l'impulsion ou l'effort (pour faire une chose),",
        price: 11,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande", "sans-gluten"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/pastitsio.png",
            alt: "Pastitsio",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Béchamel"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Herbes aromatiques"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Béchamel",
                },
                additionalPrice: 1.25,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 13,
        title: "Keftedes d'Alpos ",
        description: "Boulettes préparées avec de la viande hachée, des herbes aromatiques, des épices et des légumes servis avec une sauce tzatziki.",
        mythologie: "* Monstre géant avec cent têtes de vipère qui sème le désordre dans les étoiles, il est tué par Dionysos avec du lierre.",
        price: 11,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande", "sans-gluten"],
        allergy: ["produits-laitiers", "allium"],
        img: {
            src: "/image/keftedes.png",
            alt: "Keftedes",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sauce Tzatiki"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Olives noires"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Pain pita"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Boulettes de viande",
                },
                additionalPrice: 2.5,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Sauce Tzatiki",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 14,
        title: "Peynirli kofte Hédoné",
        description: "Boulettes de viande hachée, fromage et sauce tomate, servie avec du blé, frites et salade.",
        mythologie: "* Esprit du plaisir. Fille de Psyché (déesse de l'âme) et d'Éros (dieu de l'amour, forme grecque de Cupidon)1. Elle est la déesse du plaisir, de la volupté et de la sensualité, sa forme romaine est Voluptas.",
        price: 11,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande", "sans-gluten"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/peynirli-kofte.png",
            alt: "Peynirli kofte",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Frites"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Salade verte"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Galette de blé"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Frites",
                },
                additionalPrice: 1.5,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Salade",
                },
                additionalPrice: 1.25,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Sauce",
                },
                additionalPrice: 1.5,
                isSelected: false,
            },


        ],
        isAddToCart: false,
    },
    {
        id: 15,
        title: "Grillades mixtes Héphaïstos",
        description: "Festin de viandes variées: des morceaux de bœuf, d'agneau et de poulet parfaitement grillés, accompagnées de légumes grillés et d'arômes fumés",
        mythologie: "* Fils d'Héra et de Zeus,le dieu du feu, de la forge2 et de la métallurgie. C'est celui qui brûle, qui est allumé. Très habile dans son art, Héphaïstos est capable de concevoir des objets et automates complexes, précieux et d'une grande beauté. ",
        price: 20,
        maxQuantity: 10,
        quantity: 1,
        category: ["plats"],
        tags: ["viande", "sans-gluten"],
        img: {
            src: "/image/grillades-mixtes.png",
            alt: "Grillades mixtes",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Boeuf"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Agneaux"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Poulet"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 4,
                    title: "Légumes grillés"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Légumes grillés",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 16,
        title: "Loukoumades  d'Ambroisie",
        description: "Beignets frits en forme de boules, servis chauds et arrosés de miel et de noix.",
        mythologie: "* C'est une substance divine, nourriture délicieuse des dieu, qui leur assure avec le nectar leur immortalité. L'ambroisie se caractérise par sa douceur, il serait du miel sauvage. ",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["desserts"],
        tags: ["vegetarien"],
        allergy: ["arachide", "produits-laitiers"],
        img: {
            src: "/image/loukoumades.png",
            alt: "Loukoumades",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Miel"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Noix"
                },
                isSelected: true,
            }

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Noix",
                },
                additionalPrice: 2,
                isSelected: false,
            }
        ],
        isAddToCart: false,
    },
    {
        id: 17,
        title: "Portokalopita Arès ",
        description: "Gâteau à l'orange à base de semoule et de jus d'orange, servi avec une sauce à l'orange ou du sirop de miel.",
        mythologie: "* Dieu de la Guerre et de la destruction.de la brutalité et du carnage. Il va au combat accompagné de sa sœur, Éris (la Discorde), ses fils Déimos (la Terreur) et Phobos (la Panique), ainsi que d’Ényo, déesse des batailles.    ",
        price: 5.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["desserts"],
        tags: ["vegetarien"],
        allergy: ["produits-laitiers"],
        img: {
            src: "/image/portokalopita.png",
            alt: "Portokalopita",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sauce à l'orange"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Miel"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Noix",
                },
                additionalPrice: 2,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 18,
        title: "Baklava d'Artémis",
        description: "Pâtisserie à base de pâte filo, de noix et de sirop.",
        mythologie: "* La déesse de la nature sauvage, de la chasse. Fille de Zeus et de Léto, elle est la sœur jumelle d'Apollon.Elle est aussi la protectrice des chemins et des ports, des très jeunes enfants et des jeunes animaux ",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["desserts"],
        tags: ["vegetarien", "vegan"],
        allergy: ["arachide"],
        img: {
            src: "/image/baklava.png",
            alt: "Baklava",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Noix"
                },
                isSelected: true,
            }
        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Sirop",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 19,
        title: "Kataifi Daphné",
        description: "Dessert composé de fils de pâte filo croustillants et d'une garniture de noix,  enrobé d'un sirop parfumé à la cannelle et au citron.",
        mythologie: "* une nymphe d'une très grande beauté.Elle serait le premier amour d'Apollon.",
        price: 6,
        maxQuantity: 10,
        quantity: 1,
        category: ["desserts"],
        tags: ["vegetarien", "vegan"],
        allergy: ["arachide"],
        img: {
            src: "/image/kataifi.png",
            alt: "Kataifi",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Crème fouettée"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Noix"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Crème de noix",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 20,
        title: "Sokolatopita Zéphyr",
        description: "Gâteau au chocolat grec, moelleux, garni de noix et arrosé de sirop de chocolat.",
        mythologie: "* Dieu du vent de l'ouest et du printemps, fils des titans Astréos et Éos (l'Aurore)",
        price: 5.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["desserts"],
        tags: ["vegetarien"],
        allergy: ["arachide", "produits-laitiers"],
        img: {
            src: "/image/sokolatopita.png",
            alt: "Sokolatopita",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sirop de chocolat"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Noix"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Sirop de chocolat",
                },
                additionalPrice: 1,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 21,
        title: "Le Nectar de Circé",
        description: "Café fort et sucré, préparé dans une cafetière en cuivre appelée briki.",
        mythologie: "* Circé était une puissante sorcière rencontrée par Ulysse lors de son périple. Ce nom évoque une boisson divine et envoûtante.",
        price: 6.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "sans-alcool"],
        img: {
            src: "/image/cafe.png",
            alt: "Café",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sucre"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Chantilly",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 22,
        title: "Cascade Bleue d'Ithaque",
        description: "Cocktail à base de liqueur Skinos Mastiha, soda pétillant, jus de citron frais, myrtilles fraîches et de la glace pilée",
        mythologie: "* Ce nom évoque les magnifiques cascades d'Ithaque, l'île natale d'Ulysse, et fait référence à la couleur bleue vive de la boisson.",
        price: 6.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "avec-alcool"],
        img: {
            src: "/image/cascade-bleue.png",
            alt: "Cascade Bleue d'Ithaque",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Myrtilles"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Feuilles de menthe"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Glaçons",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 23,
        title: "Le Souffle d'Éole",
        description: "Boisson à base de jus de citron frais, d'eau pétillante, de sirop de sucre et d'une touche de menthe fraîche",
        mythologie: "* Éole est le dieu grec des vents, que Ulysse a rencontré lors de son voyage. Il évoque l'idée d'une boisson rafraîchissante et vivifiante, semblable à une brise fraîche apportée par les vents divins.",
        price: 5.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "sans-alcool"],
        img: {
            src: "/image/souffle-deole.png",
            alt: "Limonade",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Feuilles de menthe"
                },
                isSelected: true,
            }
        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Glaçons",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 24,
        title: "La Tentation de Calypso",
        description: "Boisson mélangeant de la pastèque avec des touches d'agrumes et de basilic",
        mythologie: "*  Calypso était une nymphe qui a retenu Ulysse sur son île pendant plusieurs années. Ce nom suggère une boisson rafraichissante et captivante.",
        price: 5.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "sans-alcool"],
        img: {
            src: "/image/calypso.png",
            alt: "La Tentation de Calypso",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Basilic"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Citron"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Glaçons",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 25,
        title: "L'Élixir d'Apollon",
        description: "Infusion de thé grec à la camomille, associée à du miel doux, du jus de citron et du romarin",
        mythologie: "* Inspiré du dieu grec Apollon, associé à la lumière, à la guérison et aux arts. Ce thé à la camomille apaisant et réconfortant évoque la tranquillité et la sagesse d'Apollon",
        price: 5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "sans-alcool"],
        img: {
            src: "/image/the.png",
            alt: "Thé à la Camomille",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Romarin"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Miel"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 3,
                    title: "Jus de citron"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Romarin",
                },
                additionalPrice: 0.5,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Miel",
                },
                additionalPrice: 1.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 26,
        title: "Chant des Sirènes",
        description: "Cocktail mariant l'anisée de l'ouzo grec avec de la liqueur de grenade, du sirop de grenadine et de la glace pilée",
        mythologie: "* Ce nom évoque le célèbre épisode de l'Odyssée où Ulysse et son équipage sont tentés par le chant envoûtant des sirènes.",
        price: 7.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "avec-alcool"],
        img: {
            src: "/image/chant-sirene.png",
            alt: "Chant des Sirènes",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Sirop de grenadine"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Romarin"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Graines de grenade",
                },
                additionalPrice: 1.25,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },
    {
        id: 27,
        title: "Tempête de Poséidon",
        description: "Cocktail à base de tequila, jus de pamplemousse, sirop de gingembre et une pointe de Tabasco.",
        mythologie: "*  Ce nom évoque la puissance et la fureur du dieu des mers, Poseidon. Ce cocktail offre une expérience gustative puissante et enivrante.",
        price: 7.5,
        maxQuantity: 10,
        quantity: 1,
        category: ["boissons"],
        tags: ["vegetarien", "vegan", "avec-alcool"],
        img: {
            src: "/image/poseidon.png",
            alt: "Tempête de Poséidon",
        },
        includedIngredients: [
            {
                ingredient: {
                    id: 1,
                    title: "Tabasco"
                },
                isSelected: true,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Feuilles de menthe"
                },
                isSelected: true,
            },

        ],

        extras: [
            {
                ingredient: {
                    id: 1,
                    title: "Pamplemousse",
                },
                additionalPrice: 0.75,
                isSelected: false,
            },
            {
                ingredient: {
                    id: 2,
                    title: "Tabasco",
                },
                additionalPrice: 0.5,
                isSelected: false,
            }

        ],
        isAddToCart: false,
    },

]