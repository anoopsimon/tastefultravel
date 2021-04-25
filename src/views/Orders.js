import React, { useState } from "react";
import orders from "../data/orders.json"
import { useAuth0 } from "@auth0/auth0-react";

const Orders = () => {
  const [message, setMessage] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      //const response = await fetch(`${serverUrl}/api/messages/public-message`);

      //const responseData = await response.json();
  console.log(orders);
      setMessage(orders);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={callApi}>
          View My Orders
        </button>
        {message.map((order, index) => (
          <div>
                    <hr></hr>

        <p>Order Number : {order.OrderNumber} </p>
        <p> Restaurant {order.Restaurant}!</p>
        <p> Order Date :{order.Date}!</p>
        <p> Order Status :{order.OrderStatus}!</p>

        <hr></hr>
       </div>
    ))}
     </div>
  );
};

export default Orders;
