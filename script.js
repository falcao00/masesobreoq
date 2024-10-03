function getTitulo(){
    const dataAtual = new Date();
    const options = { timeZone: 'America/Sao_Paulo' };
    const dataHoraBrasil = dataAtual.toLocaleString('pt-BR', options);
    const titulo = document.getElementById("titulo-post").value;
    const data = document.getElementById("date-post").value;
    const text = document.getElementById("post-text").value;

    document.getElementById("preview-title").innerHTML = titulo;
    document.getElementById("preview-date").innerHTML = dataHoraBrasil;
    document.getElementById("preview-text").innerHTML = text;
    console.log(titulo);
    console.log(data);
    console.log(text);
    console.log(dataHoraBrasil);
}