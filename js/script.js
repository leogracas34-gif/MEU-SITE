// Teste de conexão
console.log("O arquivo JS foi conectado com sucesso!");

// Exemplo: Adicionar ação ao botão de teste
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.btn-destaque');
   
    if(botao) {
        botao.addEventListener('click', (e) => {
            // Aqui você pode colocar o link do WhatsApp depois
            alert("Redirecionando para o WhatsApp de atendimento...");
        });
    }
});