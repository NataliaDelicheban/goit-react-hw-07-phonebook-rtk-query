import axios from "axios";

const instance = axios.create({
    baseURL: "https://631f38b922cefb1edc464596.mockapi.io/contacts",
});

export const getContacts = async () => {
    const { data } = await instance.get("/");
    return data;
};

export const addContact = async (data) => {
    const { data: result } = await instance.post("/", data);
    return result;
};

export const removeContact = async (id) => {
    const { data: result } = await instance.delete(`/${id}`);
    return result;
}