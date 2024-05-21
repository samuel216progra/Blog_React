import React, { useEffect, useState } from "react";
import { getPostingDetails } from "../../services/api";
import './postingDetails.css'
import { Input } from "../Input";
import { addComment } from "../../services/api";

export const PostingDetails = ({ publicationId }) => {
    const [postingDetails, setPostingDetails] = useState(null);

    const fetchPublicationDetails = async () => {
        try {
            if (publicationId) {
                const data = await getPostingDetails(publicationId);
                console.log(data)
                setPostingDetails(data)
            } else {
                console.error('No se encontró la publicación');
            }
        } catch (error) {
            console.error('Error al encontrar la publicación: ', error)
        }
    }

    useEffect(() => {
        fetchPublicationDetails();
        console.log('Obteniendo detalles de publicación para id:', publicationId)
    }, [publicationId]);

    console.log('Detalles de la publicacion:', postingDetails);

    return (
        <div className="publication-details-container">
            {postingDetails && (
                <div className="publication-details">
                    <div className="publication-details-item">
                        <label>Autor:</label>
                        <div>{postingDetails.data.autor}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Titulo:</label>
                        <div>{postingDetails.data.titulo}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Descripción:</label>
                        <div>{postingDetails.data.texto}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Categoria:</label>
                        <div>{postingDetails.data.categoria}</div>
                    </div>
                    <div className="publication-details-item">
                        <label>Link:</label><br />
                        <a href={postingDetails.data.link} target="_blank" rel="noopener noreferrer">
                            {postingDetails.data.link}
                        </a>
                    </div>
                    <div className="publication-details-item">
                        <label>Tecnologías utilizadas:</label>
                        <div>{postingDetails.data.tools}</div>
                    </div>
                    <img src={postingDetails.data.imagePrincipal} alt="Imagen" className='post-image'/>
                    <hr />
                </div>
            )}
        </div>
    )
}
