import ReducerEx1 from "./pages/ReducerEx1";
import ReducerEx2 from "./pages/ReducerEx2";
import ReducerEx3 from "./pages/ReducerEx3";
import ReduxEx from "./components/ReduxEx";
import "./App.css";

function App() {
  return (
    <div className="App">
      {false && (
        <>
          <ReducerEx1 />
          <ReducerEx2 />
          <ReducerEx3 />
        </>
      )}

      {true && <ReduxEx />}
    </div>
  );
}

export default App;
