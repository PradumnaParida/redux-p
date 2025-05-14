import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../services/Actions/action";
import { removeFromCart } from "../services/Actions/action";

const mapStateToProps = (state) => {
//   return {
//     data: state.cartItems
//   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartHandler: (data) => {
      dispatch(addToCart(data));
    },
    removeToCartHandler: (data) => {
      dispatch(removeFromCart(data));
    },
  };
  
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);