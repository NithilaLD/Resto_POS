const express = require("express");
const { Client } = require("pg");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const connectionString =
  "postgres://resto_db_dxxv_user:npUdLpsmALtDexxCUEfmv0lS3BeVsja6@dpg-coj7t4q1hbls738e2ldg-a.oregon-postgres.render.com/resto_db_dxxv";

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // This line is required for Render PostgreSQL instance
  },
});

client
  .connect()
  .then(() => console.log("Connected to Render PostgreSQL instance"))
  .catch((err) => console.error("Connection error", err.stack));

app.get("/", (req, res) => {
  res.json({ message: "Hello, Welcome to CodeTribals Server" });
});

app.post("/staff/auth", async (req, res) => {
  const { password } = req.body;
  console.log(`password : ${password}`);
  if (!password) {
    res.status(404).json({ message: "There is no user under this password" });
  }
  try {
    const query =
      "SELECT employer_name, employer_id, password FROM public.staff WHERE password = $1";
    const values = [password];
    result = await client.query(query, values);
    console.log(result);
    if (result.rowCount > 0) {
      console.log(result);
      res.status(200).json({
        employerName: result.rows[0].employer_name,
        employerId: result.rows[0].employer_id,
      });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internel server error!" });
  }
});

app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/helloworld", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/login/staff", (req, res) => {
  res.json("hi");
  console.log("send");
});

app.get("/menu", async (req, res) => {
  try {
    const query = "SELECT items.name, items.id, items.price , items.category_id, category.name FROM items JOIN category ON items.category_id = category.id";
    result = await client.query(query);
    if (result.rowCount > 0) {
      console.log("menu sents");
      res.json(result);
      // res.status(200).json({
      //   employerName: result.rows[0].employer_name,
      //   employerId: result.rows[0].employer_id,
      // });
    } else {
      res.status(404).json({ message: "Menu not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internel server error!" });
  }
});


// bill create

app.post("/bill", async (req, res) => {
  try {
    const { billDescription, billItems } = req.body;

    // Insert bill description into 'Bill' table
    const billInsertQuery = `
      INSERT INTO Bill (subTotal, offers, tip, total)
      VALUES ($1, $2, $3, $4)
      RETURNING id`;
    const billValues = [
      billDescription.subTotal,
      billDescription.offers,
      billDescription.tip,
      billDescription.total,
    ];
    const billResult = await client.query(billInsertQuery, billValues);
    const billId = billResult.rows[0].id;

    // Insert bill items into 'Bill_Items' table
    for (const item of billItems) {
      const billItemInsertQuery = `
        INSERT INTO Bill_Items (name, unitPrice, unitCount, amount, billId)
        VALUES ($1, $2, $3, $4, $5)`;
      const billItemValues = [
        item.name,
        item.unitPrice,
        item.unitCount,
        item.amount,
        billId,
      ];
      await client.query(billItemInsertQuery, billItemValues);
    }

    res.status(201).json({ message: "Bill created successfully" });
    console.log("Bill created successfully");
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All bill

app.get("/bills", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM bill");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// customer  search

app.get("/customers/search", async (req, res) => {
  const { query } = req.query;
  try {
    const result = await client.query(
      "SELECT * FROM customers WHERE first_name ILIKE $1 OR last_name ILIKE $1 OR phone ILIKE $1 OR email ILIKE $1",
      [`%${query}%`]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to create a new customer
app.post('/customers', async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  
  try {
    const newCustomer = await client.query(
      'INSERT INTO customers (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, email, phone]
    );
    res.status(201).json(newCustomer.rows[0]);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Route to get all customers
app.get('/customers', async (req, res) => {
  try {
    const allCustomers = await client.query('SELECT * FROM customers');
    res.status(200).json(allCustomers.rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.put("/customers/:id", async (req, res) => {
  const customerId = req.params.id;
  const { firstName, lastName, email, phone } = req.body;

  try {
    const updatedCustomer = await client.query(
      "UPDATE customers SET first_name = $1, last_name = $2, email = $3, phone = $4, last_edited = CURRENT_TIMESTAMP WHERE customer_id = $5 RETURNING *",
      [firstName, lastName, email, phone, customerId]
    );
    if (updatedCustomer.rows.length === 0) {
      return res.status(404).send("Customer not found");
    }
    res.status(200).json(updatedCustomer.rows[0]);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
//delete customer
app.delete("/customers/:id", async (req, res) => {
  const customerId = req.params.id;

  try {
    const deletedCustomer = await client.query(
      "DELETE FROM customers WHERE customer_id = $1 RETURNING *",
      [customerId]
    );
    if (deletedCustomer.rows.length === 0) {
      return res.status(404).send("Customer not found");
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// User Access Section

// Create a user
app.post("/users", async (req, res) => {
  try {
    const { user_name, user_role, employer_id } = req.body;

    if (!user_name || !user_role || !employer_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    
    if (isNaN(employer_id)) {
      return res.status(400).json({ error: "Invalid employer ID" });
    }

    const newUser = await client.query(
      'INSERT INTO usermanage (user_name, user_role, employer_id) VALUES ($1, $2, $3) RETURNING *',
      [user_name, user_role, parseInt(employer_id, 10)]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await client.query(`
      SELECT u.user_id, u.user_name, u.user_role, u.employer_id, s.employer_name 
      FROM usermanage u 
      JOIN staff s ON u.employer_id = s.employer_id
    `);
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});


// Get a user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await client.query("SELECT * FROM usermanage WHERE user_id = $1", [id]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update user
app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, user_role } = req.body;
    const updateUser = await client.query(
      "UPDATE usermanage SET user_name = $1, user_role = $2 WHERE user_id = $3 RETURNING *",
      [user_name, user_role, id]
    );
    res.json(updateUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Delete a user
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.query("DELETE FROM usermanage WHERE user_id = $1", [id]);
    res.json({ message: "User was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get all employee IDs
app.get("/employees", async (req, res) => {
  try {
    const employees = await client.query("SELECT employer_id FROM staff");
    res.json(employees.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});


app.listen(3060);
