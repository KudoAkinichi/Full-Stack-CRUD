import axios from "axios"


export const addData = async (data) => {
    try {
       const newData = await axios.post("/api/contacts", data)
       return newData;
    } catch (error) {
        throw new Error(error.message);
    }
}