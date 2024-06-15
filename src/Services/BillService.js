export const billService = async(billObject)=>{
    // const url = "https://resto-backend-n5n7.onrender.com/staff/auth";
    const urlTest = "http://localhost:3060/bill";
    const response = await fetch(
      urlTest,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(billObject),
      }
    );

    if (response.ok) {
        console.log("succes")
    //   const data = await response.json();
    //   return data;
    } else {
      console.error("Error:", response.status);
    }
}