function verificarTime() {
    // Variável para armazenar a resposta do usuário
    var respostaTime = prompt("Qual o melhor time? (Escreva Athlético PR)");
  
    // Verificar se a resposta é "Athlético PR"
    if (respostaTime.toLowerCase() === "athlético pr") {
      alert("Isso mesmo! O Athlético PR é o melhor time!");
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
  
  // Chamada da função para iniciar o processo
  verificarTime();
  
