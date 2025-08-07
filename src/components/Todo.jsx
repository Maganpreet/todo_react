import { RxCross1 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";

const Todo = ({ id, text, completed, onEdit, onDelete }) => {
  return (
    <div id={id} className="flex flex-row items-start justify-start">
      <li className="pl-3 basis-1/3">
        {text}
      </li>
      <button onClick={() => onEdit(id, text)} className="basis-1/3">
        <CiEdit className="text-xl text-gray-700" />
      </button>
      <button onClick={() => onDelete(id)} className="basis-1/3">
        <RxCross1 className="text-xl text-gray-700" />
      </button>
    </div>
  );
};

export default Todo;
