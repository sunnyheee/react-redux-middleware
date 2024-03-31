function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/sunnyheee/react-webshopping/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}
function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/sunnyheee/react-webshopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProducts, getProductDetail };
