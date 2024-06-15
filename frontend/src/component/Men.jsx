import { useState, useEffect } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector,useDispatch} from "react-redux";
const Men=()=>{
    const [MenProduct, setmenProduct]= useState([]);
    const dispatch= useDispatch();
    const MenloadProduct=()=>{
        let url="http://localhost:8000/products/Menproduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setmenProduct(res.data.product);
        });
        
    }

    useEffect(()=>{
        MenloadProduct();
    }, []);
    const trendingData= MenProduct.map((key)=>{
        return(
         <>
             <div>
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
  <div id="featureProduct">
          <h1 align="center" > Men Products</h1> 
            <div id="shopProList">
            {trendingData}
            </div>
      </div>

      
        
        </>
    )
}
export default Men;