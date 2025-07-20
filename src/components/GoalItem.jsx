import React from "react";
import ProgressBar from "./ProgressBar";

function daysRemaining(deadline) {
    const now = new Date();
    const end = new Date(deadline);
    return Math.ceil((end - now) / (1000 * 60 * 60 * 24));
}

function GoalItem({ goal, onEdit, onDelete }) {
    const { name, targetAmount, savedAmount, category, deadline } = goal;
    const complete = savedAmount >= targetAmount;
    const daysLeft = daysRemaining(deadline);
    const overdue = !complete && daysLeft < 0;
    const warning = !complete && daysLeft >= 0 && daysLeft <= 30;

    return (
        <div className="goal-item" style={{ border: "1px solid #ccc", margin: "1em", padding: "1em" }}>
            <h3>
                {name}{" "}
                {complete && <span style={{ color: "green" }}>✓ Completed</span>}
                {overdue && <span style={{ color: "red" }}>Overdue</span>}
                {warning && <span style={{ color: "orange" }}>⚠️ 30 days left!</span>}
            </h3>
            <p>Category: {category}</p>
            <p>Target: ${targetAmount}</p>
            <p>Saved: ${savedAmount}</p>
            <p>Remaining: ${Math.max(0, targetAmount - savedAmount)}</p>
            <p>Deadline: {deadline} ({daysLeft} days left)</p>
            <ProgressBar value={savedAmount} max={targetAmount} />
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default GoalItem;