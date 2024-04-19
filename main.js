function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual os melhor time?");

    
    if (respostaTime.toLowerCase() === "Athlético PR") {
      alert("Isso mesmo! O Athlético PR é o melhor time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}