import React, { useEffect, useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

const API = "http://localhost:3000/goals";

function App() {
    const [goals, setGoals] = useState([]);
    const [editingGoal, setEditingGoal] = useState(null);

    useEffect(() => {
        fetch(API)
            .then(r => r.json())
            .then(setGoals);
    }, []);

    function addGoal(goal) {
        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal)
        })
            .then(r => r.json())
            .then(newGoal => setGoals([...goals, newGoal]));
    }

    function updateGoal(id, updates) {
        fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates)
        })
            .then(r => r.json())
            .then(updated => setGoals(goals.map(g => g.id === id ? updated : g)));
    }

    function deleteGoal(id) {
        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(() => setGoals(goals.filter(g => g.id !== id)));
    }

    function handleEdit(goal) {
        setEditingGoal(goal);
    }

    function handleSave(goal) {
        if (editingGoal) {
            updateGoal(editingGoal.id, goal);
            setEditingGoal(null);
        } else {
            addGoal(goal);
        }
    }

    function makeDeposit(id, amount) {
        const goal = goals.find(g => g.id === id);
        if (!goal) return;
        updateGoal(id, { savedAmount: Number(goal.savedAmount) + Number(amount) });
    }

    return (
        <div className="App">
            <h1>Smart Goal Planner</h1>
            <Overview goals={goals} />
            <GoalForm
                onSave={handleSave}
                editingGoal={editingGoal}
                onCancel={() => setEditingGoal(null)}
            />
            <DepositForm goals={goals} onDeposit={makeDeposit} />
            <GoalList
                goals={goals}
                onEdit={handleEdit}
                onDelete={deleteGoal}
            />
        </div>
    );
}

export default App;