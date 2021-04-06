import React, { Suspense } from "react";
import About from "@pages/About";
import Search from "@pages/Search";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Loading from "@components/Loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Newsletter from "@pages/Newsletter";

const App: React.FC = () => (
  <Router>
    <Suspense
      fallback={<Loading className="flex justify-center items-center m-auto" />}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/newsletter" component={Newsletter} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
