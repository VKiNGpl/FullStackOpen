import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

async function getAll() {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
}

async function create(newObject) {
    const request = axios.post(baseUrl, newObject);
    const response = await request;
    return response.data;
}

async function update(id, newObject) {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    const response = await request;
    return response.data;
}

const exportedObject = { getAll, create, update };

export default exportedObject;
