import { Suspense } from "react";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./_contextapi/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./layout/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
