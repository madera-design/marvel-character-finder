import "./assets/css/App.css";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./assets/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <Listitem /> */}
          <Login />
        </header>
      </div>
    </Provider>
  );
}

export default App;
