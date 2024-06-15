export const getMenu = async () => {
    // const uri = "https://resto-backend-n5n7.onrender.com/menu";
    const uri = "http://localhost:3060/menu";
  const response = await fetch(
    uri,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    //   ,
    //   body: JSON.stringify({
    //     password: password,
    //   }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data["rows"];
  } else {
    console.error("Error:", response.status);
  }
};
