/************** Composant ListAnimals pour l'affichage de tous les animaux. */
function ListAnimals (props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>
            }
            )}
        </ul>
    );
}

//*********** Composant conditionnelle pour la liste des animaux*/ /
function ListAnimalsCond (props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L")? <li key={animal}>{animal}</li>:null;
            })}
        </ul>
    );
}

//******** Composant ListNoms pour l'affichage de tous les noms. */ /
function ListNoms (props) {
    return (
        <ul>
            {props.noms.map((nom) => {
                return <li key={nom}>{nom}</li>;
            })}
        </ul>
    );
}

/******** Composant conditionnelle pour la liste des noms*/

function ListNomsCond(props) {
    return (
        <ul>
            {props.noms.map((animal) => {
                return animal.startsWith("M") && <li key={animal}>{animal}</li>
            })}
        </ul>
    );
}

//**************Composant Principal */
function Principal() {
    const animals = ["Chien","Chat","Vautourd","Lièvre","Léopard","Panthère","Lion"];
    const noms = ["Maxime","Clément","Fiacre","Bénédicte","Joseph"];
    return (
        <div>
            <h1>Animals: </h1>
            <ListAnimals animals={animals}/>
            <h2>Noms: </h2>
            <ListNoms noms={noms}/>
            <h3>Liste conditionnelle pour les animaux: </h3>
            <ListAnimalsCond animals={animals}/>
            <h4>Liste conditionnelle pour les noms: </h4>
            <ListNomsCond noms={noms}/>
        </div>
    );
}

export default Principal;