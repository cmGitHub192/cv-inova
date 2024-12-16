export async function AutenticarLogin() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        username: "mail@mail.com",
        password: "9063",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "7zXnBjF5PBl7EzG/WhATQw==",
      },
    });

    if (!res.ok) {
      // Lanzar un error si la respuesta no es 2xx
      throw new Error("Invalid credentials");
    }
    const user = await res.json();
    console.log(user);
    return user;
  } catch (err) {
  } finally {
  }
}

export async function RegistrarUsuario(session, user) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/register`,
      {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
          identification_type: user.identification_type,
          identification_number: user.identification_number,
          birth_date: user.birth_date,
          phone: user.phone,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "7zXnBjF5PBl7EzG/WhATQw==", // Asegúrate de que esta autorización sea válida
          Token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiTWpFPSIsImVtYWlsIjoiWVdwellVQnRZV2xzTG1OdmJRPT0ifSwiZXhwIjoxNzI1OTI3Mzk1fQ.pb_jKlCHQApzr8iKZ_eWJP_il4HqHUnzr2hA_UX-pkI",
        },
      }
    );

    if (!res.ok) {
      // Lanzar un error si la respuesta no es 2xx
      const errorData = await res.json(); // Extraer el mensaje de error del servidor

      throw new Error(
        `${translateMessage(
          errorData.message
        )}`
      );
    }

    const registeredUser = await res.json();
    console.log("Usuario registrado:", registeredUser);
    return registeredUser;
  } catch (err) {
    console.error("Error al registrar usuario:", err.message);
    return { status: 500, message: err.message };
  } finally {
    // Puedes realizar acciones adicionales aquí si es necesario
  }
}

export async function RecuperarContrasena(email) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/forgot_password`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "7zXnBjF5PBl7EzG/WhATQw==",
        },
      }
    );

    if (!res.ok) {
      const errorData = await res.json(); // Extraer mensaje de error del servidor
      throw new Error(
        `${translateMessage(
          errorData.message
        )}`
      );
    }

    const responseData = await res.json();
    return { status: 200, ...responseData };
  } catch (err) {
    console.error("Error al recuperar la contraseña:", err.message);
    return { status: 500, message: err.message }; // Retornar mensaje de error
  }
}

// Diccionario de patrones de mensaje
const translationPatterns = [
  {
    pattern: "Error al registrar el usuario: Key (email)=",
    translation: "El correo electrónico ya está registrado",
  },
  {
    pattern: "Error al registrar el usuario: Key (identification_number)=",
    translation: "El usuario con su cédula ya está registrado",
  },
  {
    pattern: "El email no se encuentra registrado, comunícate con el administrador de la aplicación",
    translation: "El email no se encuentra registrado, comunícate con el administrador de la aplicación",
  },
  // Agrega más patrones según sea necesario
];

// Función para traducir mensajes del backend
export function translateMessage(backendMessage) {
  // Buscar un patrón que coincida con el inicio del mensaje
  for (let entry of translationPatterns) {
    if (backendMessage.startsWith(entry.pattern)) {
      return entry.translation;
    }
  }
  // Si no se encuentra coincidencia, devolver un mensaje por defecto
  return "Error desconocido";
}
