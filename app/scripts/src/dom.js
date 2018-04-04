import $ from "jquery";


class ChatForm{
  constructor(formSel, inputSel){
    this.$form = $(formSel);
    this.$input = $(inputSel);
  }

  onSubmit(submitCallBack){ // called on submit
    this.$form.submit((event)=>{
      event.preventDefault();
      let val = this.$input.val();
      submitCallBack(val);
      this.$input.val("");
    });

    this.$form.find("button").on("click", () => this.$form.submit());
  }
}

class ChatList{
  constructor(listSel, username){
    this.$list = $(listSel); // each instance is connected to a list
    this.username = username;
  }

  drawMessage(user){
    let li2 = document.getElementById("chat_list")
                      .appendChild(document.createElement("li"));
    li2.innerText = `${user.user} says: ${user.message}`;
  }
}

export {ChatForm, ChatList};
