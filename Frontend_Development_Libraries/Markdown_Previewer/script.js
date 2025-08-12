const preview = () => {
    let editorText = document.getElementById("editor").value;
    let previewDiv = document.getElementById("preview");
    let convertedhtml = marked(editorText);
    previewDiv.innerHTML = convertedhtml;
};

const editor = document.getElementById("editor");
editor.addEventListener("input", preview);

preview();
