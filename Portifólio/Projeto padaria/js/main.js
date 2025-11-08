// Prática de Eventos: Espera o HTML carregar antes de rodar o JS
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Atualiza o ano no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();

    // Prática de Eventos: Pega o formulário
    const orderForm = document.getElementById('orderForm');
    
    // Prática de Eventos: Adiciona o evento 'submit' ao formulário
    // (Substitui o "onsubmit" que estava no HTML)
    orderForm.addEventListener('submit', handleOrder);

});


// Prática de Funções: Sua função de pedido (mantida como está)
function handleOrder(e){
    e.preventDefault(); // Prática de Eventos: previne o envio padrão
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const item = document.getElementById('item').value;
    const qty = Number(document.getElementById('qty').value);
    const notes = document.getElementById('notes').value.trim();

    const summary = `Pedido - Pão Quentinho\nNome: ${name}\nWhatsApp: ${phone}\nItem: ${item}\nQuantidade: ${qty}\nObservações: ${notes || '-'}\n\nObrigado!`;

    document.getElementById('summaryText').textContent = summary;
    document.getElementById('summary').style.display = 'block';

    // Prepara links
    const waText = encodeURIComponent(summary);
    const waLink = `https://wa.me/55${phone.replace(/\D/g,'')}?text=${waText}`;
    document.getElementById('waLink').href = waLink;

    const mailLink = `mailto:contato@paoquentinho.com?subject=${encodeURIComponent('Pedido: '+name)}&body=${encodeURIComponent(summary)}`;
    document.getElementById('mailLink').href = mailLink;

    return false;
}