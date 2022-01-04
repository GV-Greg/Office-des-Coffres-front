import axios from 'axios';

let apiDomain = "";
if(process.env.NODE_ENV === "production") {
    apiDomain = "https://odc-admin.creacube.be/api";
} else {
    apiDomain = "http://odc.local/odc-api-back/public/api";
}

export default axios.create({
    baseURL: apiDomain,
    headers: {
        "Content-type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
    }
})