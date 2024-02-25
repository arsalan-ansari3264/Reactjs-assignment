import "./button.scss";
const Button = ({ width, title }) => {
  return (
    <>
      <button className={width ? "btn width" : "btn"}>{title}</button>
    </>
  );
};

export default Button;
