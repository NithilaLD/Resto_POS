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

export const createCustomer = async (customerData) => {
  try {
    const response = await fetch("/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error("Failed to create customer");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating customer:", error.message);
    throw error;
  }
};


export const getAllCustomers = async () => {
  try {
    const response = await fetch("/customers");

    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching customers:", error.message);
    throw error;
  }
};

export const updateCustomer = async (customerId, customerData) => {
  try {
    const response = await fetch(`/customers/${customerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error("Failed to update customer");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating customer ${customerId}:`, error.message);
    throw error;
  }
};

export const deleteCustomer = async (customerId) => {
  try {
    const response = await fetch(`/customers/${customerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete customer");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error deleting customer ${customerId}:`, error.message);
    throw error;
  }
};
