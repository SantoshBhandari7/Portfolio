import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

interface Tprops {
  id: string;
  name: string;
  rows: number;
  placeholder?: string;
  required?: boolean;
  label: string;
}

const TeaxtArea = ({
  id,
  name,
  rows,
  placeholder,
  required,
  label,
}: Tprops) => {
  return (
    <div>
      <div>
        <label>{label}</label>
        {required && <FaStarOfLife className="text-red-500 text-[8px]" />}
      </div>
      <textarea id={id} name={name} placeholder={placeholder} rows={rows} />
    </div>
  );
};

export default TeaxtArea;
