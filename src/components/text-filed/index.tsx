interface TextFieldProps {
  type: string;
  name: string;
  label: string;
  shrinkLabel?: boolean;
  multiline?: boolean;
  placeholder?: string;
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
  shrinkLabel = false,
  multiline,
  handleBlur,
  placeholder,
  handleChange,
}: TextFieldProps) => {
  const hasError = touched[name] && errors[name];
  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="w-full relative">
      <div className={`${!shrinkLabel ? 'space-y-2' : ''} relative`}>
        {shrinkLabel ? (
          <label
            htmlFor={name}
            className={`absolute text-base ${
              hasError ? 'text-error' : 'text-white'
            } duration-300 transform -translate-y-[21px] lg:-translate-y-5 scale-[.90] top-2 z-10 origin-[0] bg-background lg:bg-temp px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 ${
              multiline
                ? 'peer-placeholder-shown:-translate-y-[70px]'
                : 'peer-placeholder-shown:-translate-y-1/2'
            }  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[.90] peer-focus:-translate-y-[21px] lg:peer-focus:-translate-y-5 left-1.5`}
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor={name}
            className={`text-smMax lg:text-smMd font-medium ${
              hasError ? 'text-error' : 'text-white'
            }`}
          >
            {label}
          </label>
        )}
        <InputComponent
          id={name}
          name={name}
          type={type}
          value={values[name]}
          className={`block text-smMax lg:text-smMd text-white w-full h-14 px-3 border outline-none rounded caret-white bg-transparent peer secondary-scrollbar ${
            hasError
              ? 'border-error/[.7] hover:border-error focus:border-error'
              : 'border-white/[.7] hover:border-white focus:border-white'
          } ${multiline && 'h-[140px] p-3 resize-none'} focus:border-2 focus:px-[11.04px]`}
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
