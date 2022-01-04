import { call, put, delay } from "redux-saga/effects";
import {requestAddProductsToCart,requestGetProductsToCart,requestDeleteProductsFromCart} from "../requests/user_cart";
import {addToCartReducer,setProductsToCartReducer,removeFromCartReducer} from "../../actions/index";

export function* getProductsToCartSaga(action) {
  try {
    const response = yield call(requestGetProductsToCart, action.data);
    const { data } = response;
    yield put(setProductsToCartReducer(data));
  } catch (error) {
    console.log(error);
  }
}

export function* addProductsToCart(action) {
  try {
    const response = yield call(requestAddProductsToCart, action.data);
    const { data } = response;
    yield put(addToCartReducer(data));
  } catch (error) {
    console.log(error);
  }
}

export function* deleteProductsFromCart(action) {
  try {
    const response = yield call(requestDeleteProductsFromCart, action.data);
    const { data } = response;
    localStorage.setItem("cart_delete", response.data);
    yield put(removeFromCartReducer(data));
  } catch (error) {
    console.log(error);
  }
}
