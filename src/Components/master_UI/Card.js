const Card = (props) => {
  return <div className={`${props.className} shadow-md rounded-lg shadow-slate-400`}>{props.children}</div>;
};

export default Card;
