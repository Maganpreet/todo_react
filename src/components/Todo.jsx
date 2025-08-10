import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";

const Todo = ({ id, text, completed, onEdit, onDelete }) => {
  return (
    <div id={id} className="flex flex-row items-start justify-start">
      <li className="w-104 text-red-300 text-xl ml-10 pl-2 hover:bg-linear-to-r from-gray-900 via-gray-700 to-gray-500 border-1 border-gray-100 rounded-sm">
        {text}
      </li>
      <span className="flex flex-row">
          <button onClick={() => onEdit(id, text)} className="">
            <CiEdit className="w-10 h-8 text-xl text-gray-300" />
          </button>
          <button onClick={() => onDelete(id)} className="">
            <RxCross1 className="w-10 h-8 text-xl text-gray-300" />
          </button>
        </span>
    </div>
  );
};

export default Todo;
