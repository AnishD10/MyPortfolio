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
        className="w-20 h-125 border-2 px-15 flex flex-col gap-8 items-center justify-center"
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

const InitialBox = () => {

  const letters = "SWITCH COLOR".split("");
  
  return(

    <>
      {/* <div className="bg-red-500 h-50 w-25 mt-50" style ={{clipPath: "polygon(0 0, 9% 14%, 9% 86%, 0% 100%)"}}> */}
       


    <div
      className="bg-red-500 h-50 w-25 mt-50 hover:bg-gray-500 h-100 w-120 mt-50"
      style={{
        clipPath: "polygon(0 0, 9% 14%, 9% 86%, 0% 100%)",
      }}
    >
      <h2 className="flex flex-col justify-center p-3 w-full h-full ">
        {letters.map((letter, index) => (
          <p key={index}>
            {letter === " " ? "\u00A0" : letter}
          </p>
        ))}
      </h2>
    </div>
  

    </>
  )
}


export { ColorBox,InitialBox };