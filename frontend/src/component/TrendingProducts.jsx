import { useState, useEffect } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector,useDispatch} from "react-redux";


const TrendingProducts=()=>{
    const [trendingProduct, settrendingProduct]= useState([]);
    const dispatch= useDispatch();
    const loadtrendingProduct=()=>{
        let url="http://localhost:8000/products/trendingproduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            settrendingProduct(res.data.product);
        });
    }
    useEffect(()=>{
        
        loadtrendingProduct();

    }, []);

    const trendingData= trendingProduct.map((key)=>{
        return(
         <>
             <div id="pro1">
                 <img src={key.imagepath} style={{width:"200px", height:"200px"}} />
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
         <div id="TrendingProduct">
            <h2 className="se1">Trending Products</h2>   
            <div id="TrendingProList">
            {trendingData}
        
            </div>


      </div>
        
        </>
    )
}
export default TrendingProducts;