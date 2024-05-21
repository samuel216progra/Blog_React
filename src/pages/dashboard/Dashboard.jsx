import { Nav } from '../../components/nav/Nav.jsx';
import React, { useState, useEffect } from 'react';
import { getPosting } from '../../services/api.jsx';
import { Posting } from '../../components/posting/Posting.jsx';
import { PostingDetails } from '../../components/postingDetails/PostingDetails.jsx';

export const Dashboard = () => {
  const [publication, setPublication] = useState([]);
  const [selectedPostingId, setSelectedPostingId] = useState(null);

  const handleReadMoreClick = (id) => {
    console.log('clickear leer mas: ', id);
    setSelectedPostingId(id);
  }

  useEffect(() => {
    console.log('Id de la publicacion seleccionada: ', selectedPostingId)
  }, [selectedPostingId]);

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await getPosting();
        if (!response.error) {
          setPublication(response.data || []);
        } else {
          console.log('Error', response.data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchPublication();
  }, []);

  return (
    <>
      <Nav />
      <div className="publicacion-container">
        {publication.map((publicacion, index) => (
          <div key={index} className="publicacion-card">
            <h2>{publicacion.titulo}</h2>
            <div className="author-info">
              <label>Autor: </label>
              <p>{publicacion.autor}</p>
            </div>
            <img src={publicacion.imagePrincipal} alt="Imagen" className='post-image' />
            <div className="post-details">
              <label>Categoría: </label>
              <p>{publicacion.categoria}</p>
              <label>Texto: </label>
              <p>{publicacion.texto}</p>
              <label>Herramientas: </label>
              <p>{publicacion.tools}</p>
              <a href={publicacion.link} className="read-more" onClick={() => handleReadMoreClick(publicacion._id)}>Leer más</a>
            </div>
          </div>
        ))}
      </div>
      {selectedPostingId !== null && <PostingDetails publicationId={selectedPostingId} />}
    </>
  )
}
