const InputWrapper = ({ forName, content, type, id }) => {
  return (
    <div className="input-wrapper">
      <label for={forName}>{content}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default InputWrapper;
