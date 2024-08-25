document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.trim();
    if (inputText) {
        let encryptedText = encryptText(inputText);
        displayOutput(encryptedText);
        clearInput(); // Limpia el área de texto después de encriptar
    }
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.trim();
    if (inputText) {
        let decryptedText = decryptText(inputText);
        displayOutput(decryptedText);
        clearInput(); // Limpia el área de texto después de desencriptar
    }
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
        // Aquí NO pegamos automáticamente el texto en la caja de entrada.
    });
});

document.getElementById('input-text').addEventListener('input', function() {
    let inputText = this.value.trim();
    if (inputText === '') {
        resetOutput();
    }
});

function encryptText(text) {
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    return decryptedText;
}

function displayOutput(text) {
    let outputElement = document.getElementById('output-text');
    let instructionText = document.querySelector('.instruction-text');
    let imageElement = document.querySelector('.output-image');
    let copyButton = document.getElementById('copy-btn');

    if (text) {
        outputElement.innerText = text;
        instructionText.style.display = 'none';
        imageElement.style.display = 'none'; // Oculta la imagen
        copyButton.style.display = 'block'; // Muestra el botón "Copiar"
    } else {
        resetOutput();
    }
}

function clearInput() {
    document.getElementById('input-text').value = ''; // Limpia el área de texto
}

function resetOutput() {
    let outputElement = document.getElementById('output-text');
    let instructionText = document.querySelector('.instruction-text');
    let imageElement = document.querySelector('.output-image');
    let copyButton = document.getElementById('copy-btn');

    outputElement.innerText = 'Ningún mensaje fue encontrado';
    instructionText.style.display = 'block';
    imageElement.style.display = 'block'; // Muestra la imagen
    copyButton.style.display = 'none'; // Oculta el botón "Copiar"
}
