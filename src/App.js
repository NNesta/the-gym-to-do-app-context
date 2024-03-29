import { useContext } from "react";
import InputBox from "./components/InputBox";
import TaskItem from "./components/TaskItem";
import { AppContext } from "./context";

function App() {
  const { tasks } = useContext(AppContext);
  return (
    <main className="max-w-5xl mx-auto px-2">
      <h1 className="text-7xl max font-bold text-current-900 text-center">
        Todos
      </h1>
      <InputBox />
      <div>
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
      </div>
    </main>
  );
}

export default App;
