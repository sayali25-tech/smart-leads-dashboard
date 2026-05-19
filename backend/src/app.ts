import express from "express";
import cors from "cors";

import leadRoutes from "./routes/leadRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/leads", leadRoutes);

app.use("/api/auth", authRoutes);

export default app;