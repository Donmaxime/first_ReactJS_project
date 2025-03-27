function Button(props) {
    const ButtonStyle = {
        color: props.color,
        fontSize: props.fontSize + "px"
    }

    return (
        <button style={ButtonStyle}>{props.text}</button>
    );
}

function Button1({text,color,fontSize}) {
    const Button1Style = {
        color: color,
        fontSize: fontSize + "px"
    }

    return (
        <button style={Button1Style}>{text}</button>
    );
}

function Button2({text="Cliquez moi !",color="Blue",fontSize=30}) {
    const Button1Style = {
        color: color,
        fontSize: fontSize + "px"
    }

    return (
        <button style={Button1Style}>{text}</button>
    );
}

function Button3({ text, color, fontSize }) {
    const buttonStyle = {
      color: color,
      fontSize: fontSize + "px"
    };
  
    return <button style={buttonStyle}>{text}</button>;
  }
  
/*Button3.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
  };*/


export default function App() {
    return (
        <div>
            <Button text="Hi, salut !" color="Green" fontSize={30}/>
            <Button1 text="Yo Boss !" color="Yellow" fontSize={25}/>
            <Button1 text="Tchalé, en forme !" color="Red" fontSize={30}/>
            <Button2/>
            <Button3 text="Bouton" color="Pink" fontSize={30}/>
        </div>
    );
}