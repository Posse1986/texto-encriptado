const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".traduccion");

function btEncriptado() {
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(texto) {
    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (texto.includes(arrayCodigo[i][0])) {
            texto = texto.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return texto;
}

document.querySelector(".btn-encriptar").onclick = btEncriptado;

function btDesencriptado() {
    const textoDesencriptado = desencriptar(texArea.value);
    mensaje.value = textoDesencriptado;
    texArea.value = "";
}

function desencriptar(texto) {
    let arrayCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (texto.includes(arrayCodigo[i][0])) {
            texto = texto.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
        }
    }
    return texto;
}

document.querySelector(".btn-desencriptar").onclick = btDesencriptado;

function copiarTexto() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(mensaje.value)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert('Error al copiar: ' + err);
            });
    } else {
        alert("El navegador no soporta la API de clipboard.");
    }
}

document.querySelector(".copiar").onclick = copiarTexto;