import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((cookieParser));
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
}));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

































































































// const app = express();
// app.use(express.json());
// const PORT = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!   ");
// });
// mongoose
//   .connect("mongodb://localhost:27017/ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// app.get("api/user",(req,res)=>{
//   const User = require("./models/User");
//   User.find()
//   .then((users) =>{
//      res.status(200).json(users);
  
//   })
//   .catch((err) =>{
//     res.status(500).json({message:"Internal server error"});
//   });
// })
// // app.get("/api/user", (req, res) => {
// //   const User = require("./models/User");
// //   User.find()
// //     .then((users) => {
// //       res.status(200).json(users);
// //     })
// //     .catch((err) => {
// //       res.status(500).json({ message: "Internal server error" });
// //     });
// // });

// app.post("/api/signup", async (req, res) => {
//   //console.log(req.body);
//   const { username, email, password } = req.body;
//   if (!username || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }
//   const User = require("./models/User");
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ name: username, email, password: hashedPassword });
//   await newUser.save();
//   res.status(201).json({ message: "User registered successfully" });
// });

// // const cors = require('cors');
// // const jwt = require('jsonwebtoken');
// // const cookieParser = require('cookie-parser');
// // const PORT = 3000;
// // const secretKey = 'youSecretKey';

// // const app = express();
