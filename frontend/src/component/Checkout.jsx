import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
  
  const [input, setInput] = useState({ name: '', address: '', mobile: '', pincode: '' });
  const cartData = useSelector((state) => state.cartProduct.cart);

  let totalAmount = 0;
  let productDetails = "";

  cartData.forEach((item) => {
    totalAmount += item.price * item.qnty;
    productDetails += `${item.name} qty - ${item.qnty} rate - ${item.price}, `;
  });

  useEffect(() => {
    setMyProduct({
      price: totalAmount,
      name: productDetails.trim(),
    });
  }, [cartData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const [myProduct, setMyProduct] = useState({
    price: totalAmount,
    name: productDetails,
  });

  const initPay = (data) => {
    const options = {
      key: "rzp_test_vsiboo60YG8UXx",
      amount: data.amount,
      currency: data.currency,
      name: myProduct.name,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "https://localhost:8000/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);
          console.log(data);
          alert('Payment Successful!');
          setInput({ name: '', address: '', mobile: '', pincode: '' }); // Reset form
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    
    if (!input.name || !input.address || !input.mobile || !input.pincode) {
      toast.success('Please fill out all the required fields.');

      return;
    }
    try {
      const orderURL = "http://localhost:8000/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: myProduct.price, productitems: myProduct.name, ...input });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form style={{ width: "40%", margin: "auto", position: "relative", top: "10px" }}>
        <h1>Payment</h1>
        <h2>Enter Your Shipping Address</h2>
        <div>
          <label>Enter Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Enter Address: </label>
          <input
            type="text"
            name="address"
            value={input.address}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Enter Mobile No: </label>
          <input
            type="text"
            name="mobile"
            value={input.mobile}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Enter Pin code: </label>
          <input
            type="text"
            name="pincode"
            value={input.pincode}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Net Payable Amount: </label>
          <span> {totalAmount} </span>
        </div>
        <div>
          <button type="button" onClick={handlePay}>Pay Now!</button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
