import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { PrismaClient } from "@prisma/client";

dotenv.config(); // Load the environment variables
const app = express();
const url = process.env.DATABASE_URL;
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors({ origin: true }));

async function main() {
 const user = await prisma.user.create({
    data: {
      name: "Irmansyah Muslimin",
      email: "Gy5uX@example.com",
      password: "12345",
      phoneNumber: "081234567890",
    },
  });
  console.log(user); // ... you will write your Prisma Client queries here
}

main();

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
