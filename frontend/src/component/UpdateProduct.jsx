import { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const UpdateProduct = () => {
  const [myproduct, setMyproduct] = useState([]);
  const  navigate=useNavigate();
  const loadProduct = () => {
    let url = "http://localhost:8000/products/updateproduct";
    axios.get(url).then((res) => {
      setMyproduct(res.data.product);
    });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const myDelete = (myid) => {
    axios.post("http://localhost:8000/products/productdelete", { id: myid }).then((res) => {
      alert(res.data.msg);
      loadProduct();
    });
  };


  const myEdit=(myid)=>{
    navigate("/editdata/"+myid); 
  } 

  const renderProductData = () => {
    return myproduct.map((product) => (
      <tr key={product._id}>
        <td>
          <img src={product.imagepath} alt={product.name} style={{ width: "50px", height: "50px" }} />
        </td>
        <td>{product.name}</td>
        <td>{product.brand}</td>
        <td>{product.category}</td>

        <td>{product.price} /-</td>
        <td>
          <RiDeleteBin7Fill onClick={() => { myDelete(product._id) }} style={{ cursor: 'pointer', color: 'red' }} />
        </td>
        <td>
          

          <CiEdit onClick={() => { myEdit(product._id) }} style={{ cursor: 'pointer', color: 'green' }} />

        </td>
      </tr>
    ));
  };

  return (
    <div id="featureProduct">
      
      <div className="table-container">
               
        <h1 align="center" className="ss">The Update Product</h1>
        <table>
     
    
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <td>Category</td>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {renderProductData()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProduct;
