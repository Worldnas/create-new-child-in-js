var n=document.getElementById("text");
console.log(n.childNodes.length);

var myh=n.appendChild(document.createElement("h1"));
console.log(myh.childNodes.length);

myh.appendChild(document.createTextNode("hello"))
console.log(myh.childNodes.length);
myh.innerHTML="<a href=www.google.com>google</a>"

var f=document.createDocumentFragment();
var q=f.appendChild(document.createElement("h1"))
q.innerHTML="hello again"
n.insertBefore(q,n.firstChild)


var m=document.getElementsByTagName("ul")[0]
//while(m.childNodes.length)
//{}
	m.removeChild(m.firstChild)
	m.removeChild(m.lastChild)
	m.removeChild(m.firstChild)
	m.removeChild(m.lastChild)
