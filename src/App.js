import Timer from "./components/Timer.jsx";
import { useState } from "react";
import Container from "@material-ui/core/Container";

function App() {
  const [isBreak, setIsBreak] = useState(false);
  const switchClock = () => {
    setIsBreak(!isBreak);
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      {isBreak ? (
        <Timer timeToSpend={2} switchClock={switchClock}>
          Time to Break
        </Timer>
      ) : (
        <Timer timeToSpend={5} switchClock={switchClock}>
          Time to learn
        </Timer>
      )}
    </Container>
  );
}

export default App;
