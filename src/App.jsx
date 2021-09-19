import Lang from "./context";
import Screen from "./Screen";
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" translations={translations}>
      <div className="App">hi</div>
      <Screen />
    </Lang>
  );
}

export default App;
