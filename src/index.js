import React from "react";
import ReactDOM from "react-dom";
// import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { store } from "./redux/store/configureStore";
import { Provider } from "react-redux";
// import colorModeTheme from "./colorModeTheme";
import { Fonts } from "./Fonts/Fonts";

// console.log(colorModeTheme)

// const rootElement = document.getElementById("root");

// const root = ReactDOMClient.createRoot(rootElement);

const config = {
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
        color: mode("black", "#f3f3f4")(props),
      },
    }),
  },
}

const theme = extendTheme({
  config
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <ChakraProvider
        theme={theme}
      >
        <Fonts />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
