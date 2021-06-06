import React, { Component } from 'react';
import SockJsClient from 'react-stomp';

const senderId = 1001
const recipientId = 1003
const chatId = 2401

const SOCKET_URL = 'https://chatchit69.herokuapp.com/websocket-chat';
class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            typedMessage: "",
            name: ""
        }
    }

    setName = (name) => {
        console.log(name);
        this.setState({ name: name });
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/chat', JSON.stringify({
            recipientId: recipientId,
            senderId: senderId,
            content: this.state.typedMessage,
        }));
    };

    displayMessages = () => {
        return (
            <div>
                {this.state.messages.map(msg => {
                    return (
                        <div>
                            {this.state.name === msg.name ?
                                <div>
                                    <p className="title1">{msg.senderId} : </p><br />
                                    <p>{msg.content}</p>
                                </div> :
                                <div>
                                    <p className="title2">{msg.senderId} : </p><br />
                                    <p>{msg.content}</p>
                                </div>
                            }
                        </div>)
                })}
            </div>
        );
    };

    render() {
        return (
            <div>
                {/* <NameComponent setName={this.setName} /> */}
                <div className="align-center">
                    <h1>Welcome to Web Sockets</h1>
                    <br /><br />
                </div>
                <div className="align-center">
                    User : <p className="title1"> {this.state.name}</p>
                </div>
                <div className="align-center">
                    <br /><br />
                    <table>
                        <tr>
                            <td>
                                <input id="outlined-basic" label="Enter Message to Send" variant="outlined"
                                    onChange={(event) => {
                                        this.setState({ typedMessage: event.target.value });
                                    }} />
                            </td>
                            <td>
                                <button variant="contained" color="primary"
                                    onClick={this.sendMessage}>Send</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <br /><br />
                <div className="align-center">
                    {this.displayMessages()}
                </div>
                <SockJsClient url={SOCKET_URL}
                    topics={[`/topic/${chatId}/queue/messages`]}
                    onConnect={() => {
                        console.log("connected");
                    }}
                    onDisconnect={() => {
                        console.log("Disconnected");
                    }}
                    onMessage={(msg) => {
                        console.log("nhan dc tin nhan oi`");
                        var jobs = this.state.messages;
                        jobs.push(msg);
                        this.setState({ messages: jobs });
                        console.log(this.state);
                    }}
                    ref={(client) => {
                        this.clientRef = client
                    }} />
            </div>
        )
    }
}

export default Chat;