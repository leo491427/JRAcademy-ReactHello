import React from 'react';
import {addWelcome} from '../actions/welcomeAction'

class WelcomeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            content: ''
        };
    }

    render() {
        return (
            <form>

                    Author:
                    <input type="text" name="author" value={this.state.author} onChange={this.onAuthorChange}></input>

                <label>
                    Content:
                    <input type="text" name="content" value={this.state.content} onChange={this.onContentChange}></input>
                </label>
                <input type="submit" value="submit" onClick={this.onWelcomeFormSubmit}/>
            </form>
        );
    };

    onWelcomeFormSubmit = (event) => {
        console.log(event);
        console.log(event.target);
        event.preventDefault();
        this.props.dispatch(addWelcome(this.state.author, this.state.content));
    };

    onAuthorChange = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        this.setState({author: event.target.value});
//        this.setState({author: event.input.value})
//        console.log(event.input.value);
    };

    onContentChange = (event) => {
        this.setState({content: event.target.value});
    };
}

export default WelcomeForm;