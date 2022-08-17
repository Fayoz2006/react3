import "./App.css";
import Item from "./Components/Item/Item";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <main>
          <div className="screen-wrapper">
            <h1>
              Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia,
              and GameStop
            </h1>
            <a href="https://www.apple.com">Read Full Story</a>
            <div className="wrapper">
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
