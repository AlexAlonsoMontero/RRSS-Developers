import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import PrincipalHeader from "./ui/components/PrincipalHeader";
import PrincipalNavBar from "./ui/components/PrincipalNavBar";

function App() {
  return (
    <>
      <PrincipalNavBar />
      <PrincipalHeader />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>

  );
}

export default App;
