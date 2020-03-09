import React from 'react';

import {colors} from "./assets/styles";

import Header from "./components/header";

import ViewScreen from "./screens/View/viewResults";
import DetailScreen from "./screens/Detail/detail";
import HomeScreen from "./screens/Home/home";
import SimpleModal from "./components/modal";


import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

class App extends React.Component {
    render() {

        return (
            <div className="App" style={{"backgroundColor": colors.background,}}>
                <Header/>
                <Router>
                    <Switch>

                        <Route path="/" component={HomeScreen} exact/>
                        <Route path="/filter" component={ViewScreen} exact/>
                        <Route path="/modal" component={SimpleModal} exact/>
                        <Route path="/details" component={DetailScreen} exact/>

                    </Switch>
                </Router>
            </div>
        );

    }

}

export default App;
