import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import players from "pages/Players";
// import Maps from 'pages/Maps';
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
// import 'assets/styles/tailwind.css';

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/settings" component={Settings} /> */}
          <Route exact path="/players" component={players} />
          {/* <Route exact path="/maps" component={Maps} /> */}
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
