import "./App.css";
import Todos from "./components/Todos";
import "./tailwind.css";

function App() {
  return (
    <>
      <div className="container font-stretch-expanded">
        <div className="header bg-gray-700 p-6 mt-2 rounded-sm text-gray-400 text-5xl w-screen font-sans">
          <h3 className="navbar">simply do!</h3>
        </div>
        <div className="todos_main mt-8 ml-4">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
