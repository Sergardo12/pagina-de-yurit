import React, { useState } from "react";
import styles from "./Blog2.module.css";
import Amigurumis from "../../data/patrones.json";
import Card from "../SubComponents/Card";
import Footer from "../Footer";
import Modal from "../SubComponents/Modal";

const Blog2 = () => {
  const [selectedPatron, setSelectedPatron] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (patron) => {
    setSelectedPatron(patron);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatron(null);
  };

  const todoslosPatrones = Amigurumis.patrones;

  return (
    <>
      <section className={styles.blog2}>
        <h1>Patrones</h1>
        <div className={styles.cardContainer}>
          {todoslosPatrones.map((patron) => (
            <div
              key={patron.id}
              className={styles.card}
              onClick={() => handleCardClick(patron)}>
              <h2>{patron.nombre}</h2>
              <img src={patron.imagen} alt={patron.nombre} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
      {selectedPatron && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          contenido={selectedPatron}
        />
      )}
    </>
  );
};

export default Blog2;
