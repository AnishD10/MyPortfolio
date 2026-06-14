import { useState } from "react";

const ColorBox = () => {
  const colors = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "yellow" },
    { id: 5, color: "purple" },
    { id: 6, color: "pink" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].color);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      
      <div
        className="w-125 h-25 border-2 p-10 flex gap-8 items-center justify-center"
        style={{ borderColor: selectedColor }}
      >
        
        {colors.map((item) => (
          <div
            key={item.id}
            className="w-10 h-10 rounded-full cursor-pointer"
            style={{ backgroundColor: item.color }}
            onClick={() => setSelectedColor(item.color)}
          />
        ))}

      </div>

    </div>
  );
};

export default ColorBox;