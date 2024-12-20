import { useSelector } from "react-redux";
import Account from "./app/account/Account";
import Bonus from "./app/bonus/Bonus";
import "./App.css";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);

  return (
    <div className="App">
      <h4>App</h4>
      {account?.pending ? (
        <h2>loading..</h2>
      ) : account?.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : ${amount}</h3>
      )}
      <h3>Total Bonus : {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
