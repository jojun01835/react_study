import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch("https://react-http-46a30-default-rtdb.firebaseio.com/cart.json");

      if (!res.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await res.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!...",
          message: "Fetching cart data Failded!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendReq = async () => {
      const res = await fetch("https://react-http-46a30-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!res.oK) {
        throw new Error("fuck");
      }
    };

    try {
      await sendReq();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!...",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!...",
          message: "Sending cart data Failded!",
        })
      );
    }
  };
};
