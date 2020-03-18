function main(){
	var n=new XMLHttpRequest();
	n.readystatechange(function(){
		if(this.readyState==4 && this.status==200){
			alert(n.responseText);
		}
	});
	n.open("GET","www.facebook.com",true);
	n.send();
}

var mod=document.querySelector('dialog')
var h=document.getElementById('about');
h.addEventListener('click',()=>{
	alert(2);
mod.showModal();
});