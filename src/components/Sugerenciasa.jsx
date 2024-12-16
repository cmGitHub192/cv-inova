import Image from 'next/image';
import martilloImage from '@src/assets/images/martillo.png'; // Asegúrate de la ruta correcta

import React, { useState } from 'react';

const Contacto = () => {
  const [selected, setSelected] = useState('');

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">Déjanos tus sugerencias</h1>
        <div className="form-section">
          <form className="form">
            <div className="form-row">
              <div className="form-group half-width">
                <input type="text" className="form-input" placeholder="Nombre" />
              </div>
              <div className="form-group half-width">
                <input type="email" className="form-input" placeholder="Correo Electrónico" />
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-input" placeholder="Ingresa la sugerencia que quieres compartirnos"></textarea>
            </div>
            <div className="form-group">
              <button className="submit-button">Enviar sugerencia</button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-container">
        <h2 className="contact-title">Contáctanos</h2>
        <div className="contact-section">
          <div className="contact-card">
            <div className="circle"></div>
            <div className="contact-info">
              <h3 className="contact-name">Katya Garcia</h3>
              <p className="contact-position">HR Manager</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="circle"></div>
            <div className="contact-info">
              <h3 className="contact-name">Ximena Alcivar</h3>
              <p className="contact-position">National Sales Manager</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between; /* Alinea los contenedores horizontalmente */
          align-items: flex-start;
          min-width: 100vw;
          min-height: 100vh;
          background-color: #e7e7e7;
          padding: 20px;
          box-sizing: border-box;
        }

        .form-container, .contact-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 45%;
          margin: 20px;
        }

        .form-title, .contact-title {
          font-family: 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #21498e;
          margin: 0 0 20px 0;
        }

        .form-section {
          background-color: #21498e;
          color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-row {
          display: flex;
          gap: 10px;
        }

        .half-width {
          flex: 1;
        }

        .form-input {
          background-color: white;
          border: 1px solid #cccccc;
          border-radius: 4px;
          padding: 15px;
          box-sizing: border-box;
          width: 100%;
          color: #000000;
        }

        .form-input::placeholder {
          color: #E7E7E7;
        }

        textarea.form-input {
          height: 150px;
          resize: vertical;
        }
.submit-button {
  background-color: #75bf44;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 60%;
  height: 60px;
  padding: 12px;
  font-family: Calibri, sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  margin: 10px auto; /* Centra horizontalmente y añade espacio arriba y abajo */
  display: block; /* Asegura que el botón se comporte como un bloque */
}

        }

        .submit-button:hover {
          background-color: #5a9c36;
        }

        .contact-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          background-color: #ffffff;
          border: 1px solid #cccccc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          padding: 10px;
          gap: 40px;
          height:100px;
          width:500px;
        }

        .circle {
          width: 80px;
          height: 80px;
          background-color: #75bf44;
          border-radius: 50%;
            flex-shrink: 0; /* Asegura que el círculo no se reduzca */

        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-name {
          font-family: 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 16px;
          margin: 0;
          color:#0E0E0E;
        }

        .contact-position {
          font-family: 'Segoe UI', sans-serif;
          font-size: 14px;
          color: #666666;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
          }

          .form-container, .contact-container {
            width: 90%;
            max-width: 600px;
          }

          .form-title, .contact-title {
            font-size: 1.5rem;
          }

          .form-input {
            font-size: 14px;
          }

          textarea.form-input {
            height: 120px;
          }

          .submit-button {
            font-size: 14px;
            height: 50px;
          }

          .contact-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .circle {
            margin-bottom: 10px;
          }
        }

      
/* Estilos para pantallas medianas y pequeñas */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start; /* Alinea el contenido al inicio del contenedor */
  }

  .form-container, .contact-container {
    width: 90%;
    max-width: none; /* Permite que el contenedor crezca según el contenido */
  }

  .contact-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Mantiene la alineación al inicio del contenedor */
    gap: 20px;
  }

  .contact-card {
    flex-direction: row; /* Mantiene la disposición en fila */
    align-items: center; /* Alinea verticalmente los elementos */
    width: 100%; /* Ocupa el ancho completo del contenedor */
  }

  .circle {
    width: 60px; /* Tamaño ajustado para pantallas medianas */
    height: 60px; /* Tamaño ajustado para pantallas medianas */
    margin-right: 15px; /* Espacio a la derecha del círculo */
  }
}

@media (max-width: 480px) {
  .contact-card {
    flex-direction: row; /* Mantiene la disposición en fila */
    align-items: center; /* Alinea verticalmente los elementos */
    width: 100%; /* Ocupa el ancho completo del contenedor */
  }

  .circle {
    width: 50px; /* Tamaño ajustado para pantallas pequeñas */
    height: 50px; /* Tamaño ajustado para pantallas pequeñas */
    margin-right: 10px; /* Espacio a la derecha del círculo */
  }
      `}</style>
    </div>
  );
};

export default Contacto;
