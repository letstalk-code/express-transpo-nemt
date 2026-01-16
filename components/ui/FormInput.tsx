interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "textarea";
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: FormInputProps) {
  const inputStyles = "w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none transition-colors";

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-dark mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={inputStyles}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className={inputStyles}
        />
      )}
    </div>
  );
}
