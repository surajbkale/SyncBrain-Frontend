import "./App.css";
import { Button } from "./components/Button";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        variant="secondary"
        text="Share Brain"
        size="sm"
        startIcon={<ShareIcon />}
      />

      <Button
        variant="secondary"
        text="Share Brain"
        size="sm"
        startIcon={<ShareIcon />}
      />
    </>
  );
}

export default App;
