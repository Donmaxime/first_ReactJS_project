function List(props) {
    return (
        <>
            {!props.items? (<div>Loading .....</div>): props.items.length > 0? (
                <ul>
                    {props.items.map((item) => {
                        return <li key={item}>{item}</li>
                    }
                    )}
                </ul>
            ): (<div>Il n'y a aucun éléments dans la liste.</div>) }
        </>
    );
}

function OtherList(props) {
    return (
        <>
            {!props.items&&<div>Loading ....</div>}
            {props.items && props.items.length > 0 && (
                <ul>
                    {props.items.map((item) => {
                        return <li key={item}>{item}</li>
                    }
                    )}
                </ul>
            )}
            {props.items && props.items.length === 0 && <div>La liste est vide !</div>}
        </>
    );
}

function App() {
    const elements = [];
    const mots=["Salut","Hello","Hi","Coucou","Bonjour","Salutations"];
    const tableau = ["Bijoux","Cailloux","Choux","Genoux","Hiboux","Joujoux"];
    return (
        <div>
            <h1>gangx.</h1>
            <List items={elements}/>
            <List items={mots}/>
            <h2>L.A M.A.NO rien à tter-gra bande de haineux.</h2>
            <OtherList items={tableau}/>
        </div>
    );
}

export default App;