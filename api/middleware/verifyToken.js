import jwt from "jsonwebtoken";
// this route is checked for protected route like profile , update user and add post

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(req.cookies.token); // if we logged in we already have token inside cookie

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  // we have to verify the token,it might be expire or user might change our jwt token
  //   payload is user information which we passed in js token in our case id, it can be named anything
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not valid" });

    req.userId = payload.id;

    next();
  });
};
