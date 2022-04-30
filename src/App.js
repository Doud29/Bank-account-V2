import "./App.scss";
import Header from "./composent/Header";
import Account from "./composent/Account";

function App() {
  return (
    <div className="App">
      <Header titre="My Bank account" />
      <Account />
    </div>
  );
}

export default App;
