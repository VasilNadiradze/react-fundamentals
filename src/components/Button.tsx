interface Props {
  children: string;
  color?: "success" | "primary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} color={color}>
      {children}
    </button>
  );
};

export default Button;
