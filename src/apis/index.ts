import axios from "axios";

const PROXY = "https://62fdf3fea85c52ee482c6229.mockapi.io/api";

export async function getData(url:string) {
    const res = await axios.get(
      `${PROXY}/${url}`
    );
    return res;
}