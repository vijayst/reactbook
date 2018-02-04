import React, { Component } from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
                <TransitionGroup>
                    {this.state.items.map((item, index) => (
                        <CSSTransition key={item} timeout={1000} classNames="fade">
                            <div>
                                {item}
                                <button onClick={() => this.handleRemove(index)}>
                                    &times;
                                </button>
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

export default App;
