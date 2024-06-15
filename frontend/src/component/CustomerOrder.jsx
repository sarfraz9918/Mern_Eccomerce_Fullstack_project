import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerOrder = () => {



    const [mydata, setMydata] = useState([]);

    const loadData = () => {
        let url = "http://localhost:8000/products/customerorder";

        axios.get(url)
            .then((res) => {
                console.log(res.data);
                setMydata(res.data.response);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    const updateStatus = (id, newStatus) => {
        let url = `http://localhost:8000/products/customerorder/${id}`;

        axios.put(url, { status: newStatus })
            .then((res) => {
                setMydata(mydata.map(order => order._id === id ? { ...order, status: newStatus } : order));
            })
            .catch((error) => {
                console.error("Error updating status:", error);
            });
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleStatusChange = (id, event) => {
        const newStatus = event.target.value;
        updateStatus(id, newStatus);
    }

    const renderOrders = () => {
        return mydata.map((order, index) => (
            <tr key={order._id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.mobile}</td>
                <td>{order.pincode}</td>
                <td>{order.productitems}</td>
                <td>{order.totalproductprice}</td>
                <td>{new Date(order.dop).toLocaleDateString()}</td>
                <td>
                    <select style={{width:"130px"}} value={order.status} onChange={(event) => handleStatusChange(order._id, event)}>
                        <option value="Order Pending"> Order Pending</option>
                        <option value=" Order Accepted"> Order Accepted</option>
                        <option value=" Order Rejected"> Order Rejected</option>
                    </select>
                </td>
            </tr>
        ));
    };

    return (
        <>
        <div style={{width:"90%",margin:"auto"}}>

        <marquee>  Welcome To Our Customer Order Page</marquee>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Pin Code</th>
                        <th>Product Items</th>
                        <th>Total Price</th>
                        <th>Date of Purchasing</th>
                        <th> Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderOrders()}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default CustomerOrder;
