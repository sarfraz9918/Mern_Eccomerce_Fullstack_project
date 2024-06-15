import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { increaseQuantity, decreaseQuantity, removeItem } from "../productSlice";

const CartPage = () => {
    const cartData = useSelector((state) => state.cartProduct.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const qtyIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const qtyDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const itemRemove = (id) => {
        dispatch(removeItem(id));
    };

    const checkOut = () => {
        navigate("/checkout");
    };

    let totalAmount = 0;
    const myData = cartData.map((key) => {
        totalAmount += key.price * key.qnty;
        return (
            <tr key={key.id}>
                <td><img src={key.image} alt={key.name} width="70" height="50" /></td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.categ}</td>
                <td style={{ color: "#007bff", fontSize: "20px" }}>
                    <a onClick={() => qtyDecrease(key.id)}>
                        <FaMinusCircle />
                    </a>
                    <span style={{ paddingLeft: "10px", paddingRight: "10px", fontWeight: "bold" }}>
                        {key.qnty}
                    </span>
                    <a onClick={() => qtyIncrease(key.id)}>
                        <FaPlusCircle />
                    </a>
                </td>
                <td>{key.price.toFixed(2)}</td>
                <td>{(key.price * key.qnty).toFixed(2)}</td>
                <td>
                    <button style={{backgroundColor:"white",color:"black"}} onClick={() => itemRemove(key.id)}><RxCross1 /></button>
                </td>
            </tr>
        );
    });

    return (
        <>
        <div className='customermain'>

        <h1>My Cart Items</h1>
            <table align='center' id="customers">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {myData}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">Total Net Amount</td>
                        <td colSpan="2">{totalAmount.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
            <button id="checkout-button" onClick={checkOut}>Check Out</button>

        </div>   
             </>
    );
};

export default CartPage;
