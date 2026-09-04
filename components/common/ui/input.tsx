import { FaStarOfLife } from "react-icons/fa6";

interface IProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "file" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
}

const Input = ({ id, name, label, type, placeholder, required }: IProps) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[8px] " />}
      </div>

      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className=""
      />
    </div>
  );
};
export default Input;
