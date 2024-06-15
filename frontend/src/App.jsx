
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import Men from "./component/Men";
import AdminUser from "./component/AdminUser";
import DashBoard from "./component/DashBoard";
import UploadProducts from "./component/UploadProducts";
import Shop from "./component/Shop";
import Women from "./component/Women";
import Babycollection from "./component/BabyCollection";
import Contact from "./component/Contact";
import CartPage from "./component/CartPage";
import MyCart from "./component/MyCart";
import CustomerForm from "./component/CustomerForm";
import Checkout from "./component/Checkout";
import CustomerOrder from "./component/CustomerOrder"
import UpdateProduct from "./component/UpdateProduct"
import Login from "./component/Login";
import EditDataShow from "./component/EditDataShow";
import Search from "./component/Search";







const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="men" element={<Men/>} />
            <Route path="women" element={<Women/>} />
            <Route path="contact" element={<Contact/>} />

            <Route path="babycollection" element={<Babycollection/>} />
            <Route path="cartpage" element={<CartPage/>}/>
            <Route path="cart" element={<MyCart/>}/>
            <Route path="adminuser" element={<AdminUser/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="loginpage" element={<Login/>}/>
            <Route path="search" element={<Search/>}/>
            



          

          </Route>

          <Route path="/editdata/:id" element={<EditDataShow/>}/>
          <Route path="admindashboard" element={<DashBoard/>}/>
          

         <Route path="admindashboard" element={<DashBoard/>}  >
            <Route path="uploadproduct" element={<UploadProducts/>}/>
            <Route path="CustomerForm" element={<CustomerForm/>}/>
            <Route path="CustomerOrder" element={<CustomerOrder/>}/>
            <Route path="UpdateProduct" element={<UpdateProduct/>}/>
            

            
            
         </Route>
        </Routes>
      
      </BrowserRouter>
  <Toaster/>

    </>
  )
}

export default  App;