import { useState } from "react";

const COLORS = ["red","blue","green","white","pink","yellow"];

export default function App() {
   const [backgroundColor, setbackgroundColor] = useState(COLORS[0]);

    const onButtonClick = (color) => () => {
        setbackgroundColor(color);
    }

    return (

        <div 
           className="App"
           style={{backgroundColor}} 
        >
        
            {COLORS.map((color) => (
                <button
                    type="button"
                    key={color}
                    onClick={onButtonClick(color)}
                    className= {backgroundColor === color? 'selected' : ''}
                >{color}</button>
            )
            )}

        </div>
    );
}