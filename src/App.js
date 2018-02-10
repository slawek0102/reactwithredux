import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <Counter/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
