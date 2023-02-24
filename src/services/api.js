import axios from "axios";
const apiUrl ="http://elsalamdist.com/api"

export const getProduct =async (sku)=> {
        const res = await axios.get(`${apiUrl}/product`,{params:{sku}})
        console.log(await res.data)
            return(await res.data)

}