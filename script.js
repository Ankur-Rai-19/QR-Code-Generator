// QR API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

/** Creates a QR code image using the input text and displays it on the webpage.*/
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            encodeURIComponent(qrText.value); // Encode URL components
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
