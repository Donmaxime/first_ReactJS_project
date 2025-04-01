import { useState } from "react";

const COLORS = ["red","yellow","pink","white","green","blue","gold"];

export default function App() {
    const [backgroundColor, setbackgroundColor] = useState(COLORS[0]);
    const [person, setPerson] = useState({name:"Maxime",age:20});

    const onButtonClick = (color) => () => {
        setbackgroundColor(color);
    }

    const handleIncreaseAge = () =>{
        const newPerson = {...person, age: person.age +1};
        setPerson(newPerson);
    }

    return (
        <div className="App"
             style={{backgroundColor}}>

            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
            {COLORS.map((color) =>(
                <button type="button"
                        key={color}
                        onClick={onButtonClick(color)}
                        className={backgroundColor===color?'selcted':''}
                >
                    {color}
                </button>
            ))}

        </div>
    )

}