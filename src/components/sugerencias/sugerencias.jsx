import Image from 'next/image';
import React, { useState } from 'react';
import styles from './sugerencias.module.css';
import sugerenciasImage from '@src/assets/images/sugerencias.svg';
import katyaImage from '@src/assets/images/Katya.svg';
import ximenaImage from '@src/assets/images/Ximena.svg';
import { addSuggestion } from '@src/services/sugerencias.dao';

const Contacto = () => {
  const [selected, setSelected] = useState('');
  const [suggestion, setSuggestion] = useState(''); // Almacena la sugerencia del textarea

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newSuggestion = { suggestion_d: suggestion, state: 'abierto' }; // Crea el objeto de sugerencia con estado 'abierto'

    const response = await addSuggestion(newSuggestion); // Llama al servicio para agregar la sugerencia

    if (response.error) {
      alert(response.error);
    } else {
      alert('Sugerencia enviada con éxito');
      setSuggestion(''); // Limpia el campo de sugerencia
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Déjanos tus sugerencias</h1>
        <div className={styles.imageContainer}>
          <Image 
            src={sugerenciasImage} 
            alt="sugerencias" 
            className={styles.hammerImage} 
            layout="fill"
            objectFit="cover" 
          />
        </div>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTitulo}>
                <h3>Escribe tu sugerencia</h3>
            </div>
            <div className={styles.formGroup}>
              <textarea 
                className={styles.formInput} 
                placeholder="Ingresa la sugerencia que quieres compartirnos"
                value={suggestion}
                onChange={handleSuggestionChange}
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>Enviar sugerencia</button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contáctanos</h2>
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <div className={styles.circle} style={{ backgroundImage: `url(${katyaImage.src})` }}></div>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactName}>Katya Garcia</h3>
              <p className={styles.contactPosition}>HR Manager</p>
              <p className={styles.contactEmail}><strong>Correo:</strong> kgarcia@inovacorporation.com</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.circle} style={{ backgroundImage: `url(${ximenaImage.src})` }}></div>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactName}>Ximena Alcivar</h3>
              <p className={styles.contactPosition}>National Sales Manager</p>
              <p className={styles.contactEmail}><strong>Correo:</strong> xalcivar@inovacorporation.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
