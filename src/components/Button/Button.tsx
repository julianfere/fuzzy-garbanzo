import { ButtonProps } from "./types";
import "./button.css";

export const Button = ({ text, onClick, icon }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {icon ? <img src={icon} /> : null}
      {text}
    </button>
  );
};
