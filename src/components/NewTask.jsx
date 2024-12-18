import { useEffect, useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd, projectId }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [showNotEntered, setShowNotEntered] = useState(false);

  function handleChange(e) {
    if (showNotEntered) {
      setShowNotEntered(false);
    }
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask === "") {
      setShowNotEntered(true);
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  useEffect(() => {
    setEnteredTask("");
    setShowNotEntered(false);
  }, [projectId]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <Button onClick={handleClick}>Add Task</Button>
      </div>
      {showNotEntered && (
        <h4 className="text-xl text-red-600 font-semibold">
          Please Enter some Task and should not be empty..........
        </h4>
      )}
    </div>
  );
}
