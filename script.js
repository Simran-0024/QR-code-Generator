let qrbox= document.getElementById("qr-box");
let qrimage= document.getElementById("qr-image");
const input= document.getElementById("input-box");
let gen = document.querySelector("#gen");


gen.addEventListener("click", generateQR);
function generateQR() {
    const msg = input.value;
    if (msg) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + msg;
    }
    else {
        alert("Please enter text or a URL to generate a QR code.");
    }
}



