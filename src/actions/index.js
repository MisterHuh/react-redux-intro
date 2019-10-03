import types from "./types"
import axios from "axios"

export function tick() {
  return{
    type: types.TICK,
    payload: new Date().toLocaleTimeString()
  }
}

export function setTextColor(color) {
  return {
    type: types.SET_TEXT_COLOR,
    color: color
  }
}


export function getProducts() {
  return async function (dispatch) {
    const resp = await axios.get("http://api.sc.lfzprototypes.com/api/products");

    console.log("Get Products Response: ", resp);

    dispatch({
      type: types.GET_PRODUCTS,
      products: resp.data.products
    })
  }
}


/* this is step 19 first axios call */
// export async function getProducts() {
//   const resp = await axios.get("http://api.sc.lfzprototypes.com/api/products")
//   console.log("Product Response: ", resp)

//   return {
//     type: "GET_PRODUCTS",
//     products: resp.data.products
//   }
// }


/* this is step 15; not working on purpose*/
// export function getProducts() {
//   axios.get("http://api.sc.lfzprototypes.com/api/products")
//     .then(resp => {
//       console.log("Product Response: ", resp)
//     })
// }
