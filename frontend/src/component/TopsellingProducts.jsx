import { useState, useEffect } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector,useDispatch} from "react-redux";


const TopsellingProducts=()=>{
    const [topsellingProduct, setTopSellingProduct]= useState([]);
    const dispatch= useDispatch();

    const loadTopSellingProduct=()=>{
        let url="http://localhost:8000/products/topsellingroduct";
        axios.get(url).then((res)=>{
            console.log(res.data.product);
            setTopSellingProduct(res.data.product);
        });
    }
    useEffect(()=>{
        loadTopSellingProduct();
       

    }, []);

    const topSellingData= topsellingProduct.map((key)=>{
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
         <div id="TopsellingProduct">
            <h2 className="se">  Top Selling Products </h2>   
            <div id="TopsellingProList">
                 {topSellingData}
        
            </div>


      </div>
        
        </>
    )
}
export default TopsellingProducts