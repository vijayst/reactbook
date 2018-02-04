import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = { items: ['Hello', 'World'] };

    render() {
        return (
            <div className="todo">
                {this.state.items.map(item => (
                    <div>
                        {item}
                        <button>
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
