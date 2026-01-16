"use server"
import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId: string) => {
    const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
    return response.data;
};

export const getContactById = async (id: string) => {
    const response = await axios.get(`${API_URL}/contacts/${id}`);
    return response.data;
};

export const craeteContact = async (contact: ContactType) => {
    const response = await axios.post(`${API_URL}/contacts`, contact);
    return response.data;
};

export const updateContact = async (id: string, contact: ContactType) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
    return response.data;
};

export const deleteContact = async (id: string) => {
    // 1. Construct the URL manually so we can inspect it
    const url = `${API_URL}/contacts/${id}`;
    
    // 2. LOG IT! check your terminal for this line
    console.log("🛑 ATTEMPTING DELETE ON URL:", url);

    const response = await axios.delete(url);
    return response.data;
};