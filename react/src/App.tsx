import { useEffect } from "react";
import Navigator from "./routes";

function App(): JSX.Element {
  useEffect((): void => {
    if (window.location.pathname.toString() === "/") {
      window.location.replace("/learn");
    }
  }, []);

  return <Navigator />;
}

export default App;
