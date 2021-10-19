import { useRef } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import DashboardContainer from "./containers/dashboard";
import { CustomTheme } from "./theme";
import Menubar from "./containers/menubar";

function App() {
  const ref = useRef();
  return (
    <ChakraProvider theme={CustomTheme}>
      <DashboardContainer />
      {/* <Menubar /> */}
    </ChakraProvider>
  );
}

export default App;
