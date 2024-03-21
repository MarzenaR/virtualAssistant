import { ThemeProvider } from "styled-components";
import { mainTheme } from "./globalStyles/Themes/mainTheme";
import ModalWrapper from "./components/ModalWrapper";
import ModalProvider from "./contexts/Modal";
import UserProvider from "./contexts/User";
import RouterWrapper from "./router/RouterWrapper";
import GlobalStyles from "./globalStyles/globalStyles";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <RouterWrapper />
          <ModalWrapper />
        </ThemeProvider>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
