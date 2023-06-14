
document.querySelector(".credit").oninput=()=>{
    document.querySelector(".card-type").innerText=document.querySelector('.credit').value;
}
document.querySelector(".debit").oninput=()=>{
    document.querySelector(".card-type").innerText=document.querySelector('.debit').value;
}

document.querySelector(".cardNumber_Input").oninput=()=>{
    document.querySelector(".cardNumber").innerText=document.querySelector('.cardNumber_Input').value;
}


document.querySelector(".cardHolder_input").oninput=()=>{
    document.querySelector(".name").innerText=document.querySelector('.cardHolder_input').value;
}

document.querySelector(".monthInput").oninput=()=>{
    document.querySelector(".expMonth").innerText=document.querySelector(".monthInput").value;
}   

document.querySelector(".yearInput").oninput=()=>{
    document.querySelector(".expYear").innerText=document.querySelector('.yearInput').value;
}


document.querySelector(".cvv_input").onmouseenter=()=>{
    document.querySelector(".front").style.transform= 'perspective(1000px) rotateY(-180deg)';
    document.querySelector(".back").style.transform= 'perspective(1000px) rotateY(0deg)';
}
document.querySelector(".cvv_input").onmouseleave=()=>{
    document.querySelector(".front").style.transform= 'perspective(1000px) rotateY(0deg)';
    document.querySelector(".back").style.transform= 'perspective(1000px) rotateY(180deg)';
}

document.querySelector(".cvv_input").oninput=()=>{
    document.querySelector(".cvv_number").innerText=document.querySelector('.cvv_input').value;
}
document.querySelector('.month_input').oninput=()=>{
    
}