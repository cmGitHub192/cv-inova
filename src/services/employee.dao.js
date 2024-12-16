export async function getEmployeeByUserID(session, user_id) {
    console.log("Token:", session?.user?.data?.token);
    console.log("ID:", session?.user?.data?.id);  
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/read_by_user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `7zXnBjF5PBl7EzG/WhATQw==`, // Assuming this is a fixed API key
              Token: session?.user?.data?.token, // Use the token from the session
              
            },
            body: JSON.stringify({
              user_id: user_id,
            }),
          }
        );
     
        // Check if the response is okay
        if (!res.ok) {
          throw new Error("Error loading user information");
        }
     
        const data = await res.json();
        console.log("Datos del empleado:", data);
        return data;
      } catch (err) {
      } finally {
      }
    }