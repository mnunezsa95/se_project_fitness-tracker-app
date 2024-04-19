import ToggleSwitch from "./components/ToggleSwitch";
import { ColorModeProvider } from "./contexts/ColorModeProvider";

function App() {
  return (
    <>
      <ColorModeProvider>
        <div className="dark">
          <ToggleSwitch />
        </div>
      </ColorModeProvider>
    </>
  );
}

export default App;
