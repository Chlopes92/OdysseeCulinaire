import { PRODUCTS, ProductAllergyType, TagType } from "mocks/products";
import {
    useNavigate,
    useParams,
    useSearchParams,
    // useNavigate 
} from "react-router-dom";
import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import style from './ProductsPage.module.css'
import { useState } from "react";
import NavBar from "components/NavBar/NavBar";


const tagValues: TagType[] = ["vegan", "vegetarien", "viande", "sans-gluten", "avec-alcool", "sans-alcool"];
const allergyValues: ProductAllergyType[] = ["produits-laitiers", "allium", "poisson", "arachide"];

const TagList = () => {
const navigate = useNavigate();
let { category } = useParams();
const [query] = useSearchParams()
let tagArray = query.get('filter')?.split(",") as TagType[]
let allergyArray = query.get('excludeAllergy')?.split(",") as ProductAllergyType[]
console.log(tagArray)
if(tagArray === undefined){
    tagArray=[]
}else if (tagArray.length && tagArray[0].length === 0){
    tagArray.pop()
}
if(allergyArray === undefined){
        allergyArray=[]
    } else if (allergyArray.length && allergyArray[0].length === 0){
        allergyArray.pop()
    }
// console.log("test", test.getAll('filter') )
    const toggleTag = (tag: TagType) =>{
        if(tagArray.includes(tag)){
            tagArray = tagArray.filter(tagValue => {
                if(tag === tagValue){
                    return false;
                }else{
                    return true;
                }
            })
        } else{
            tagArray.push(tag)
            // console.log(tagArray);
        }
        navigate({
            pathname: `/products/category/${category}`,
            search:`?filter=${tagArray}&excludeAllergy=${allergyArray}`
        })
    }

    return (
        <ul>
            {tagValues.map(tag => (
                <li key={tag} className={`${tagArray.includes(tag) ? style.selected : ""}`}>
                    <button onClick={() => toggleTag(tag)}>
                        {tag}
                    </button>
                </li>
            ))}
        </ul>
    );
}

const AllergyList = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    let { category } = useParams();
    let allergyArray = query.get('excludeAllergy')?.split(",") as ProductAllergyType[];
    let filterArray = query.get('filter')?.split(",") as TagType[]
    // console.log(allergyArray)
    if(allergyArray === undefined){
        allergyArray=[]
    } else if (allergyArray.length && allergyArray[0].length === 0){
        allergyArray.pop()
    }
    if(filterArray === undefined){
        filterArray=[]
    } else if (filterArray.length && filterArray[0].length === 0){
        filterArray.pop()
    }
   
        const toggleAllergy = (allergy: ProductAllergyType) =>{
            // console.log(allergy)
            if(allergyArray.includes(allergy)){
                allergyArray = allergyArray.filter(allergyValue => {
                    if(allergy === allergyValue){
                        return false;
                    }else{
                        return true;
                    }
                })
            } else{
                allergyArray.push(allergy)
                console.log(allergyArray);
            }
            navigate({
                pathname: `/products/category/${category}`,
                search:`?filter=${filterArray}&excludeAllergy=${allergyArray}`
            })
        }
    return (
        <ul>
            {allergyValues.map((allergy) => (
                <li key={allergy} className={`${allergyArray.includes(allergy)? style.selected : ""}`}>
                    <button onClick={() => toggleAllergy(allergy)}>
                        {allergy}
                    </button>
                </li>
            ))}
        </ul>
    );
}

const FilterSection = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
  
    const toggleFilter = () => {
      setIsFilterOpen(prevState => !prevState);
    };
  
    return (
      <section>
        <button className={style.filterButton} onClick={toggleFilter}>
          {isFilterOpen ? (
            <img src="/image/icons/close.png" alt="Close" />
          ) : (
            <img src="/image/icons/filter.png" alt="Filter" />
          )}
        </button>
        <div className={`${style.filterContent} ${isFilterOpen ? style.open : style.closed}`}>
          <h2>Filtrage :</h2>
          <TagList />
          <h2>Allergènes :</h2>
          <AllergyList />
        </div>
      </section>
    );
  };


const ProductCategoryPage = () =>{
    // If si pas category envoi page error 
    // const navigate = useNavigate();
    // navigate("/error");
    let { category } = useParams();
    console.log(category)
    let product_displayed = PRODUCTS.filter(product => product.category.includes(category ?? ''));
   // let product_displayed = PRODUCTS.filter(product => !product.category.includes(category ?? '')); //Exemple
//    let product_filtered = PRODUCTS
   const [query] = useSearchParams()
   const tagArray = query.get('filter')?.split(",") as TagType[]
   console.log("Tag Array: ", tagArray);
   let allergyArray = query.get('excludeAllergy')?.split(",") as ProductAllergyType[]
   // console.log("Allergy Array: ", allergyArray);
       if(tagArray?.length && tagArray[0].length){
        product_displayed = product_displayed.filter(product => {
           let tmp = true
               tagArray.forEach(tag => {
                   if (! product.tags?.includes(tag ?? ''))
                       tmp = false
               })
               return tmp;
               // return product.tags?.includes(tagValues ?? '')
           });
       }
       if(allergyArray?.length && allergyArray[0].length){
           console.log(allergyArray)
           product_displayed = product_displayed.filter(product => {
               let tmp = true
                   allergyArray.forEach(allergy =>{
                       if(product.allergy?.includes(allergy)){
                           tmp = false
                   }})
                   return tmp;
           });
       }


    return (
        <main>
            <Carousel />
            <FilterSection />
            <NavBar customClass={style.customNav} />
            <ul className={style.menu}>
                {product_displayed.map((product) => (
                    <li key={product.id}>
                        <ProductItem product={product} />
                    </li>
                ))}
            </ul>
            <img className={style.athena} src="/image/icons/athena.png" alt="" />
        </main>
    );
}

export default ProductCategoryPage;