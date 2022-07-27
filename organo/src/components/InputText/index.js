import "./InputText.css";

const TextInput = (props) => {
  const handleChange = (e) => {
    props.toChanged(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={handleChange}
        required={props.required}
        type="text"
        placeholder={props.placeholder}
        value={props.newValueInput}
      />
    </div>
  );
};
export default TextInput;
