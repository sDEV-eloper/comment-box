import './SheetStyle.css'

const Colors = ({ onColorChange }) => {
  const handleColor = (color) => {
    onColorChange(color);
  };

  return (
    <div className="color-box">
      <span id="green" onClick={() => handleColor("green")}></span>
      <span id="red" onClick={() => handleColor("red")}></span>
      <span id="blue" onClick={() => handleColor("blue")}></span>
      <span id="yellow" onClick={() => handleColor("yellow")}></span>
    </div>
  );
};

export default Colors;
