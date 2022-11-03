import { Provider, useSelector } from "react-redux";
import BooksHome from "./views/books/BooksHome";
import store from "./store/store";
import Header from "./components/Header";

function App() {

  return (
    <Provider store={store}>
      <Header/>
      <main>
      <BooksHome />
      </main>
    </Provider>
  );
}

export default App;
