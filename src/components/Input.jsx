import "react";

const Input = ({
  todoId,
  todoSetter,
  enterHandler,
  todoValue,
  inputType,
  ...remaining
}) => {
  return (
    <input
      key={todoId}
      type="text"
      name="todo"
      onChange={(e) => todoSetter(e.target.value)}
      onKeyDown={(e) => enterHandler(e, todoId, inputType)}
      className="text-red-300 border-1 bg-linear-to-r from-gray-900 via-gray-700 to-gray-500 ml-4 w-lg text-wrap border-gray-900 rounded-sm text-2xl outline-none"
      value={todoValue}
      {...remaining}
    ></input>
  );
};

export default Input;
