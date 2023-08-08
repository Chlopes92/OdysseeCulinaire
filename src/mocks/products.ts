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

export type TagType = "vegan" | "vegetarien" | "viande" | "sans-gluten" | "avec-alcool" | "sans-alcool" ;

export type ProductAllergyType = "produits-laitiers" | "allium" | "poisson" | "arachide";

export interface IProduct {
id: number;
title: string;
description: string;
mythologie?: string | null;
price: number;
maxQuantity: number;
category: ProductCategoryType[];
tags?: TagType[];
allergy?: ProductAllergyType[];
img: IProductImg;
includedIngredients: IIncludedIngredient[];
extras: IExtraIngredient[];
isAddToCart : boolean;
}

export const PRODUCTS: IProduct[] = [
{
id: 1,
title : "Tzatziki", 
description: "Sauce à base de yaourt, de concombre, d'ail et d'huile d'olive, servie avec du pain pita.", 
price: 5,
maxQuantity: 10,
category:  ["entrees"] ,
tags:  ["vegetarien", "sans-gluten"],
allergy: ["allium", "produits-laitiers"],
img: {
         src: "/image/tzatziki.png",
         alt: "Tzatziki"
}, 
includedIngredients:[
    {
        ingredient:{
            id: 1,
            title: "avec pita"
        },
        isSelected: false,
    },
    {
        ingredient:{
            id: 1,
            title: "sans pita"
        },
        isSelected: false,
    },    

],
   
extras:[
    {
        ingredient:{
            id: 1,
            title: "légumes crus",
        },
        additionalPrice: 1.5,
        isSelected: false,
    }
   
],
isAddToCart: false,
},
{
    id: 2,
    title: "Dolmadakia",
    description: "Feuilles de vigne farcies de riz, d'oignons, d'herbes et de tomates.",
    price: 6,
    maxQuantity: 10,
    category: ["entrees"],
    tags: ["vegetarien", "vegan", "sans-gluten"],
    img:{
        src:"/image/dolmadakia.png",
        alt:"Dolmadakia"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "viande hachée",
            },
            additionalPrice: 3.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 3,
    title:"Choriatiki",
    description: "Salade avec des morceaux de feta, de tomates, de concombre, relevé par des olives noires, de l'huile d'olive et du jus de citron.",
    price: 5,
    maxQuantity: 10,
    category:["entrees"],
    tags: ["vegetarien", "sans-gluten"],
    allergy: ["produits-laitiers"],
    img:{
        src:"/image/salade-feta.png",
        alt:"Salade Feta"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart:false,
},
{
    id: 4,
    title: "Tarama",
    description: "Pâte à base d'oeufs de cabillaud, d'huile d'olive et de jus de citron, servie avec du pain grillé.",
    price: 5,
    maxQuantity: 10,
    category:["entrees"],
    tags: ["vegetarien", "sans-gluten"],
    allergy: ["poisson"],
    img:{
        src:"/image/tamara.png",
        alt: "Tarama"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},

{
    id: 5,
    title: "Fava",
    description: "Purée de pois cassés jaunes, assaisonnée d'huile d'olive, de jus de citron frais et de fines herbes.",
    price: 5,
    maxQuantity: 10,
    category: ["entrees"],
    tags: ["vegan", "vegetarien", "sans-gluten"],
    img:{
        src:"/image/fava.png",
        alt:"Fava"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 6,
    title: "Psarosoupa",
    description: "Soupe  grecque traditionnelle à base de poisson, de légumes frais et d'épices.",
    price: 5.5,
    maxQuantity: 10,
    category: ['entrees'],
    tags: ["vegetarien","sans-gluten"],
    allergy: ["poisson"],
    img:{
        src:"/image/psarosoupa.png",
        alt:"Psarosoupa"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 7,
    title: "Ezme",
    description: "Purée de tomates, poivrons et d'oignons épicés.",
    price: 5,
    maxQuantity: 10,
    category:["entrees"],
    tags: ["vegan", "vegetarien", "sans-gluten"],
    img: {
        src:"/image/ezme.png",
        alt: "Ezme"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 8,
    title: "Meze Mixte",
    description: "Assortiment d'entrées",
    price: 10,
    maxQuantity: 10,
    category: ["entrees"],
    img: {
        src:"/image/meze-mixte.png",
        alt: "Meze Mixte"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 9,
    title: "Souvlaki",
    description: "Morceaux de viande marinés et grillés, enveloppés dans un pain pita, garnis de légumes frais & des frites, de sauce tzatziki et d'herbes parfumées.",
    price: 10.5,
    maxQuantity: 10,
    category: ["plats"],
    tags: ["viande", "vegetarien"],
    allergy: ["produits-laitiers", "allium"],
    img: {
        src:"/image/souvlaki.png",
        alt: "Souvlaki"
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 10,
    title: "Spanakopita",
    description: "Feuilletés fourrés d'épinards et de fromage feta.",
    price: 11,
    maxQuantity: 10,
    category: ['plats'],
    tags: ["vegetarien", "vegan"],
    allergy: ["produits-laitiers"],
    img: {
        src:"/image/spanakopita.png",
        alt: "Spanakopita",
    }, 
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 11,
    title: "Moussaka",
    description: "Gratin d'aubergines, de viande hachée, de tomates et de béchamel.",
    price: 10,
    maxQuantity: 10,
    category:["plats"],
    tags: ["viande", "vegan", "vegetarien"],
    allergy: ["produits-laitiers"],
    img: {
        src:"/image/moussaka.png",
        alt: "Moussaka",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 12,
    title: "Pastitsio",
    description: "Gratiné composé de couches de pâtes, de viande hachée assaisonnée et de sauce béchamel.",
    price: 11,
    maxQuantity: 10,
    category:["plats"],
    tags: ["viande", "vegan", "vegetarien", "sans-gluten"],
    allergy: ["produits-laitiers"],
    img: {
        src:"/image/pastitsio.png",
        alt: "Pastitsio",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 13,
    title: "Keftedes",
    description: "Boulettes préparées avec de la viande hachée, des herbes aromatiques, des épices et des légumes servis avec une sauce tzatziki.",
    price: 11,
    maxQuantity: 10,
    category:["plats"],
    tags: ["viande", "vegan", "vegetarien", "sans-gluten"],
    allergy: ["produits-laitiers", "allium"],
    img: {
        src:"/image/keftedes.png",
        alt: "Keftedes",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 14,
    title: "Peynirli kofte",
    description: "Boulettes de viande hachée, fromage et sauce tomate, servie avec du blé, frites et salade.",
    price: 11,
    maxQuantity: 10,
    category:["plats"],
    tags: ["viande", "vegan", "vegetarien", "sans-gluten"],
    allergy: ["produits-laitiers"],
    img: {
        src:"/image/peynirli-kofte.png",
        alt: "Peynirli kofte",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 15,
    title: "Grillades mixtes",
    description: "Festin de viandes variées: des morceaux de bœuf, d'agneau et de poulet parfaitement grillés, accompagnées de légumes grillés et d'arômes fumés",
    price: 20,
    maxQuantity: 10,
    category:["plats"],
    tags: ["viande", "sans-gluten"],
    img: {
        src:"/image/grillades-mixtes.png",
        alt: "Grillades mixtes",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 16,
    title: "Loukoumades",
    description: "Beignets frits en forme de boules, servis chauds et arrosés de miel et de noix.",
    price: 5,
    maxQuantity: 10,
    category:["desserts"],
    tags: ["vegetarien"],
    allergy: ["arachide"],
    img: {
        src:"/image/loukoumades.png",
        alt: "Loukoumades",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 17,
    title: "Portokalopita",
    description: "Gâteau à l'orange à base de semoule et de jus d'orange, servi avec une sauce à l'orange ou du sirop de miel.",
    price: 5.5,
    maxQuantity: 10,
    category:["desserts"],
    tags: ["vegetarien", "vegan"],
    img: {
        src:"/image/portokalopita.png",
        alt: "Portokalopita",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 18,
    title: "Baklava",
    description: "Pâtisserie à base de pâte filo, de noix et de sirop.",
    price: 5,
    maxQuantity: 10,
    category:["desserts"],
    tags: ["vegetarien", "vegan"],
    allergy: ["arachide"],
    img: {
        src:"/image/baklava.png",
        alt: "Baklava",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 19,
    title: "Kataifi",
    description: "Dessert composé de fils de pâte filo croustillants et d'une garniture de noix,  enrobé d'un sirop parfumé à la cannelle et au citron.",
    price: 6,
    maxQuantity: 10,
    category:["desserts"],
    tags: ["vegetarien", "vegan"],
    allergy: ["arachide"],
    img: {
        src:"/image/kataifi.png",
        alt: "Kataifi",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},
{
    id: 20,
    title: "Sokolatopita",
    description: "Gâteau au chocolat grec, moelleux, garni de noix et arrosé de sirop de chocolat.",
    price: 5.5,
    maxQuantity: 10,
    category:["desserts"],
    tags: ["vegetarien", "vegan"],
    allergy: ["arachide"],
    img: {
        src:"/image/sokolatopita.png",
        alt: "Sokolatopita",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "sans-alcool"],
    img: {
        src:"/image/cafe.png",
        alt: "Café",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "avec-alcool"],
    img: {
        src:"/image/cascade-bleue.png",
        alt: "Cascade Bleue d'Ithaque",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "sans-alcool"],
    img: {
        src:"/image/souffle-deole.png",
        alt: "Limonade",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "sans-alcool"],
    img: {
        src:"/image/calypso.png",
        alt: "La Tentation de Calypso",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "sans-alcool"],
    img: {
        src:"/image/the.png",
        alt: "Thé à la Camomille",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "avec-alcool"],
    img: {
        src:"/image/chant-sirene.png",
        alt: "Chant des Sirènes",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
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
    category:["boissons"],
    tags: ["vegetarien", "vegan", "avec-alcool"],
    img: {
        src:"/image/poseidon.png",
        alt: "Tempête de Poséidon",
    },
    includedIngredients:[
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },
        {
            ingredient:{
                id: 1,
                title: ""
            },
            isSelected: false,
        },    
    
    ],
       
    extras:[
        {
            ingredient:{
                id: 1,
                title: "",
            },
            additionalPrice: 1.5,
            isSelected: false,
        }
       
    ],
    isAddToCart: false,
},

]
