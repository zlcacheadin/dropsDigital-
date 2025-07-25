// script.js

// Espera o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões Pix
    const buttons = document.querySelectorAll('.btn-pix');
    
    // Adiciona evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém os dados do produto
            const produto = this.getAttribute('data-produto');
            const valor = this.getAttribute('data-valor');
            
            // Chave Pix - ATENÇÃO: substitua pela sua chave real, mas NÃO suba para o GitHub!
            // Em produção, isso deve ser obtido de forma segura (ex: variável de ambiente, backend)
            const chavePix = 'SUA_CHAVE_PIX_AQUI';
            
            // Atualiza o conteúdo do modal
            document.getElementById('modal-produto').textContent = produto;
            document.getElementById('modal-valor').textContent = `R$ ${valor}`;
            document.getElementById('modal-chave').textContent = chavePix;
            
            // Exibe o modal
            document.getElementById('pix-modal').style.display = 'block';
        });
    });
    
    // Fecha o modal ao clicar no botão de fechar (×)
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('pix-modal').style.display = 'none';
    });
});
