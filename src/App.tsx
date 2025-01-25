import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { HomePage, LoginPage, NotFoundPage, RegisterPage } from "./pages";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
