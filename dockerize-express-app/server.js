import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Define your development and production hosts
const APP_URL = `${process.env.APP_URL}`;

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
