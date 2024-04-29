export const staffAuth = async (password) => {
  const response = await fetch(
    "https://resto-backend-n5n7.onrender.com/staff/auth",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Error:", response.status);
  }
};

