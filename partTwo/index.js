const App = () => (
    <div>
      <Tweet username="johnDoe" name="John Doe" message="Hello world!" date="1/2/2023" />
      <Tweet username="janeDoe" name="Jane Doe" message="Hello everyone!" date="1/3/2023" />
      <Tweet username="markSmith" name="Mark Smith" message="The weather is great today!" date="1/4/2023" />
    </div>
);


ReactDOM.render(<App />, document.getElementById("root"));