function ListItem(props) {
    return (
        <ul>
            {props.items.map((item) => {
                return (
                    <li key={item}>{item}</li>
                );
            })}
        </ul>
    );
}

function ListItemCondition(props) {
    return (
        <ul>
            {props.items.map((item) => {
                return (
                    item.startsWith("M")? <li key={item}>{item}</li>:null
                );
            })}
        </ul>
    );
}

function App() {
    const prenoms = ["Maxime","Clément","Fiacre","Bénédicte","Joseph"];
    const metiers = ["Médécin","Informaticien","Casheur","Président","Militaire"];
    return (
        <div>
            <h1><u>Prénoms :</u></h1>
            <ListItem items={prenoms}/>
            <h2><u>Métiers :</u></h2>
            <ListItem items={metiers}/>
            <h3>Les prénoms débutants par la lettre "M":</h3>
            <ListItemCondition items={prenoms}/>
            <h4>Les métiers commençant par "M":</h4>
            <ListItemCondition items={metiers}/>
        </div>
    );
}

export default App;