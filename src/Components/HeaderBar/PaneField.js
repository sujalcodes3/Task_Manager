const PaneField = (props) => {
  return (
    <p className=" shadow-md mr-10 text-violet-900 text-xl border-2 px-4 py-1 rounded-lg border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white">
      {props.label}
    </p>
  );
};

export default PaneField;
