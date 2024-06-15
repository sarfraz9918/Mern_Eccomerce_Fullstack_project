import { useState, useEffect } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector,useDispatch} from "react-redux";



const FeaturedProducts=()=>{
    const [featureProduct, setFeatureProduct]= useState([]);
    const dispatch= useDispatch();
    const loadFetureProduct=()=>{
        let url="http://localhost:8000/products/featureproduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setFeatureProduct(res.data.product);
        });
    }

    useEffect(()=>{
        loadFetureProduct();
       

    }, []);


    const fetaureData= featureProduct.map((key)=>{
        return(
         <>
             <div id="pro1">
                 <img src={key.imagepath} style={{width:"200px", height:"200px"}} className="img" />
                 <br/>
                 {key.name}
                 <br/>
                 Brand: {key.brand}
                 <br/>
                 Price :  {key.price} /-
                 <br/>
                 <button class="button"  
              onClick={
            ()=>{dispatch(addtoCart({id:key._id, name:key.name, brand:key.brand, desc:key.description, 
            categ:key.category, price:key.price, image:key.imagepath, qnty:1}))}}> Add to Cart </button>
             </div>


         
         </>
        )
    })

    return(
        <>
         <div id="featureProduct">
            <h2> Featured Products </h2>   
            <div id="fetaureProList">
                 {fetaureData}
        
            </div>


      </div>
        
        </>
    )
}
export default FeaturedProducts;