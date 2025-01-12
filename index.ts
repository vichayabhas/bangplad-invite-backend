import express from "express";
import cors from "cors";

import user from "./src/routes/user";
import cookieParser from "cookie-parser";




const app = express();
app.use(cookieParser());
//Body parser
app.use(express.json());

app.use(cors());
app.use("/user", user);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(
    "Server running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);

process.on("unhandledRejection", (err: Error) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
export default app;
//console.log('jjjjjjjjjjjjjjjjjjjbutfyiknjjjjj')
