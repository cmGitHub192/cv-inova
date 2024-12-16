export async function getUserInformation(session) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/by_token`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `7zXnBjF5PBl7EzG/WhATQw==`, // Assuming this is a fixed API key
          Token: session?.user?.data?.token, // Use the token from the session
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error loading user information: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Data received from server:", data);
    return data;
  } catch (err) {
    console.error('Error in getUserInformation:', err);
    return null;
  }
}
