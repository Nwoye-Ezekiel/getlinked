interface TextFieldProps {
  type: string;
  name: string;
  label: string;
  multiline?: boolean;
  placeholder: string;
  values: Record<string, string>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextField = ({
  type,
  name,
  label,
  values,
  errors,
  touched,
  multiline,
  handleBlur,
  placeholder,
  handleChange,
}: TextFieldProps) => {
  const hasError = touched[name] && errors[name];
  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="w-full relative">
      <div className="space-y-2">
        <label
          htmlFor={name}
          className={`text-smMax lg:text-smMd font-medium ${hasError ? 'text-error' : 'text-white'}`}
        >
          {label}
        </label>
        <InputComponent
          id={name}
          value={values[name]}
          name={name}
          type={type}
          className={`block text-smMax lg:text-smMd text-white w-full h-14 px-3 border outline-none rounded caret-white bg-transparent peer secondary-scrollbar ${
            hasError
              ? 'border-error/[.7] hover:border-error focus:border-red'
              : 'border-white/[.7] hover:border-white focus:border-white'
          } ${multiline && 'h-[168px] p-3 resize-none'} focus:border-2 focus:px-[11.04px]`}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
          required
        />
      </div>
      {hasError && (
        <p className="text-smMd font-proximaNovaM text-error font-normal mt-0.5">{errors[name]}</p>
      )}
    </div>
  );
};

export default TextField;
