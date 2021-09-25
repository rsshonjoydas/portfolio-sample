import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Skill from "./pages/Skill";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/skills" exact={true} component={Skill} />
          <Route path="/testimonials" exact={true} component={Testimonial} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
