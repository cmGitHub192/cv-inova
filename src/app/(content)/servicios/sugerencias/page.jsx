// src/app/(content)/servicios/sugerencias/page.jsx

import React from 'react';
import CV from '@src/components/cv-word/cv';  // Ajusta esta ruta según sea necesario
import jsonData from '@src/data/data.json'; // Asegúrate de que la ruta al archivo JSON sea correcta

function Page() {
  return (
    <div>
      <CV data={jsonData} />  {/* Aquí le pasas el JSON al componente CV */}
    </div>
  );
}

export default Page;
