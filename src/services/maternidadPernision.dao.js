export async function getPermisionsInformation(session) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/permission_class/1`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `7zXnBjF5PBl7EzG/WhATQw==`, // Assuming this is a fixed API key
            Token: session?.user?.data?.token, // Use the token from the session
          },
        }
      );
   
      // Check if the response is okay
      if (!res.ok) {
        throw new Error("Error loading user information");
      }
   
      const data = await res.json();
      console.log("data en servicio:", data);
      return data;
    } catch (err) {
    } finally {
    }
  }