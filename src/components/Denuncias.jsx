import Image from 'next/image'; // Asegúrate de tener el componente Image disponible
import martilloImage from '@src/assets/images/martillo.png'; // Asegúrate de la ruta correcta

import React, { useState } from 'react';

const Denuncias = () => {
  const [selected, setSelected] = useState('');

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Denuncias Compliance</h1>
        <div className="rectangularBox">
          <div className="image-container">
            <Image 
              src={martilloImage} 
              alt="Martillo" 
              className="hammer-image" 
              layout="fill"
              objectFit="cover" 
            />
          </div>
          <form className="form">
            <div className="form-group">
              <select
                className={`form-input ${selected === '' ? 'placeholder-selected' : ''}`}
                onChange={handleSelectChange}
                value={selected}
              >
                <option value="" className="placeholder">Seleccione el tipo de problema</option>
                <option value="problema1">Problema 1</option>
                <option value="problema2">Problema 2</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <input type="text" className="form-input" placeholder="Nombre" />
              </div>
              <div className="form-group half-width">
                <input type="email" className="form-input" placeholder="Correo Electrónico" />
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-input" placeholder="Describe el hecho a denunciar"></textarea>
            </div>
            <div className="form-group">
              <button className="submit-button">Enviar sugerencia</button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
      
 
.container {
  background-color: #e7e7e7; /* Color de fondo del contenedor */
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start; /* Cambia la alineación vertical */
  justify-content: center;
  overflow-x: hidden;
  margin-top: 0px; /* Ajusta este valor para mover el contenedor hacia arriba */
  margin-bottom: -80px; /* Ajusta este valor para dejar espacio en la parte inferior */
}

        .content {
          display: flex;
          flex-direction: column;
          width: 90%;
          max-width: 1200px;
          padding:0px;
          margin-top:60px;
        }

        .title {
          font-family: 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 17.74px;
          color: #21498e;
          margin: 0 0 20px 0;
        }

        .rectangularBox {
          background-color: #21498e;
          width: 100%;
          max-width: 1200px;
          padding: 20px;
          box-sizing: border-box;
          color: white;
          height: 400px;
          display: flex;
          align-items: flex-start;
          position: relative;
          margin: 0 auto;
        }

        .image-container {
          position: absolute;
          top: 120px;
          left: -40px;
          width: 60%;
          height: 100%;
          overflow: hidden;
        }

        .hammer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form {
          flex: 1;
          margin-left: 50%;
          margin-right: 60px;
          width: calc(100% - 20px);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group {
          width: 100%;
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
          padding: 15px; /* Aumenta el padding para incrementar la altura */
          box-sizing: border-box;
          width: 100%;
          height: 50px; /* Incrementa la altura */
          color: #000000;
        }

        .form-input::placeholder {
          color: #E7E7E7; /* Color del texto del placeholder */
        }

        .placeholder-selected {
          color: #E7E7E7; /* Color del texto de la opción por defecto en el select */
        }

        textarea.form-input {
          height: 150px; /* Aumenta la altura del textarea */
          resize: vertical;
        }

        .submit-button {
          background-color: #75bf44;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          Width:250px;
          Height:60px;

          padding: 12px 36px; /* Aumenta el padding horizontal para ensanchar el botón */
          font-family: Calibri, sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 19.53px;
          cursor: pointer;
          display: block;
          margin: 20px auto 0;
        }

        .submit-button:hover {
          background-color: #5a9c36;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }

          .rectangularBox {
            flex-direction: column;
            padding: 10px;
            position: relative;
          }

          .image-container {
            display: none;
          }

          .form {
            margin-left: 0;
            width: 100%;
          }

          .form-input {
            font-size: 14px;
          }

          textarea.form-input {
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.2rem;
          }

          .form-input {
            font-size: 12px;
          }

          textarea.form-input {
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default Denuncias;
