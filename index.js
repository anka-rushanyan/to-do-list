'use strict';



var myList = document.getElementsByTagName('LI');
var i;
	for (i = 0; i < myList.length; i++) {
 		var span = document.createElement('SPAN');
 		var txt = document.createTextNode('X');
 			span.className = 'close';
 			span.appendChild(txt);
			myList[i].appendChild(span);
            myList[i].onclick = function () {
     		this.classList.toggle('checked')
 }
}

var close = document.getElementsByClassName('close');
var i;
	for (i = 0; i < myList.length; i++) {
    	close[i].onclick = function() {
       	  var div = this.parentElement;
       		 div.style.display = 'none';
    }
}

function myFunc() {
	var li = document.createElement('li');
	var inp = document.getElementById('input').value;
	var val = document.createTextNode(inp);
		li.appendChild(val);
			if (inp === '') {
				alert('Write something please!');
		}
			else {
				document.getElementById('ul').appendChild(li);
		}
	var span = document.createElement('SPAN');
	var txt = document.createTextNode('X');
		span.className = 'close';
		span.appendChild(txt);
		li.appendChild(span);
			document.getElementById('input').value = '';
			li.onclick = function () {
			this.classList.toggle('checked')
	};
		for (i = 0; i < close.length; i++) {
			close[i].onclick = function() {
		var div = this.parentElement;
			div.style.display = "none";
		}
	}
}