import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import {
  PRODUCTS,
  ProductAllergyType,
  TagType,
} from "mocks/products";
import style from "./ProductsPage.module.css";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import { useState } from "react";

const tagValues: TagType[] = [
  "vegan",
  "vegetarien",
  "viande",
  "sans-gluten",
  "avec-alcool",
  "sans-alcool",
];
const allergyValues: ProductAllergyType[] = [
  "produits-laitiers",
  "allium",
  "poisson",
  "arachide",
];

const navLinks = [
  {
    id: 1,
    text: "La Carte",
    url: "/products",
  },
  {
    id: 2,
    text: "Entrées",
    url: "/products/category/entrees",
  },
  {
    id: 3,
    text: "Plats",
    url: "/products/category/plats",
  },
  {
    id: 4,
    text: "Desserts",
    url: "/products/category/desserts",
  },
  {
    id: 5,
    text: "Boissons",
    url: "/products/category/boissons",
  },
];

const TagList = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  let tagArray = query.get("filter")?.split(",") as TagType[];
  let allergyArray = query
    .get("excludeAllergy")
    ?.split(",") as ProductAllergyType[];
  console.log(tagArray);
  if (tagArray === undefined) {
    tagArray = [];
  } else if (tagArray.length && tagArray[0].length === 0) {
    tagArray.pop();
  }
  if (allergyArray === undefined) {
    allergyArray = [];
  } else if (allergyArray.length && allergyArray[0].length === 0) {
    allergyArray.pop();
  }
  const toggleTag = (tag: TagType) => {
    if (tagArray.includes(tag)) {
      tagArray = tagArray.filter((tagValue) => {
        if (tag === tagValue) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      tagArray.push(tag);
    }
    navigate({
      pathname: "/products",
      search: `?filter=${tagArray}&excludeAllergy=${allergyArray}`,
    });
  };

  return (
    <ul className={`${style.flexFilter}`}>
      {tagValues.map((tag) => (
        <li key={tag}>
          <button
            className={`${tagArray.includes(tag) ? style.selected : ""} ${style.filter
              } `}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
};

const AllergyList = () => {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  let allergyArray = query
    .get("excludeAllergy")
    ?.split(",") as ProductAllergyType[];
  let filterArray = query.get("filter")?.split(",") as TagType[];
  if (allergyArray === undefined) {
    allergyArray = [];
  } else if (allergyArray.length && allergyArray[0].length === 0) {
    allergyArray.pop();
  }
  if (filterArray === undefined) {
    filterArray = [];
  } else if (filterArray.length && filterArray[0].length === 0) {
    filterArray.pop();
  }

  const toggleAllergy = (allergy: ProductAllergyType) => {
    if (allergyArray.includes(allergy)) {
      allergyArray = allergyArray.filter((allergyValue) => {
        if (allergy === allergyValue) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      allergyArray.push(allergy);
      console.log(allergyArray);
    }
    navigate({
      pathname: "/products",
      search: `?filter=${filterArray}&excludeAllergy=${allergyArray}`,
    });
  };
  return (
    <ul className={`${style.flexFilter}`}>
      {allergyValues.map((allergy) => (
        <li key={allergy}>
          <button
            onClick={() => toggleAllergy(allergy)}
            className={`${allergyArray.includes(allergy) ? style.selected : ""
              } ${style.filter}`}
          >
            {allergy}
          </button>
        </li>
      ))}
    </ul>
  );
};

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  return (
    <section className={style.filterSection}>
      <button className={style.filterButton} onClick={toggleFilter}>
        {isFilterOpen ? (
          <img src="/image/icons/close.png" alt="Close" />
        ) : (
          <img src="/image/icons/filter.png" alt="Filter" />
        )}
      </button>
      <div
        className={`${style.filterContent} ${isFilterOpen ? style.open : style.closed
          }`}
      >
        
          <h2>Filtrage :</h2>
          <TagList />
          <h2>Allergènes :</h2>
          <AllergyList />
        
      </div>
    </section>
  );
};

const ProductsPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  const title = navLinks.find((link) => {
    return link.url === location.pathname;
  });

  let product_filtered = PRODUCTS;
  const [query] = useSearchParams();
  const tagArray = query.get("filter")?.split(",") as TagType[];
  console.log("Tag Array: ", tagArray);
  let allergyArray = query
    .get("excludeAllergy")
    ?.split(",") as ProductAllergyType[];
  if (tagArray?.length && tagArray[0].length) {
    product_filtered = PRODUCTS.filter((product) => {
      let tmp = true;
      tagArray.forEach((tag) => {
        if (!product.tags?.includes(tag ?? "")) tmp = false;
      });
      return tmp;
    });
  }
  if (allergyArray?.length && allergyArray[0].length) {
    console.log(allergyArray);
    product_filtered = product_filtered.filter((product) => {
      let tmp = true;
      allergyArray.forEach((allergy) => {
        if (product.allergy?.includes(allergy)) {
          tmp = false;
        }
      });
      return tmp;
    });
  }

  const product_displayed = product_filtered.map((product) => (
    <li key={product.id}>
      <ProductItem product={product} />
    </li>
  ));

  return (
    <section className={style.positionRelative}>
      <Carousel />
      <h2 className={`${style.titre} ${style.none}`}>
        L’Odyssée Culinaire <br></br>“Venez vivre une expérience à la fois,
        temporel et gustative”{" "}
      </h2>
      <FilterSection />

      <div className={style.flex}>
        <NavBar
          customClass={style.customNav}
          customActiveClass={style.isActive}
        />

        <section className={`${style.flex} ${style.titleCenter}`}>
          {product_displayed.length ? (
            <ul className={style.menu}>{product_displayed}</ul>
          ) : (
            <h2 className={style.titleWidth}>Pas de produits correspondant à votre recherche</h2>
          )}
        </section>
      </div>
      <img className={product_displayed.length > 8 ? style.athena : style.imgNone} src="/image/icons/athena.png" alt="" />
    </section>
  );
};

export default ProductsPage;
