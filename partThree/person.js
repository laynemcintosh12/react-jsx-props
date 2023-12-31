const MAX_NAME_LENGTH = 6

const Person = ({ age, hobbies, name }) => {
    const message = age >= 18
        ? "Please Go Vote!"
        : "Not Old Enough to Vote Yet";

    return (
    <div>
        <h1>Learn Some More About this Person!</h1>
        <h2>Name: {name.slice(0, MAX_NAME_LENGTH)}</h2>
        <h3>Age: {age}</h3>
        <h3>{message}</h3>
        <ul>
            <b>Hobbies:</b>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>
  )
};