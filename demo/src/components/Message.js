import { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "welcome visitor"
        }
        this.changeMessage = this.changeMessage.bind(this);

    }
    changeMessage() {
        this.setState({
            message: "thank for subscribing"
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>SubScribe</button>
            </div>
        )
    }
}
export default Message