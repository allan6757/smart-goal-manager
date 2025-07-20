import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, onEdit, onDelete }) {
    if (!goals.length) return <p>No goals yet!</p>;
    return (
        <div>
            <h2>All Goals</h2>
            {goals.map(goal => (
                <GoalItem
                    key={goal.id}
                    goal={goal}
                    onEdit={() => onEdit(goal)}
                    onDelete={() => onDelete(goal.id)}
                />
            ))}
        </div>
    );
}

export default GoalList;