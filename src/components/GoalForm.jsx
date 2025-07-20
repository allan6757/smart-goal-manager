import React, { useState, useEffect } from "react";

const initialState = {
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().slice(0, 10)
};

function GoalForm({ onSave, editingGoal, onCancel }) {
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (editingGoal) setForm(editingGoal);
        else setForm(initialState);
    }, [editingGoal]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave({ ...form, targetAmount: Number(form.targetAmount), savedAmount: Number(form.savedAmount) });
        setForm(initialState);
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1em" }}>
            <h2>{editingGoal ? "Edit Goal" : "Add New Goal"}</h2>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Goal Name" required />
            <input name="targetAmount" value={form.targetAmount} onChange={handleChange} placeholder="Target Amount" type="number" min="1" required />
            <input name="savedAmount" value={form.savedAmount} onChange={handleChange} placeholder="Saved Amount" type="number" min="0" required />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
            <input name="deadline" value={form.deadline} onChange={handleChange} type="date" required />
            <button type="submit">{editingGoal ? "Update" : "Add"}</button>
            {editingGoal && <button onClick={onCancel} type="button">Cancel</button>}
        </form>
    );
}

export default GoalForm;