const TextValidationForm = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  error,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-1 items-center mb-5"
    >
      <div className="flex flex-col justify-center items-start">
        <label htmlFor="teacherName" className="mt-6">
          {placeholder}:
        </label>
        <input
          type="text"
          id="teacherName"
          placeholder={placeholder}
          className="text-black w-[300px] h-[50px] p-4 border border-grey-300 rounded-md focus:outline-none focus:border"
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-400 flex">{error}</p>}
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default TextValidationForm;
