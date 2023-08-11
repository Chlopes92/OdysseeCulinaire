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
console.log(tagArray)
if(tagArray === undefined){
    tagArray=[]
}else if (tagArray.length && tagArray[0].length === 0){
    tagArray.pop()
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
            search:`?filter=${tagArray}`
        })
    }

    return (
        <ul>
            {tagValues.map(tag => (
                <li key={tag}>
                    <button onClick={() => toggleTag(tag)}>
                        {tag}
                    </button>
                </li>
            ))}
        </ul>
    );
}

const AllergyList = () => {
    return (
        <ul>
            {allergyValues.map(allergy => (
                <li key={allergy}>
                    <button>
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
        } else {
            product_filtered = PRODUCTS;
        }


    //let product_excluded = PRODUCTS.filter(product => !product.allergy?.includes(allergyValues ?? ''));
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