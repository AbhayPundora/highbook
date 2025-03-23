import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

//Register

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //HASH THE PASSWORD
    const hashPassword = await bcrypt.hash(password, 10);

    //CREATE NEW USER
    const newUser = await prisma.user.create({
      //user is a model we create in schema.prisma

      //SAVE TO DATABASE
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create user" });
  }
};

// Login

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //CHECK  IF THE USER IS EXIST

    const user = await prisma.user.findUnique({
      // where:{username:username}
      //since we are using same name
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "invalid credentials" });

    // CHECK THE PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "invalid credentials" });

    //GENERATE COOKIE TOKEN AND SEND TO THE USER

    // res.setHeader("Set-cookie","test=" + "myValue").json("success");
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        // this token has user id encrypted with process.env.JWT_SECRET_KEY , so whenever a user try to delete a post we can decrypt this token and take the user id
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY, // we create a token by user id and a random sequence stored in process.env.JWT_SECRET_KEY
      { expiresIn: age }
    ); // process.env doesn't work if we need to npm i env or just use-->nodemon app.js --env-file .env

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,

        // secure:true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo); // we are sending userinfo but not password , and it is going to stored in localstorage
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to login" });
  }
};

//Logout

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
