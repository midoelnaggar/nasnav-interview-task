import axios from "axios";

export const getProduct =async (id)=> {
        const res = await axios.get(`./data/products.json`)
        if (await res.data) {
            const product = await res?.data?.filter((product)=> {return(product?.id === id)})[0]
            return(product)
        }
}