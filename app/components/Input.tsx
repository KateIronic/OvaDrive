interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
}
const Input: React.FC<InputProps> = ({ id, type, placeholder, label }) => {
  return (
    <div className="mx-[20%]">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#A4A4A4]">
        {label}
      </label>
      <br />
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-[#282929] rounded-xl gap-3 h-11 w-full p-4 font-normal text-base text-[#A4A4A4] mt-1 border-black border-opacity-40 border-[1px]"
      />
    </div>
  );
};

export default Input;
