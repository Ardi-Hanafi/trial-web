import './App.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Home, Landing } from './Pages'

const menus = [
  {
    name: "Landing",
    path: "/landing",
    component: Landing
  },
  {
    name: "Home",
    path: "/home",
    component: Home
  },
];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {menus.map((menu) => (
          <Route exact path={menu.path} component={menu.component} name={menu.name} />
        ))}
        <Redirect to={menus[0]?.path} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
