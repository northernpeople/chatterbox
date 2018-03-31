class ChatApp{
  constructor(){
    console.log("hello es6");
  }
}

class ChatMessage{
  constructor({message, user="batman", timestamp=(new Date()).getTime()}){
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }
  serialize(){
    return {user: this.user, message: this.message, timestamp: this.timestamp};
  }
}

export default ChatApp;
export {ChatMessage};
