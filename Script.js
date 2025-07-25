// script.js

// Função para simular o clique no botão Pix e mostrar o QR code ou chave Pix
document.querySelectorAll('.btn-pix').forEach(button => {
  button.addEventListener('click', () => {
    const produto = button.getAttribute('data-produto');
    const valor = button.getAttribute('data-valor');
    const chavePix = '926346f5-d071-437b-872d-2b640c46a30c';

    alert(`Para comprar "${produto}" no valor de R$${valor}, envie o Pix para a chave:\n\n${chavePix}\n\nObrigado pela compra!`);
    // Aqui pode ser adicionada lógica para mostrar QR code dinamicamente ou redirecionar para página de pagamento
  });
});
