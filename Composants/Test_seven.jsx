function Button({text="Cliquez moi !",color="Red",fontSize=15}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    }
    return (
        <button style={buttonStyle}>{text}</button>
    );
}

function Button1(props) {
    const button1Style = {
        color: props.color,
        fontSize: props.fontSize + "px"
    }
    return (
        <button style={button1Style}>{props.text}</button>
    );
}

function Button2({text="Bouton",color="Green",fontSize=20,handleClick}) {
    const button2Style = {
        color: color,
        fontSize: fontSize
    }
    return (
        <button onClick={handleClick} style={button2Style}>{text}</button>
    );
}

export default function App() {

    const handleButtonClick = () => {
        window.location.href="https://mesos.apache.org/documentation/latest/index.html";
    }

    return (
        <div>
            <Button/>
            <br/>
            <Button text="Moi c'est maxime."/>
            <br/>
            <Button1 text="Ne pas me cliqué !" color="Pink" fontSize={20}/>
            <Button2 handleClick={handleButtonClick}/>
        </div>
    );
}