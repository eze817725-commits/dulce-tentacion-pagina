(function(){
var f=document.getElementById("form-contacto");
if(!f)return;
var TEL="5493718441224",MAIL="eze817725@gmail.com";
f.addEventListener("click",function(e){
var b=e.target.closest("button[data-canal]");
if(!b)return;
if(!f.reportValidity())return;
var t="Hola, soy "+f.nombre.value+". Me interesa: "+f.producto.value+". "+f.mensaje.value;
if(b.dataset.canal==="whatsapp"){
window.open("https://wa.me/"+TEL+"?text="+encodeURIComponent(t),"_blank","noopener");
}else{
location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Consulta de "+f.nombre.value+" - Dulce Tentación")+"&body="+encodeURIComponent(t);
}
});
})();
