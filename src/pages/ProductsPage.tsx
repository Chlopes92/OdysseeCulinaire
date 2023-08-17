import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import { IProduct, PRODUCTS, ProductAllergyType, TagType } from "mocks/products";
import style from './ProductsPage.module.css'
// import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";


const tagValues: TagType[] = ["vegan", "vegetarien", "viande", "sans-gluten", "avec-alcool", "sans-alcool"];
const allergyValues: ProductAllergyType[] = ["produits-laitiers", "allium", "poisson", "arachide"];



const TagList = () => {
const navigate = useNavigate();
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
            pathname: "/products",
            search:`?filter=${tagArray}&excludeAllergy=${allergyArray}`
        })
    }

    return (
        <ul>
            {tagValues.map(tag => (
                <li key={tag} className={`${tagArray.includes(tag)? 'selected' : ""}`}>
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
                pathname: "/products",
                search:`?filter=${filterArray}&excludeAllergy=${allergyArray}`
            })
        }
    return (
        <ul>
            {allergyValues.map((allergy) => (
                <li key={allergy} className={`${allergyArray.includes(allergy)? 'selected' : ""}`}>
                    <button onClick={() => toggleAllergy(allergy)}>
                        {allergy}
                    </button>
                </li>
            ))}
        </ul>
    );
}

const ProductsPage = () => {
    let product_filtered = PRODUCTS
    const [query] = useSearchParams()
    const tagArray = query.get('filter')?.split(",") as TagType[]
    console.log("Tag Array: ", tagArray);
    let allergyArray = query.get('excludeAllergy')?.split(",") as ProductAllergyType[]
    // console.log("Allergy Array: ", allergyArray);
        if(tagArray?.length && tagArray[0].length){
            product_filtered = PRODUCTS.filter(product => {
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
            product_filtered = product_filtered.filter(product => {
                let tmp = true
                    allergyArray.forEach(allergy =>{
                        if(product.allergy?.includes(allergy)){
                            tmp = false
                    }})
                    return tmp;
            });
        }


    // let product_excluded = PRODUCTS.filter(product => !product.allergy?.includes(allergyValues ?? ''));
    const product_displayed = product_filtered.map((product) =>
        <li key={product.id}>
            <ProductItem product={product} />
        </li>)

    return (
        <section>
            <Carousel />
            <section>
                <h2>Filtrage :</h2>
                <TagList />

                <h2>Allergènes :</h2>
                <AllergyList />
            </section>
        <ul className={style.menu}>
            {product_displayed}
        </ul>
        </section>
    )
}

export default ProductsPage;