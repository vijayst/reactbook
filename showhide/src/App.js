import React, { Component } from 'react';
import './App.css';
import Transition from 'react-transition-group/Transition';

class App extends Component {
    state = { show: false };

    render() {
        return (
            <div className="app">
                <button onClick={() => this.setState({ show: !this.state.show })}>
                    {this.state.show ?
                        "Hide" :
                        "Show"
                    }
                </button>
                <Transition in={this.state.show} timeout={1000}>
                    {state => {
                        if (state === "entering" || state === "entered") {
                            return <div className="box" />
                        } else {
                            return <div className="box box-collapse" />
                        }
                    }}
                </Transition>
            </div>
        );
    }
}

export default App;
