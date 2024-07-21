import { join } from "path";

const UPLOAD_PATH = join(__dirname, "../", "/uploads/");
const DATABASE_URL = process.env.DB_URL || "mongodb://localhost:27017";
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const MAX_LOGIN_ATTEMPTS = 5;

export { UPLOAD_PATH, DATABASE_URL, PORT, JWT_SECRET, MAX_LOGIN_ATTEMPTS };