import express from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.listen(process.env.PORT || 3000);
