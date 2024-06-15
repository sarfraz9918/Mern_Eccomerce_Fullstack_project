import {Link, Outlet} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logoImg from "./images/logo.png";
import Search from "./component/Search";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const CartLink = ({ itemNumber }) => (
  <Link to="cartpage">
    <FiShoppingCart />
    {itemNumber > 0 && <span className="cartCount">{itemNumber}</span>}
  </Link>
);

const Layout=()=>{
    const cartItem= useSelector((state)=>state.cartProduct.cart);
    const  navigate=useNavigate();
    const itemNumber= cartItem.length;

const sirch=()=>{
  navigate("search"); 
  
}

const dis=()=>{
  navigate("Login")
}

    return(
        <>
  <div className="stop">
  <div className="search-container">
  
   
   
  
 
  
  
</div>

          {/* Main Menu */}
          
         
           <div id="mainmenu">
              
               <div id="mainmenumiddle">
                <div>
                  <ul>
                    <li> <div id="mainmenulogo">
               <img src={logoImg} />
               </div></li>
                    <li><Link to="home"> HOME</Link>  </li>
                    <li> <Link to="men">MEN</Link></li>
                    <li> <Link to="women">WOMEN</Link></li>
                    <li> <Link to="babycollection" > BABY COLLECTION</Link>  </li>
                    <li> <Link to="shop"> SHOP </Link></li>
                   
                    <li> <Link to="contact"> CONTACT</Link></li>
                    <li>  <Link to="cartpage">
                
                <CartLink itemNumber={itemNumber} />
               
                </Link></li>
                    <li  > <span onClick={sirch} > < AiOutlineSearch size={24} /></span>
                    </li>
                    
                    
                    <li className="admin-item">
    <Link to="adminuser">
      <RiAdminFill size={14} />
    </Link>
  </li>

  <li></li>
                  </ul>
                  
                  
               </div>
               <div id="mainmenuicon">
               
            
               
            

    
               </div>

               </div>

           </div>
         

             
           </div>
         
         <Outlet/>
        </>
    )
}


export default Layout;