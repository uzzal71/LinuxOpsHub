import app from "./app.js";

const port = process.env.PORT || 3001;

// Define your development and production hosts
const APP_URL = `${process.env.APP_URL}`;

// Determine the environment
const environment = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to node production starter server",
    version: "1.0.0",
    api_url: `${APP_URL}/api/v1`,
    author: {
      name: "Uzzal Kumar Roy",
      phone: "+8801319630372 / +8801788134303",
      email: "uzzalroy.acm@gmail.com",
      website: "https://uzzalkumarroy.com",
    },
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
