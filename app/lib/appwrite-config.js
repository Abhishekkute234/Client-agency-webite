"use client";
import { Client, Account } from "appwrite";

// Initialize the Client
const client = new Client();

try {
  if (
    !process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
    !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
  ) {
    throw new Error("Missing required Appwrite environment variables");
  }

  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
} catch (error) {
  console.error("Appwrite configuration error:", error);
}

// Initialize Appwrite services
const account = new Account(client);

// Export initialized services
export { client, account };
