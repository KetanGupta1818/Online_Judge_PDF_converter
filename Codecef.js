document.querySelectorAll('a').forEach(el => el.remove())
var hh = document.getElementById('ember-root').children[0].children[2].children[0].children[1].children[0].children[0].children[0].innerHTML
var header_string = ""
for (var i = 1; i < hh.length; i++) {
    if (hh.charAt(i) == '\n') break;
    header_string = header_string + hh.charAt(i);
}
var v1 = document.getElementById('ember-root').children[0].children[2].children[0].children[2].children[0]
var arr = v1.getElementsByClassName("MathJax")
for (var i = 0; i < arr.length; i++) {
    arr[i].style.fontSize = "0.7em";
}
v1.removeChild(v1.children[v1.childElementCount - 2])
document.body.innerHTML = '<h1>' + header_string + '</h1>' + v1.innerHTML
window.print()
