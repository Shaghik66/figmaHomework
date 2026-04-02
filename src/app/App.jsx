import { useData } from "../hooks/useData";
import { Header } from "../components/organisms/Header/Header";
import { Nav } from "../components/organisms/Nav/Nav";
import "./style.css";

function App() {
  const { products } = useData();

  return (
    <main className="mainContainer">
      <Nav />
      <Header products={products} />
    </main>
  );
}

export default App;
