import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = { items: ['Hello', 'World'] };

    handleRemove(index) {
        let { items } = this.state;
        items = items.slice();
        items.splice(index, 1);
        this.setState({ items });
    }

    render() {
        return (
            <div className="todo">
                {this.state.items.map((item, index) => (
                    <div>
                        {item}
                            <button onClick={() => this.handleRemove(index)}>
                                &times;
                            </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
