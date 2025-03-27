function Button({text="Cliquez moi !",color="Pink",fontSize=20,handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize
    }
    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

export default function App() {

    const handle1ButtonClick = () => {
        window.location.href="https://mesos.apache.org/documentation/latest/index.html";
    }

    const handle2ButtonClick = (url) => {
        window.location.href=url;
    }

    return (
        <div>
            <h1>Site officiel d'Apache Mesos</h1>
            <Button handleClick={handle1ButtonClick}/>
            <br/>
            <h2>Site officiel de W3Schools</h2>
            <Button handleClick={() => handle2ButtonClick("https://www.w3schools.com/")}/>
            <h3>Site officiel de Grafikart</h3>
            <Button handleClick={() => handle2ButtonClick("https://grafikart.fr/")}/>
        </div>
    );
}