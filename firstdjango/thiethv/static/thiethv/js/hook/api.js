const PROXY = "http://atk.gishub.vn/api";
// const UerCustomer = JSON.parse(localStorage.getItem('auth'));
const UerCustomer = "token";

const API = function () {
    async function get(url) {
        try {
            const reponsive = await fetch(`${url}`);
            const data = await  reponsive.json();
            return data;
        } catch (e) {
            console.log(e)
        }
    }

    return {get}
}

export default API;