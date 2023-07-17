let raw_heading = document.getElementsByClassName("col-sm-12")[1].getElementsByClassName("h2")[0].textContent;
let heading = "";
for(let i=8;i<100;i++){
    if(raw_heading[i] === '\n') break;
    heading = heading + raw_heading[i];
}
heading = " ".repeat(10) + heading;
let v1 = document.querySelectorAll('.lang-en')[0];
document.body.innerHTML = '<h1>' + heading + '</h1>' + v1.innerHTML
window.print()
