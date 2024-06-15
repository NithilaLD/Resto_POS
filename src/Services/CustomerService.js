export const customerSearch = async (query) => {
  // const url = "https://resto-backend-n5n7.onrender.com/staff/auth";
  const urlTest = "http://localhost:3060";

  try {
    const response = await fetch(
      `${urlTest}/customers/search?query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const customers = await response.json();
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};
