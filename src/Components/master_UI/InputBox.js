const InputBox = (props) => {
  return (
    <div className="flex flex-col m-3">
      <div className="ml-4 text-white font-semibold">{props.label}</div>
      <input
        placeholder={props.placeholder}
        className="shadow-sm shadow-sky-200 rounded-md m-3 p-2 text-left"
      />
    </div>
  );
};

export default InputBox;
