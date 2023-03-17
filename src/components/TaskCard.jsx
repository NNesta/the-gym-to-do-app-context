import { useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AppContext } from "../context";

const TaskCard = ({ id, taskText, isCompleted }) => {
  const { setTasks } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const handleDelete = () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };
  const handleEdit = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, taskText: editText };
        }
        return task;
      });
    });
    setIsEditing(false);
  };
  const handlecompleteTask = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !isCompleted };
        }
        return task;
      });
    });
  };

  return (
    <div className="flex items-center gap-4  border-b py-2 my-4">
      <input
        type="checkbox"
        onClick={handlecompleteTask}
        checked={isCompleted}
      />
      <div className={`flex-1 ${isCompleted && "line-through"}`}>
        {isEditing ? (
          <input
            ref={(input) => input && input.focus()}
            className="focus:outline-none text-lg w-full"
            type="text"
            onChange={(event) => setEditText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEdit();
              }
            }}
            value={editText}
          />
        ) : (
          <p className="text-lg break-all">{taskText}</p>
        )}
      </div>
      {isEditing ? (
        <div
          onClick={handleEdit}
          className="hover:bg-green-100 p-2 rounded-full"
        >
          <IoCheckmarkDoneCircleSharp
            size={25}
            className="bg-green-500 text-white rounded-full cursor-pointer"
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsEditing(true);
            setEditText(taskText);
          }}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <FiEdit size={25} />
        </div>
      )}
      <div
        onClick={handleDelete}
        className="p-2 rounded-full cursor-pointer hover:bg-red-200"
      >
        <MdDelete size={25} className="text-red-500" />
      </div>
    </div>
  );
};

export default TaskCard;
