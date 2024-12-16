const validStates = ['abierto', 'en progreso', 'solucionado'];

export async function getSuggestions() {
  try {
    const response = await fetch('http://localhost:3000/api/suggestions');
    if (!response.ok) {
      throw new Error('Error al obtener las sugerencias');
    }
    const data = await response.json();
    return data.suggestions;
  } catch (error) {
    console.error('Error en getSuggestions:', error);
    return [];
  }
}

export async function addSuggestion(suggestion) {
  // Validar el estado antes de enviar la solicitud
  if (!validStates.includes(suggestion.state)) {
    console.error(`Estado inválido: ${suggestion.state}`);
    return { error: 'Estado inválido. Los estados válidos son: "abierto", "en progreso", "solucionado"' };
  }

  try {
    // Obtén todas las sugerencias actuales para calcular el próximo ID disponible
    const currentSuggestions = await getSuggestions();
    const lastId = currentSuggestions.length 
      ? Math.max(...currentSuggestions.map(s => parseInt(s.id, 10) || 0))
      : 0;

    // Crear un nuevo objeto de sugerencia con el siguiente ID numérico
    const newSuggestion = {
      ...suggestion,
      id: lastId + 1, // Asigna el siguiente ID como entero y lo incrementa
    };

    const response = await fetch('http://localhost:3001/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSuggestion),
    });

    if (!response.ok) {
      throw new Error('Error al agregar la sugerencia');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en addSuggestion:', error);
    return { error: 'Error al agregar la sugerencia' };
  }
}

export async function deleteSuggestion(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/suggestions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la sugerencia');
    }
    return true;
  } catch (error) {
    console.error('Error en deleteSuggestion:', error);
    return false;
  }
}

export async function updateSuggestion(id, updatedData) {
  // Validar el estado antes de enviar la solicitud
  if (updatedData.state && !validStates.includes(updatedData.state)) {
    console.error(`Estado inválido: ${updatedData.state}`);
    return { error: 'Estado inválido. Los estados válidos son: "abierto", "en progreso", "solucionado"' };
  }

  // Log para depuración
  console.log('Datos enviados para actualización:', updatedData);

  try {
    const response = await fetch(`http://localhost:3000/api/suggestions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar la sugerencia');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en updateSuggestion:', error);
    return { error: 'Error al actualizar la sugerencia' };
  }
}
