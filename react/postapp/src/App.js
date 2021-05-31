import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPost from "./pages/AddPost";
import SinglePostPage from "./pages/SinglePostPage";
import CounterPage from "./pages/CounterPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/counter" component={CounterPage}></Route>
          <Route path="/post/:id" component={SinglePostPage}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddPost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
