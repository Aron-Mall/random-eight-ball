const messageElm = document.querySelector(".message");

const questionElm = document.querySelector("#question");

const btn = document.querySelector("button")

const answersArray = ["You just need to believe in yourself", "Yes you can do it", "Maybe you may want to think it over", "I don't know"]


btn.addEventListener("click", handleAskClick);



function handleAskClick(event){
    const usersQuestion = questionElm.value;
    console.log(`The question input is ${usersQuestion}`)

    const answer = answersArray[getRandom()];

    messageElm.innerText = usersQuestion + " " + answer;

    setTimeout(()=>{
        messageElm.innerText = ""
        questionElm.value = ""
    },2000)
}


function getRandom(){
    return Math.floor(Math.random() * answersArray.length);
}