export const loginAction = (dataLogin) => {
    console.log("1️⃣ DATA DARI COMPONENT/UI ==>", dataLogin);
    return {
        type: "LOGIN_SUCCESS",
        payload: dataLogin
    }
}

export const logoutAction = () => {
    localStorage.removeItem("tokenId");
    return {
        type: "LOGOUT"
    }
}