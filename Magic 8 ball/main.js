

function getResponse(){
    let question = document.getElementById("8ball-in").value;
    if(question == 'Does the magic 8 ball actually work?'){
        return "How dare you doubt me!";
    } else if( question == 'Is Javascript awesome?'){
        return "Of course!";
    } else if(question == ''){
        return "Please ask a question";
    }else {   
        return randomResponse();
    }
}


function randomResponse(){
    if( Math.random() > 0.8){
        return "Without a doubt!";
       } else if(Math.random() > 0.6){
           return "As I see it, yes.";
       } else if(Math.random() > 0.4){
       return "Concentrate and ask again";
        } else if(Math.random() > 0.2){
       return "Don't count on it";
        } else {
      return "Outlook not so good";
        }
   
}
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){
    document.getElementById("output").innerHTML = getResponse();
}