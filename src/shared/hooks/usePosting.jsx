import { useState } from "react";
import toast from "react-hot-toast";
import { getPosting as getPostingRequest } from '../../services';

export const usePosting = () => {
    const [publication, setPublication] = useState([]);

    const getPosting = async () => {
        const publicationData = await getPostingRequest();
        if (publicationData.error) {
            return toast.error(
                publicationData.response?.data || "Error al obtener las publicaciones :("
            );
        }
        setPublication(publicationData.data);

        return publicationData.data;
    };
}