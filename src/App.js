import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImperialDAO from 'components/ImperialDAO';
import AOS from 'aos';
import Sticky from 'sticky-js';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });

      this.stickey = new Sticky('.sticky-effect');
    }, 1500);
  }

  componentDidUpdate() {
    AOS.refresh();
    if (this.stickey) {
      this.stickey.destroy();
      this.stickey = new Sticky('.sticky-effect');
    }
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/" component={ImperialDAO} />
        </Switch>
      </Router>
    );
  }
}

export default App;
