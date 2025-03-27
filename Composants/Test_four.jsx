const todos = [
    {task:"Work on OpenClassrooms.",id:crypto.randomUUID()},
    {task:"Work on OdinProjects.",id:crypto.randomUUID()},
    {task:"Work on W3Schools.",id:crypto.randomUUID()},
];

function ListTodos () {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}><u>La clé est:</u> "{todo.id}" et la tâche à éffectuer: <mark>{todo.task}</mark>.</li>
            ))}
        </ul>
    );
}

export default ListTodos;