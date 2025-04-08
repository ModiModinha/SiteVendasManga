let carrinho = [];
const carrinhoSalvo = localStorage.getItem('carrinho');
if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
}
let produtos = [
    { nome: "Tokyo Ghoul RE 1", genero: "Ação", subgenero: "Terror", preco: "R$ 30,00", imagem: "img/TokyoGuruRE.jpg", id: 1 },
    { nome: "Sakura Card Captor 1", genero: "Fantasia", subgenero: "Romance", preco: "R$ 33,90", imagem: "img/SakuraCardCaptor1.jpg", id: 2 },
    { nome: "Neon Genesis Evangelion 1", genero: "Drama", subgenero: "Mecha", preco: "R$ 40,00", imagem: "img/Evangelion1.jpg", id: 3 },
    { nome: "Chainsaw Man 1", genero: "Ação", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/Chainsaw1.jpg", id: 4 },
    { nome: "Boa Noite Punpun 1", genero: "Drama", subgenero: "Slice of Life", preco: "R$ 40,00", imagem: "img/punpun1.jpg", id: 5 },
    { nome: "Banana Fish 1", genero: "Drama", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/bananafish1.jpg", id: 6 },
    { nome: "Soul Eater 1", genero: "Ação", subgenero: "Paranormal", preco: "R$ 40,00", imagem: "img/souleater1.jpg", id: 6 },
    { nome: "Dungeon Meshi 1", genero: "Fantasia", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/dungeonmeshi1.jpg", id: 6 },
    { nome: "Burn The Witch 1", genero: "Fantasia", subgenero: "Ação", preco: "R$ 40,00", imagem: "img/burnthewitch1.jpg", id: 6 },
    { nome: "O Cara Que Estou Afim Não É Um Cara 1", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/ocara1.jpg", id: 6 },
    { nome: "Komi-san Não Consegue Se Comunicar 1", genero: "Slice of Life", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/komisan.jpg", id: 6 },
    { nome: "Minha Adoravel Cosplayer 1", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/sono1.jpg", id: 6 }
];

// Função para normalizar os gêneros
function normalizarGenero(genero) {
    const generosNormalizados = {
        'Ação': 'acao',
        'Acao': 'acao', 
        'Slice of Life' : 'sliceoflife' // Mapeia ambas variações para o mesmo ID
    };
    return generosNormalizados[genero] || genero.toLowerCase();
}


function carregarProdutos() {
    // 1. Carrega todos os produtos
    renderizarProdutos(produtos, 'produtos-container');
    
    // 2. Identifica todos os gêneros únicos
    const generosUnicos = [...new Set(produtos.map(p => p.genero))];
    
    // 3. Para cada gênero, filtra e renderiza os produtos
    generosUnicos.forEach(genero => {
        const produtosFiltrados = produtos.filter(p => p.genero === genero);
        const containerId = `produtos-${normalizarGenero(genero)}`;
        renderizarProdutos(produtosFiltrados, containerId);
    });
}

function renderizarProdutos(listaProdutos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container não encontrado: ${containerId}`);
        return;
    }
    
    container.innerHTML = '';

    listaProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${produto.imagem}" alt="${produto.nome}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text"><small>${produto.genero} / ${produto.subgenero}</small></p>
                    <p class="card-text">${produto.preco}</p>
                    <button class="btn btn-dark" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const produtoNoCarrinho = carrinho.find(p => p.id === produtoId);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
    atualizarContadorCarrinho();
}

function atualizarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-container');
    const totalPriceElement = document.getElementById('total-price');
    carrinhoContainer.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = `
            <div class="carrinho-vazio">
                <i>🛒</i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        totalPriceElement.textContent = '0.00';
        return;

    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    let total = 0;

    carrinho.forEach(item => {
        const precoNumerico = parseFloat(item.preco.replace("R$ ", "").replace(",", "."));
        total += precoNumerico * item.quantidade;

        const itemElement = document.createElement('div');
        itemElement.classList.add('carrinho-item');
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="carrinho-item-img">
            <div class="carrinho-item-info">
                <h5 class="carrinho-item-nome">${item.nome}</h5>
                <p class="carrinho-item-preco">${item.preco}</p>
                <div class="carrinho-item-quantidade">
                   <button onclick="alterarQuantidade(${item.id}, -1, event)">-</button><span>${item.quantidade}</span>
                   <button onclick="alterarQuantidade(${item.id}, 1, event)">+</button>
                </div>
                <button class="carrinho-item-remover" onclick="removerProduto(${item.id}, event)">Remover</button>
            </div>
        `;
        carrinhoContainer.appendChild(itemElement);
    });

    totalPriceElement.textContent = total.toFixed(2);

    if (carrinho.length === 0) {
        localStorage.removeItem('carrinho');
    } else {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
}


function alterarQuantidade(produtoId, quantidade, event) {
    event.stopPropagation();  // Impede que o clique se propague e feche o carrinho
    const produto = carrinho.find(p => p.id === produtoId);
    
    if (produto) {
        produto.quantidade += quantidade;

        if (produto.quantidade <= 0) {
            removerProduto(produtoId, event);  // Remove o produto se a quantidade for 0 ou menos
        } else {
            atualizarCarrinho();  // Atualiza a visualização do carrinho
            atualizarContadorCarrinho(); // Atualiza o contador
            localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
        }
    }
}


function removerProduto(produtoId, event) {
    event.stopPropagation();
    carrinho = carrinho.filter(p => p.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // <-- ESSENCIAL
    atualizarCarrinho();
    atualizarContadorCarrinho();
}



// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const cartCount = document.getElementById('cart-count');
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    cartCount.textContent = totalItens;
}

// Funções de abrir/fechar
function abrirCarrinho() {
    document.getElementById('carrinho').classList.add('aberto');
    document.body.style.overflow = 'hidden'; // Bloqueia scroll da página
    atualizarCarrinho();
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('aberto');
    document.body.style.overflow = ''; // Libera scroll da página
}

// Event listener para fechar clicando fora
document.addEventListener('click', function(event) {
    const carrinho = document.getElementById('carrinho');
    const alvo = event.target;
    
    // Verifica se:
    // 1. Carrinho está aberto
    // 2. Clique foi fora do carrinho
    // 3. Não foi no ícone do carrinho
    // 4. Não foi no botão de fechar
    // 5. Não foi em qualquer um dos botões de ação dentro do carrinho
    if (carrinho.classList.contains('aberto') &&
        !carrinho.contains(alvo) &&
        !alvo.closest('.cart-icon') &&
        !alvo.closest('.btn-fechar-carrinho') &&
        !alvo.closest('.carrinho-item') // impede o fechamento ao clicar em itens dentro do carrinho
    ) {
        fecharCarrinho();
    }
});



let slideIndex = 0;
let intervaloCarrossel;

// Inicia o carrossel automático
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carrossel-slide');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let intervaloCarrossel;

    // Função para mostrar slide específico
    function mostrarSlide(n) {
        // Esconde todos os slides
        slides.forEach(slide => {
            slide.classList.remove('ativo');
        });
        
        // Remove classe ativo dos indicadores
        indicadores.forEach(ind => {
            ind.classList.remove('ativo');
        });
        
        // Atualiza índice do slide
        slideIndex = n;
        
        // Volta para o primeiro slide se chegar no final
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        
        // Vai para o último slide se voltar do primeiro
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        // Mostra slide atual
        slides[slideIndex].classList.add('ativo');
        indicadores[slideIndex].classList.add('ativo');
    }

    // Avança para o próximo slide
    function proximoSlide() {
        mostrarSlide(slideIndex + 1);
    }

    // Inicia o carrossel automático
    function iniciarCarrossel() {
        intervaloCarrossel = setInterval(proximoSlide, 5000);
    }

    // Event listeners para os botões
    btnAnterior.addEventListener('click', () => {
        mostrarSlide(slideIndex - 1);
        reiniciarIntervalo();
    });

    btnProximo.addEventListener('click', () => {
        proximoSlide();
        reiniciarIntervalo();
    });

    // Event listeners para os indicadores
    indicadores.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            mostrarSlide(index);
            reiniciarIntervalo();
        });
    });

    // Reinicia o intervalo quando o usuário interage
    function reiniciarIntervalo() {
        clearInterval(intervaloCarrossel);
        iniciarCarrossel();
    }

    // Inicia o carrossel
    iniciarCarrossel();
    
    // Pausa quando o mouse está sobre o carrossel
    const carrossel = document.querySelector('.carrossel-container');
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(intervaloCarrossel);
    });
    
    carrossel.addEventListener('mouseleave', iniciarCarrossel);
});

// Carregar os produtos quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarProdutos);
if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    atualizarCarrinho();
    atualizarContadorCarrinho();
}


