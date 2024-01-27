const score=JSON.parse(localStorage.getItem('Score')) || {
    Win:0,
    Lost:0,
    Draw:0
};


document.getElementById("W").innerHTML = score.Win;
document.getElementById("L").innerHTML = score.Lost;
function Random1(){
    var ComputerMove;
    var Max=100;
    const r = Math.floor(Math.random()*Max);
    console.log(r);
    // document.getElementById("p").innerHTML=r;
    if(r<=30){
        ComputerMove = "Rock";
    }else if(r<=75){
        ComputerMove = "Paper";
    }else{
        ComputerMove = "Scissor";
    }
    UserMove = "Rock";

    if(ComputerMove==UserMove){
        score.Draw+=1;
        // document.getElementById("p1").innerHTML="Draw";
        score.Draw +=1;
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else if(ComputerMove=="Paper"){
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else{
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
        // document.getElementById("p1").innerHTML="Player Won";
    }
}

function Random2(){
    var ComputerMove;
    var Max=100;
    const r = Math.floor(Math.random()*Max);
    console.log(r);
    // document.getElementById("p").innerHTML=r;
    if(r<=30){
        ComputerMove = "Rock";
    }else if(r<=75){
        ComputerMove = "Paper";
    }else{
        ComputerMove = "Scissor";
    }
    UserMove = "Paper";

    if(ComputerMove==UserMove){        
        score.Draw+=1;
        // document.getElementById("p1").innerHTML="Draw";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else if(ComputerMove=="Scissor"){
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else{
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
        // document.getElementById("p1").innerHTML="Player Won";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }
}

function Random3(){
    var ComputerMove;
    var Max=100;
    const r = Math.floor(Math.random()*Max);
    console.log(r);
    // document.getElementById("p").innerHTML=r;
    if(r<=30){
        ComputerMove = "Rock";
    }else if(r<=75){
        ComputerMove = "Paper";
    }else{
        ComputerMove = "Scissor";
    }
    UserMove = "Scissor";

    if(ComputerMove==UserMove){
        score.Draw+=1;
        // document.getElementById("p1").innerHTML="Draw";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else if(ComputerMove=="Paper"){
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
        // document.getElementById("p1").innerHTML="Player Won";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else{
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
        alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }
}

localStorage.setItem('Score',JSON.stringify(score));

function Reset(){
    score.Win=0;
    score.Lost=0;
    score.Draw=0
    localStorage.removeItem('score')
    console.log(score.Win,score.Lost,score.Draw);
    document.getElementById('W').innerHTML = 0;
    document.getElementById('L').innerHTML = 0;
}


const product ={
    name:'shirt',
    ['delivery-time']:'5.52',
    rating:{
        stars:4.5,
        count:92
    },
    fun: function fun(){
        console.log("this is a function")
    }
}

console.log(product.fun())
