const value=document.getElementById("Counter")

function increment() {
    let cur=parseInt(value.innerText);
    cur=cur+1;
    value.textContent=cur;
    
}
function decrement() {
    let cur=parseInt(value.innerText);
    cur=cur-1;
    value.textContent=cur;
    
}