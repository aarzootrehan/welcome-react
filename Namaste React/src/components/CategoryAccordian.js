import { ItemList } from "./ItemList";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

export const CategoryAccordian = ({ title, card, showIndex, setShowIndex}) => {
  // In order to open and collapse accordian individually , uncomment below
  // const [visible , setVisible] = useState(false);

  
  return (
    <div
      className="accordian-container cursor-pointer"
      // onClick={() => setVisible(!visible)}
      // We are passing the event handler to the parent so we can call the setSelectedIndex
      onClick={() => setShowIndex()} 
    >
      <div className="font-bold flex justify-between bg-slate-200 border-solid border-gray-300 shadow-md p-2 m-4">
        {title}
        <div className="">
          {/*  In order to open collapse accordian individually, uncomment below */}
          {/* {!visible && <span>&#11206;</span>}
          {visible && <span>&#11205;</span>} */}

          <span>&#11206;</span>
        </div>
      </div>

      <div className="bg-slate-50 border-black m-4">
        {/*  In order to open collapse accordian individually, uncomment below */}
        {/* {visible && <ItemList card={card}/>} */}

        {showIndex && <ItemList card={card} key={card.id}/>}
      </div>
    </div>
  );
};
