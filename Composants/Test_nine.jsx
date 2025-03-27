function Button({text="Cliquez moi !", color="Pink", fontSize=20, handleClick}) {

    const buttonStyle = {
        color: color,
        fontSize: fontSize
    }

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

export default function App() {

    const handlebuttonClick = (url) => () => {
        window.location.href=url;
    }

    return (
        <div>
            <h1>W3Schools</h1>
            <Button handleClick={handlebuttonClick("https://www.w3schools.com/")}/>
        </div>
    );
}