import socket from "./ws-client";
import {ChatForm, ChatList} from "./dom"; // named import

const FORM_SELECTOR = "[data-chat='chat-form']";
const INPUT_SELECTOR = "[data-chat='message-input']";
const LIST_SELECTOR = "[data-chat='message-list']";

class ChatApp{
  constructor(){
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, 'wonderwoman');
    socket.init("ws://localhost:3001"); // connection

    socket.registerOpenHandler(() =>{
      this.chatForm.onSubmit((data) => {// on form submit, send msg to socket
        let message = new ChatMessage({message : data});
        socket.sendMessage(message.serialize());
      })
    })
    socket.registerMessageHandler((data) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
    })
  }
}

class ChatMessage{
  constructor({message="default", user="batman", timestamp=(new Date()).getTime()}){
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }
  serialize(){
    return {user: this.user, message: this.message, timestamp: this.timestamp};
  }
}

export default ChatApp;
