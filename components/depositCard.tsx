import React, { useState } from "react";
import { useWritePlutoDeposit } from "../src/generated";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

const DepositCard = () => {
  const [amount, setAmount] = useState("");
  const { status } = useWritePlutoDeposit();
  const { sendTransaction } = useSendTransaction();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) return;
    try {
      sendTransaction({
        to: "0x373Abf195913E6642f8460A5b807022a58dFA311",
        value: parseEther(amount),
      });

      alert("Deposit successful!");
    } catch (error) {
      console.error("Deposit failed:", error);
      alert("Deposit failed. Please try again.");
    }
  };

  return (
    <div className="deposit-card card bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Deposit Funds</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Amount to deposit"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={status === "pending"}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Deposit
        </button>
      </form>
    </div>
  );
};

export default DepositCard;
