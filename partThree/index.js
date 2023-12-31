const App = () => (
    <div>
      <Person
        name="Brian Young"
        age={30}
        hobbies={["coding", "sports"]}
      />
      <Person
        name="Brandon Klien"
        age={12}
        hobbies={["hiking", "gaming"]}
      />
      <Person
        name="John Smith"
        age={30}
        hobbies={["reading", "fishing"]}
      />
    </div>
);


ReactDOM.render(<App />, document.getElementById("root"));