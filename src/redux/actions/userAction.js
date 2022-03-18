import axios from "axios";
import { API_URL } from "../../Supports/helper";

export const loginAction = (email, password) => {
    return (dispatch) => {
        axios.get(API_URL + `/users?email=${email}&password=${password}`)
            .then((res) => {
                // menyimpan data ke localstorage browser
                console.log(res.data)
                localStorage.setItem("tokenId", res.data[0].id);

                // Menyimpan data kereducer
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0]
                })
            }).catch((err) => {
                console.log(err)
            })
    }
}

export const logoutAction = () => {
    localStorage.removeItem("tokenId");
    return {
        type: "LOGOUT"
    }
}

export const updateCart = (dataCart) => {
    return {
        type: "UPDATE_CART",
        payload: dataCart
    }
}