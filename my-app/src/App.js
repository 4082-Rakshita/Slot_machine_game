import react from "react";
import SlotM from "./SlotMach";
const App = () => {
  return (<>
  <h1 className="heading_style ">🎰  Welcome to <span style = {{fontWeight : 'bold'}}>Slot machine game</span>🎰 </h1>
      <div className="slotmachine">
        <SlotM x="😇" y="😇" z="😇"></SlotM>
        

        <SlotM x="🍎" y="😇" z="😇"></SlotM>
        

        <SlotM x="🍌"  y="😇" z="🍎 "></SlotM>
        

        <SlotM x="😇" y="😇" z="😇"></SlotM>
        
      </div>
  </>
  );
};

export default App;

