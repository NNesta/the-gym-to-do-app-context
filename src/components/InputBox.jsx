import { useState, useContext } from "react";
import { AppContext } from "../context";
import { nanoid } from "nanoid";
import { BsPlusCircleFill } from "react-icons/bs";

const InputBox = () => {
  const [taskText, setTaskText] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const { setTasks } = useContext(AppContext);
  const handleChange = (event) => {
    setTaskText(event.target.value);
    setInvalidInput(false);
  };
  const handleAdd = () => {
    if (taskText) {
      setTasks((prevTasks) => {
        return [{ id: nanoid(), taskText, isCompleted: false }, ...prevTasks];
      });
      setTaskText("");
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <div
      className={`flex items-center justify-between shadow-3xl m-4 rounded-full px-4 ${
        invalidInput && "border-red-500 border"
      }`}
    >
      <input
        onChange={handleChange}
        value={taskText}
        className="px-4 py-2 focus:outline-none flex-1"
        placeholder="add taskText..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAdd();
          }
        }}
      />

      {taskText && (
        <BsPlusCircleFill
          onClick={handleAdd}
          size={25}
          className="text-current-500  hover:scale-110 cursor-pointer"
        />
      )}
    </div>
  );
};

export default InputBox;
