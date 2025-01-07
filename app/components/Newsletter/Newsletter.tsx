"use client";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState(""); // State to store the email input
  const [message, setMessage] = useState(""); // State to display success/error message
  const [isLoading, setIsLoading] = useState(false); // State for loading indication

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear the email field
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="join-section" className="-mt-32 relative z-10">
      <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div>
            <h3 className="text-5xl font-bold mb-3"> Join Our Newsletter </h3>
            <h4 className="text-lg font-medium mb-7">
              Subscribe to our newsletter for discounts, promos, and more.
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-4 text-sm w-full text-black bg-white rounded-md pl-4"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button
                onClick={handleSubscribe}
                className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
          </div>

          {/* COLUMN-2 */}
          <div className="hidden sm:block">
            <div className="float-right -mt-32">
              <img src={"/assets/newsletter/Free.svg"} alt="bgimg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
