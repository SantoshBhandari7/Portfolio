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
    <div className="flex flex-col justify-center ">
      <div className="flex gap-1 items-top ">
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[8px] " />}
      </div>

      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-gray-600 text-gray-500 px-2 py-1 w-fit h-fit rounded-md hover:border-blue-400 focus-within:border-blue-500 focus:border-b-amber-200"
      />
    </div>
  );
};
export default Input;
