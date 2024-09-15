import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, contenido }) => {
  if (!isOpen) return null;

  // Extraer el ID del video de YouTube a partir de la URL
  const extractYouTubeID = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoID = extractYouTubeID(contenido.video);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalLista}>
          <div>
            <h2>{contenido.nombre}</h2>
            <p><strong>Materiales:</strong></p>
            <ul className={styles.materialList}>
          {contenido.materiales.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
          </div>
          <img src={contenido.imagen} alt={contenido.nombre} />
        </div>
        
        {videoID && (
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videoID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
