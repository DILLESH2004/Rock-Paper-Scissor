// const d = "Dillesh";

// let Quantity = 0;
// function CartQuantity(){
//     console.log(Quantity);
//     document.getElementById("p").innerHTML=Quantity;
// }

// function Add_to_Cart(){
//     Quantity++;
//     document.getElementById("p").innerHTML=Quantity;
// }
// function Add_to_Cart2(){
//     Quantity += 2;
//     document.getElementById("p").innerHTML=Quantity;
// }

// function Clear(){
//     Quantity = 0;
//     document.getElementById("p").innerHTML=Quantity;
// }


const score={
    Win:0,
    Lost:0,
    Draw:0
}
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
        // document.getElementById("p1").innerHTML="Draw";
        score.Draw +=1;
    }else if(ComputerMove=="Paper"){
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
        // alert(`You Picked ${UserMove} Computer Picked ${ComputerMove}  Win:${score.Win} Lost : ${score.Lost} Draw: ${score.Draw}`);
    }else{
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
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
        // document.getElementById("p1").innerHTML="Draw";
    }else if(ComputerMove=="Scissor"){
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
    }else{
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
        // document.getElementById("p1").innerHTML="Player Won";
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
        // document.getElementById("p1").innerHTML="Draw";
    }else if(ComputerMove=="Paper"){
        score.Win+=1;
        document.getElementById("W").innerHTML = score.Win;
        // document.getElementById("p1").innerHTML="Player Won";
    }else{
        score.Lost +=1;
        document.getElementById("L").innerHTML = score.Lost;
        // document.getElementById("p1").innerHTML="Computer Won";
    }
}



obj={
    name:"dillesh",
    age:19
};
console.log(obj);
obj.name='bhagya';
console.log(obj);
obj.job = 'Developer';
console.log(obj);

delete obj.age;
console.log(obj);


function Reset(){
    score.Win=0;
    score.Lost=0;
    score.Draw=0
    console.log(score.Win,score.Lost,score.Draw);
    document.getElementById('W').innerHTML = 0;
    document.getElementById('L').innerHTML = 0;
}

