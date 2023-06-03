import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// component for each item
const ShowItem = ({ item, idx, removeItem }) => {
  return (
    <>
      <div className="lists">
        <li className="task-list-item">{item}</li>
        <button onClick={() => removeItem(idx)}>-</button>
      </div>
    </>
  );
};

const TaskManager = () => {
  // states
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");

  // handle remove the item from the task list
  const removeItem = (idx) => {
    const newArr = items.filter((_, i) => {
      return i !== idx;
    });
    setItems(newArr);
  };

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>
      <div className="task-manager-input">
        <input
          type="text"
          placeholder="What do you want to do today?"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          onClick={() => {
            toast.success(`${val} added to the task list successfully`);
            setItems([...items, val]);
            setVal("");
          }}
        >
          +
        </button>
      </div>
      <ToastContainer autoClose={1000} />
      <ul className="task-list">
        {items.map((item, index) => {
          return (
            <ShowItem
              key={index}
              item={item}
              idx={index}
              removeItem={removeItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskManager;
