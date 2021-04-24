import React, { useState } from "react";
import orders from "../data/orders.json"
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
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
          Get Public Message
        </button>
        {message.map((order, index) => (
        <p>{order.OrderNumber} from {order.Restaurant}!</p>
    ))}
     </div>
  );
};

export default ExternalApi;
