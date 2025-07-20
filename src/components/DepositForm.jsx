import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
    const [goalId, setGoalId] = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (goalId && amount > 0) {
            onDeposit(goalId, amount);
            setGoalId("");
            setAmount("");
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1em" }}>
            <h2>Make a Deposit</h2>
            <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
                <option value="">Select Goal</option>
                {goals.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
            <input type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required />
            <button type="submit">Deposit</button>
        </form>
    );
}

export default DepositForm;