import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter as Router} from "react-router-dom";
import ScrollToTopHandler from "./utils/hooks/ScrollToTopHandler";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  console.count("app renderd");
  return (
    <>
      <ChakraProvider
        theme={extendTheme({
          initialColorMode: "dark",
          useSystemColorMode: true,
          fonts: {
            heading: "Open Sans",
            body: "Raleway",
          },
          styles: {
            global: props => ({
              body: {
                bg: mode("white", "#18181a")(props),
                color: mode("#282c34", "#f3f3f4")(props),
              },
            }),
          },
        })}
      >
        <Router>
        <Navbar />
          <ScrollToTopHandler />
          <AnimatedRoutes />
        </Router>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
