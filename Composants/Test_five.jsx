function Button() {
    return (
        <button>Cliquez moi !</button>
    );
}

function Button2() {
    return (
        <button>Ne pas Cliquez dessus !</button>
    );
}

function ButtonSpecial(props) {
    const ButtonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px',
    }

    return (
        <button style={ButtonStyle}>{props.text}</button>
    );
}

export default function App() {
    return (
        <div>
            <Button/>
            <br/>
            <Button2/>
            <br/>
            <Button2/>
            <Button/>
            <br/>
            <ButtonSpecial text="Salutations !" color="Blue" fontSize={25}/>
            <ButtonSpecial text="Hello Boss !" color="Red" fontSize={20}/>
        </div>
    );
}