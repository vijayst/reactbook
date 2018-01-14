import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import 'react-select/dist/react-select.css';

const Form = styled.form`
    width: 400px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ccc;
`;

const Row = styled.div`
    padding: 10px;
` ;

const Label = styled.label`
    display: block;
    margin-bottom: 4px;
`;

const Text = styled.input`
    width: 100%;
    font-size: 1em;
    padding: 5px;
`;

const Textarea = styled.textarea`
    width: 100%;
    font-size: 1em;
    padding: 5px;
    height: 100px;
`

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    background-color: darkblue;
    color: white;
    border-radius: 6px;
    border: 1px solid navy;
`;

class App extends Component {
constructor() {
    super();
    this.state = {};
}

    render() {
        return (
            <Form>
                <Row>
                    <Label htmlFor="name">Name: </Label>
                    <Text type="text" id="name"></Text>
                </Row>
                <Row>
                    <Label htmlFor="email">Email: </Label>
                    <Text type="text" id="email"></Text>
                </Row>
                <Row>
                    <Label>Reason: </Label>
                    <Select
                        name="reason"
                        value={this.state.reason}
                        options={[
                            { value: 'A', label: 'Account related' },
                            { value: 'B', label: 'Billing and payment' },
                            { value: 'C', label: 'Other issues' }
                        ]}
                        onChange={reason => this.setState({ reason })}>
                    </Select>
                </Row>
                <Row>
                    <Label htmlFor="urgent">Is Urgent:</Label>
                    <input type="checkbox" id="urgent" />
                </Row>
                <Row>
                    <Label htmlFor="message">Message: </Label>
                    <Textarea id="message" />
                </Row>
                <Row>
                    <Button>Contact Us</Button>
                </Row>
            </Form>
        );
    }
}

export default App;
