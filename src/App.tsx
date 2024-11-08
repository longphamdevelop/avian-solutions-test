import Content from "./layout/Content";
import Header from "./layout/Header";
import Sider from "./layout/Sider";

function App() {
  return (
    <div className="layout">
      <Sider />
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
