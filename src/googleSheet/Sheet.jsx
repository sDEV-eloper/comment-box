import React, { useState } from 'react'
import Colors from './Colors';
import './SheetStyle.css'

const Sheet = () => {

      
  const [selectedCell, setSelectedCell] = useState(null);
  const [cellColors, setCellColors] = useState(
    Array.from({ length: 16 }, () => "white")
  );

  const handleCellClick = (index) => {
    setSelectedCell(index);
  };

  const handleColorChange = (color) => {
    if (selectedCell !== null) {
      const updatedColors = [...cellColors];
      updatedColors[selectedCell] = color;
      setCellColors(updatedColors);
    }
  };

  const inputs = cellColors.map((color, index) => (
    <input
      type="text"
      key={index}
      className="grid-input"
      style={{ background: color }}
      onClick={() => handleCellClick(index)}
    />
  ));

  return (
    <>
    <h1>Google Sheet</h1>
      <div className="grid-container">{inputs}</div>
      <Colors onColorChange={handleColorChange} />
    </>
  );

}

export default Sheet
