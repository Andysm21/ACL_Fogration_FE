import React from 'react';

interface InputProps {
  id: string;
  placeholder?: string;
  type?: string;
  label?: string;
}

const InputField: React.FC<InputProps> = ({
  id,
  placeholder,
  type = 'text',
  label,
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <label htmlFor={id} className="text-sm text-gray-600">
        {label || ''}
      </label>
      <input
        type={type}
        placeholder={placeholder || ''}
        id={id}
        className="w-[100%] rounded-lg border border-gray-400 p-2 px-4"
      />
    </div>
  );
};

export default InputField;
