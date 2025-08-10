import "./App.css";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import "./tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 font-stretch-expanded h-screen flex flex-col">
      <div className="header bg-gray-700 p-6 ml-2 mt-2 rounded-sm text-gray-400 w-380 font-san gap-x-96">
        <h3 className="navbar text-5xl">simply do!</h3>
        <Timer className="text-lg w-3xl"></Timer>
      </div>
      <div className="todos_main mt-8 ml-4">
        <Todos />
      </div>
    </div>
  );
}

export default App;
