import './posting.css';

export const Posting = ({ publication, onReadMoreClick }) => {
    return (
        <div className="publicacion-container">
            {publication.map((publicacion, index) => (
                <div key={index} className="publicacion-card">
                    <h2>{publicacion.titulo}</h2>
                    <label>Autor: </label>
                    <p>{publicacion.autor}</p>
                    <center><img src={publicacion.imagePrincipal} alt="Imagen" className='post-image' /></center>
                    <button onClick={() => onReadMoreClick(publicacion._id)}>Ver</button>
                </div>
            ))}
        </div>
    );
};
