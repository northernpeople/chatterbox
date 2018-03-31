import ChatApp from "./app";
import {ChatMessage} from "./app";


new ChatApp();

let message = new ChatMessage("message text").serialize();
console.log(message);
