import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

interface Tprops {
  id: string;
  name: string;
  rows: number;
  cols: number;
  placeholder?: string;
  required?: boolean;
  label: string;
}

const TeaxtArea = ({
  id,
  name,
  rows,
  cols,
  placeholder,
  required,
  label,
}: Tprops) => {
  return (
    <div className=" w-full flex flex-col justify-center">
      <div className="flex items-center">
        <label className="text-white font-medium">{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[8px]" />}
      </div>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        required
        className=" border rounded-xl border-gray-600 px-2 py-2  hover:border-blue-400 sm:w-fit lg:w-full"
      />
    </div>
  );
};

export default TeaxtArea;
