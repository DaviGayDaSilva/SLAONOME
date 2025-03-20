function downloadText() {
    let text = document.getElementById("editor").value;
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "meutexto.txt";
    link.click();
}
