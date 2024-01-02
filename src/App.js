import Counter01 from "./components/Counter01";
import Counter02 from "./components/Counter02";
import Counter03 from "./components/Counter03";
import MainLayout from "./components/MainLayout";
import ProductList from "./components/ParentChild/ProductList";
import FlexboxLayout from "./pages/FlexboxLayout";
import GridLayout from "./pages/GridLayout";
import ThemeCustom from "./references/ThemeCustom";
import ReactProps from "./references/ReactProps";
import NestedComponents from "./references/NestedComponents"

function App() {
  return (
    //stateless example
    //<ThemeCustom/>
    //<ReactProps color="blue"/>
    <NestedComponents/>
    //statefull example
    //<Counter01/>
    //<Counter02/>
    //<Counter03/>
    //<ThemeCustom/>
    //<ProductList/>
    //<FlexboxLayout/>
    //<GridLayout/>
  );
}

export default App;
