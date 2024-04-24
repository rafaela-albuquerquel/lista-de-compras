document.addEventListener('DOMContentLoaded', function() {
    const novaListaBtn = document.getElementById('nova-lista');
    const listaCompras = document.getElementById('lista-compras');
    const nomeItemInput = document.getElementById('nome-item');
    const quantidadeItemInput = document.getElementById('quantidade-item');
    const notaItemInput = document.getElementById('nota-item');
    const adicionarItemBtn = document.getElementById('adicionar-item');
    const atualizarItemBtn = document.getElementById('atualizar-item');
    const removerItemBtn = document.getElementById('remover-item');

    // Função para adicionar um novo item à lista de compras
    function adicionarItem() {
        const nomeItem = nomeItemInput.value.trim();
        const quantidadeItem = quantidadeItemInput.value.trim();
        const notaItem = notaItemInput.value.trim();

        if (nomeItem === '') {
            alert('Por favor, insira o nome do item.');
            return;
        }

        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <span>${nomeItem}</span>
            <span>${quantidadeItem}</span>
            <span>${notaItem}</span>
            <button class="marcar-comprado">Marcar Comprado</button>
            <button class="editar-item">Editar</button>
            <button class="remover-item">Remover</button>
        `;

        listaCompras.appendChild(newItem);

        // Limpar campos de entrada após adicionar o item
        nomeItemInput.value = '';
        quantidadeItemInput.value = '';
        notaItemInput.value = '';
    }

    // Adicionar evento de clique ao botão "Adicionar Item"
    adicionarItemBtn.addEventListener('click', adicionarItem);

    // Adicionar evento de clique ao botão "Nova Lista"
    novaListaBtn.addEventListener('click', function() {
        listaCompras.innerHTML = '';
    });

    // Evento de clique delegado para marcar um item como comprado, editar ou remover
    listaCompras.addEventListener('click', function(event) {
        const target = event.target;
        const item = target.parentElement;

        if (target.classList.contains('marcar-comprado')) {
            item.classList.toggle('comprado');
        } else if (target.classList.contains('editar-item')) {
            nomeItemInput.value = item.children[0].textContent;
            quantidadeItemInput.value = item.children[1].textContent;
            notaItemInput.value = item.children[2].textContent;

            // Remover o item da lista enquanto edita
            item.remove();

            // Atualizar o botão para "Atualizar Item"
            adicionarItemBtn.style.display = 'none';
            atualizarItemBtn.style.display = 'inline-block';
            removerItemBtn.style.display = 'inline-block';
        } else if (target.classList.contains('remover-item')) {
            item.remove();
        }
    });

    // Função para atualizar um item editado na lista
    function atualizarItem() {
        adicionarItem();
        // Limpar campos de entrada após adicionar o item atualizado
        nomeItemInput.value = '';
        quantidadeItemInput.value = '';
        notaItemInput.value = '';

        // Restaurar os botões originais
        adicionarItemBtn.style.display = 'inline-block';
        atualizarItemBtn.style.display = 'none';
        removerItemBtn.style.display = 'none';
    }

    // Adicionar evento de clique ao botão "Atualizar Item"
    atualizarItemBtn.addEventListener('click', atualizarItem);

    // Adicionar evento de clique ao botão "Remover Item"
    removerItemBtn.addEventListener('click', function() {
        // Limpar campos de entrada após cancelar a atualização do item
        nomeItemInput.value = '';
        quantidadeItemInput.value = '';
        notaItemInput.value = '';

        // Restaurar os botões originais
        adicionarItemBtn.style.display = 'inline-block';
        atualizarItemBtn.style.display = 'none';
        removerItemBtn.style.display = 'none';
    });
});
