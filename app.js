const form = document.getElementById('frm-prueba');

form.addEventListener('submit', enviarinfo);

function enviarinfo(event){
    event.preventDefault();
    console.log("funcionar", event);
    window.location.href= "index.html"
}