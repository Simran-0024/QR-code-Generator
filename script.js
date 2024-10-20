let qrbox= document.getElementById("qr-box");
let qrimage= document.getElementById("qr-image");
const input= document.getElementById("input-box").innerHTML;
let gen = document.querySelector("#gen");


function generateQR(){
  
    
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + 
    input.innerText;

}
gen.addEventListener("click", generateQR());

