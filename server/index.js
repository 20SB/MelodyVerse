const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const app = express();
const cors = require("cors");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/melodyverse", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
// Middleware
app.use(express.json());
app.get("/", (req, res) => {
    return res.send(`<h1>You are on the Home Page of Server</h1>`);
});
// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
