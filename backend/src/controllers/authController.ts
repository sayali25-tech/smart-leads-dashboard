import { Request, Response } from "express";

export const loginUser = async (
  req: Request,
  res: Response
) => {

  const { email, password } = req.body;

  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });

  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });

};