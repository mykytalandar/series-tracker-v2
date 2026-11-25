import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3005;

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
