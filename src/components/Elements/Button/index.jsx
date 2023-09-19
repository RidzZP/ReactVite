const Button = (props) => {
  const {
    title = "...",
    variant = "btn",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`btn ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
