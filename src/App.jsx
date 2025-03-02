import Layout from "./layout/Layout";
import { ThemeProvider } from "./_contextapi/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div>
          <h1 className="">Hello</h1>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
