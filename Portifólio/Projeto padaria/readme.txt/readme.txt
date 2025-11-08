
PROJETO - PÃO QUENTINHO (VERSÃO 2.0)


Matheus

=====================================
VERSÃO 1.0 - ESTRUTURA INICIAL
=====================================

 O site foi criado como uma página única (single-page) com HTML, CSS e JavaScript.
 O código CSS foi incluído em uma tag <style> no <head>.
 O código JavaScript foi incluído em uma tag <script> no final do <body>.

=====================================
VERSÃO 2.0 - (RESPONSIVIDADE E EVENTOS)
=====================================

Esta atualização teve como foco organizar o código e aplicar os conceitos das práticas de Responsividade e Eventos de JavaScript.

1. Organização de Arquivos 

O projeto foi separado em arquivos distintos para seguir as boas práticas de "Separação de Preocupações" (Separation of Concerns).

`css/style.css`**: Todo o código CSS foi movido da tag `<style>` para este arquivo externo.
`js/main.js`**: Todo o código JavaScript foi movido da tag `<script>` para este arquivo externo.
`index.html`**: O HTML foi limpo, e agora apenas *linka* os arquivos CSS e JS externos.

 2. Prática de Responsividade (CSS)

O `style.css` foi atualizado para tornar o site adaptável a dispositivos móveis (tablets e celulares).

Meta Tag Viewport:** A tag `<meta name="viewport" ...>` foi adicionada ao `index.html`, o que é essencial para o design responsivo.
Remoção de Estilos Inline:** Estilos que estavam "presos" no HTML (como no card de contato) foram movidos para o CSS para que pudessem ser controlados.
Media Queries (`@media`)**: Foi adicionada uma nova `@media query` (para telas menores que 768px) que "empilha" elementos de duas colunas (como o card de contato e os campos do formulário) em uma única coluna, facilitando o uso em celulares.

 3. Prática de Interatividade e Eventos (CSS e JS)

Foram adicionados efeitos visuais e o JavaScript foi refatorado para seguir as melhores práticas de manipulação de eventos.

CSS (Interatividade):** Foram adicionados efeitos de `:hover` com `transition` e `transform` nos botões (`.cta`), nos cards de produto (`.menu-item`) e no botão flutuante do WhatsApp. Isso dá ao usuário um feedback visual imediato.
JavaScript (Eventos):**
    O evento `onsubmit` foi **removido** do HTML.
    O JavaScript agora usa `addEventListener('submit', ...)` para "ouvir" o envio do formulário. Esta é a maneira moderna e mais limpa de lidar com eventos.
     O script agora é "envolvido" por um `DOMContentLoaded`, que garante que o JavaScript só tente interagir com os elementos da página (como o formulário) *depois* que o HTML foi completamente carregado.