const Tweet = (props) => {
    return (
    <div className="tweet">
        <h2>{props.username}</h2>
        <h3>{props.name}</h3>
        <p>{props.message}</p>
        <div class="dateDiv">
          <span className="date">{props.date}</span>
        </div>
    </div>
  );
};