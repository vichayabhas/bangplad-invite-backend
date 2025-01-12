// import express from "express";
// import cors from "cors";

// import user from "./src/routes/user";
// import cookieParser from "cookie-parser";




// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// //Body parser
// app.use(express.json());

// app.use(cors());
// app.use("", user);

// // const PORT = process.env.PORT || 5000;
// // const server = app.listen(PORT, () =>
// //   console.log(
// //     "Server running in ",
// //     process.env.NODE_ENV,
// //     " mode on port ",
// //     PORT
// //   )
// // );

// // process.on("unhandledRejection", (err: Error) => {
// //   console.log(`Error: ${err.message}`);
// //   server.close(() => process.exit(1));
// // });
// export default app;
// //console.log('jjjjjjjjjjjjjjjjjjjbutfyiknjjjjj')
import cors from "cors";

import user from "./src/routes/user";
import cookieParser from "cookie-parser";

import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// get post routes
app.get("/post", (req: Request, res:Response) => {
  res.status(200).json({ message: "post routes" });
});

// root routes
app.get("/", (req: Request, res:Response) => {
  res.status(200).json({ message: "Hello World" });
});


app.use(cookieParser());
//Body parser
app.use(express.json());

app.use(cors());
app.use("", user);



export default app;
