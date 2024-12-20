import { useSelector } from "react-redux";
import Account from "./app/account/Account";
import Bonus from "./app/bonus/Bonus";
import Reward from "./app/reward/Reward";
import Admin from "./app/admin/Admin";
import "./App.css";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : ${amount}</h3>
      <h3>Total Bonus : {points}</h3>
      <Account />
      <Bonus />
      <Reward />
      <Admin />
    </div>
  );
}

export default App;
