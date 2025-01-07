import mongoose from "mongoose";
import connect from "@/app/lib/db";
import Join from "@/app/lib/models/Join"; // Ensure your MongoDB connection utility is set up properly
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Connect to the database
    await connect();

    if (req.method === "POST") {
      // Extract email from the request body
      const { email } = req.body;

      // Validate the email
      if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      // Save the email to the database
      const newEmail = await Join.create({ email });
      return res.status(200).json({ message: "Email added successfully!", email: newEmail });

    } else if (req.method === "GET") {
      // Fetch all saved emails, sorted by creation date (descending)
      const emails = await Join.find().sort({ createdAt: -1 });
      return res.status(200).json(emails);
    }

    // Return 405 if the method is not POST or GET
    return res.status(405).json({ message: "Method not allowed" });

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
