import { useState } from "react";
import axios from "axios";
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const myData = useSelector((state) => state.cartProduct.cart);
    console.log(myData);
    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            setError("Please enter a product name to search");
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post("http://localhost:8000/products/productsearch", { pname: searchQuery });
            setProducts(response.data);
            if (response.data.length === 0) {
                setError("No available products");
            }
        } catch (error) {
            setError("Error searching for products");
        } finally {
            setLoading(false);
        }
    };
    const productData = products.map((product) => (
        <div id="pro1" key={product._id}>
            <img src={product.imagepath} style={{ width: "200px", height: "200px" }} alt={product.name} />
            <br />
            {product.name}
            <br />
            Brand: {product.brand}
            <br />
            Price: {product.price} /-
            <br />
            <button className="button" onClick={() => {
                dispatch(addtoCart({
                    id: product._id,
                    name: product.name,
                    brand: product.brand,
                    desc: product.description,
                    categ: product.category,
                    price: product.price,
                    image: product.imagepath,
                    qnty: 1
                }))
            }}>Add to Cart</button>
        </div>
    ));
    
    return (
        <>
            <div id="featureProduct">
                <div align="center" className="searchproduct">
                    <input
                        type="text"
                        placeholder="Search by product name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ padding: "10px", width: "20%", marginBottom: "20px" }}
                    />
                    <button onClick={handleSearch} style={{ padding: "9px", marginLeft: "10px",width:"100px" }}>Search</button>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <div id="shopProList">
                    {products.length > 0 ? productData : !loading && <p></p>}
                </div>
            </div>
        </>
    );
}

export default Search;
