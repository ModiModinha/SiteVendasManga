let carrinho = [];
const carrinhoSalvo = localStorage.getItem('carrinho');
if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    
}
let produtos = [    
    { nome: "Tokyo Ghoul RE 1", genero: "Ação", subgenero: "Terror", preco: "R$ 30,00", imagem: "img/TokyoGuruRE.jpg", descricao:"Os ghouls se misturam à multidão e devoram a carne das pessoas. Aparentam ser humanos, mas são criaturas diferentes.O CCG, que estuda e extermina os ghouls, estabeleceu recentemente um grupo experimental para cumprir uma certa tarefa. Seu nome é 'Quinx'. O que o investigador de primeira classe Haise Sasaki enfrentará em Tokyo com essas 'pessoas anormais'?", 
        id: 1, autor: "Sui Ishida", nota: 4.5 },
    { nome: "Sakura Card Captor 1", genero: "Fantasia", subgenero: "Romance", preco: "R$ 33,90", imagem: "img/SakuraCardCaptor1.jpg", descricao:"Sakura Kinomoto é uma alegre garota que estuda na Escola Tomoeda, e está no 4º ano. Ela é um pouco dorminhoca, e todos os dias acorda atrasada para ir à escola. Por isso, acaba sempre levando umas boas broncas de seu irmão mais velho, Toya. Apesar disso, Sakura sai junto com ele para a escola só para ver Yukito, o amigo bonzinho de Toya, e por quem ela está apaixonada, aiaiai… O que ninguém sabe é que Sakura tem uma missão muito importante. Ela deve reunir todas as Cartas Clow, cartas com um poder mágico enorme criadas pelo mago Clow Lead, e que vão espalhar maldades pelo mundo! Para isso, ela conta com a ajuda de Kerberos, o Kero, guardião do livro que continha as cartas; e de sua melhor amiga, Tomoyo, que faz roupas superdescoladas para ela. Quais serão as aventuras e perigos que Sakura irá enfrentar a partir de agora?",
         id: 2, autor: "CLAMP", nota: 4.7 },
    { nome: "Neon Genesis Evangelion 1", genero: "Drama", subgenero: "Mecha", preco: "R$ 40,00", imagem: "img/Evangelion1.jpg", descricao:"Uma trama complexa, que aborda temas profundos como a psique humana, seus conflitos internos e relacionamentos. Shinji Ikari, um jovem de 14 anos carente de afeto e desprovido de amor próprio, de repente, é chamado por seu pai - com quem nunca teve contato - a comparecer à NERV para pilotar bio-robôs de combate, gigantes - os EVAS - e assim salvar o mundo de misteriosos seres denominados 'Anjos', os quais ninguém sabe ao certo se são enviads de Deus para castigar a humanidade ou alienígenas invasores. Apesar de contrariado, ele se torna piloto do Evangelion - uma arma de combate humanoide. A luta contra os 'Anjos', inimigos desconhecidos, causa medo e tensão, mas, ao mesmo tempo, desperta algo nele que o faz se abrir para as relações humanas à sua volta. Contudo, quando lê algumas anotações de sua supervisora Misato a seu respeito, Shinji se fecha novamente em sua carcaça e acaba fugindo da NERV.", 
        id: 3, autor: "Yoshiyuki Sadamoto", nota: 4.8 },
    { nome: "Chainsaw Man 1", genero: "Ação", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/Chainsaw1.jpg", descricao:"Denji é um jovem extremamente pobre que junto de Pochita, seu demônio de estimação, trabalha feito um condenado como Caçador de Demônios para pagar a imensa dívida que possui. Mas sua vida de miséria está prestes a mudar graças a uma traição brutal!! Aqui começa a história de um novo anti-herói que com um demônio em seu corpo, caça demônios!!", 
        id: 4, autor: "Tatsuki Fujimoto", nota: 4.9 },
    { nome: "Boa Noite Punpun 1", genero: "Drama", subgenero: "Slice of Life", preco: "R$ 40,00", imagem: "img/punpun1.jpg", descricao:"Punpun Onodera é um garoto normal, que vive feliz com sua família. Um dia, Aiko Tanaka é transferida para a sua escola. Foi paixão à primeira vista!! Voltando juntos para casa, ela conta que no futuro, 'a Terra vai se tornar um planeta inabitável'. É nessa hora que Punpun decide ser um cientista espacial. Porém, bem quando encontra seu objetivo na vida, a sua realidade começa a desmoronar. Considerado por muitos como a obra-prima do aclamado Inio Asano, Boa Noite Punpun é um slice of life que trata de temas delicados como solidão, relações familiares conturbadas e depressão.", 
        id: 5, autor: "Inio Asano", nota: 4.6 },
    { nome: "Banana Fish 1", genero: "Drama", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/bananafish1.jpg", descricao:"Vietnã, 1973. Um soldado americano sofreu um repentino distúrbio mental e proferiu apenas as seguintes palavras: 'bananafish'. Nova Iorque, 1985. Ash tenta descobrir o significado desse misterioso termo enquanto a sombra sinistra de Papa Dino, o chefe do submundo, se aproxima dele.!!",
         id: 6, autor: "Akimi Yoshida", nota: 4.7 },
    { nome: "Soul Eater Perferct Edition 1", genero: "Ação", subgenero: "Paranormal", preco: "R$ 40,00", imagem: "img/souleater1.jpg", descricao:"Na escola Shibusen, localizada no estado americano de Nevada, munidos de suas respectivas armas, as artesãs e os artesãos Maka Albarn e Soul Eater Evans; Black Star e Tsubaki Nakatsukasa; e Death the Kid, Patti Thompson e Lizzy Thompsoncriada lutam para eliminar os Ovos de Kishins, seres que usam a alma de humanos para se tornarem mais poderosos, e bruxas que vivem aterrorizando o mundo.", 
        id: 7, autor: "Atsushi Ohkubo", nota: 4.5 },
    { nome: "Dungeon Meshi 1", genero: "Fantasia", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/dungeonmeshi1.jpg", descricao:"Você não perde por esperar, dragão!! Eu vou fazer bife de você!!Depois de serem atacados por um dragão, o grupo do aventureiro Laios acaba perdendo todo seu dinheiro e provisões. Assim, mesmo que o grupo tente adentrar novamente o calabouço, é certo que eles morrerão de fome... Diante dessa situação, Laios acaba ter uma ideia: Comer os monstros pelo caminho, desde slimes até dragões!!Aqui começa uma aventura pelos calabouços e seus ferozes e deliciosos monstros!!", 
        id: 8, autor: "Ryuoko Kui", nota: 4.8 },
    { nome: "Burn The Witch 1", genero: "Fantasia", subgenero: "Ação", preco: "R$ 40,00", imagem: "img/burnthewitch1.jpg", descricao:"Dragões são criaturas fantásticas mencionadas desde a antiguidade. Mas na verdade eles não são nem 'fantásticas', e nem 'criaturas'. São seres monstruosos, ligados às causas de muitas mortes em Londres e que os cidadãos comuns não conseguem enxergar, muito menos sabem que existem. Porém, do lado reverso de Londres existe uma outra cidade. Lá os Dragões existem de verdade e podem ajudar na vida das pessoas, fornecendo energia e servindo de meio de transporte. Mas alguns causam problemas aos humanos, e para controlar a população de dragões existe a Wing Bind, uma organização que tem a missão de observar e proteger Londres.", 
        id: 9, autor: "Tite Kubo", nota: 4.3 },
    { nome: "O Cara Que Estou Afim Não É Um Cara 1", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/ocara1.jpg", descricao:"Aya é uma garota do ensino médio que está muito interessada em um 'moço' misterioso que trabalha em uma loja de CDs. Porém, esse rapaz misterioso na verdade era Mitsuki, sua colega de classe que tenta viver invisível como o ar. Um amor que se desenvolve com rapidez, a partir de um encontro impossível e caminha para...", 
        id: 10, autor: "Umi Shiina", nota: 4.2 },
    { nome: "Komi-san Não Consegue Se Comunicar 1", genero: "Slice of Life", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/komisan.jpg", descricao:"E começa a jornada em busca das 100 amizades! O sonho da estudante socialmente ansiosa Komi Shouko é fazer alguns amigos, mas todos na escola confundem sua ansiedade social paralisante como uma personalidade descolada! Com a distância de todos os alunos e a incapacidade de Komi para se comunicar, amizades parecem sempre estar fora de seu alcance.", 
        id: 11, autor: "Tomohito Oda", nota: 4.6 },
    { nome: "Minha Adoravel Cosplayer 1", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/sono1.jpg", descricao:"Relacionamento secreto com a popular da turma...? Marin é uma garota bonita e popular que está sempre no centro da sua roda de amigas. Wakana Gojo, seu colega de classe, acreditava que os dois viviam em mundos diferentes. Ele sonha em se tornar um especialista em cabeças de bonecas hina e, certo dia, quando trabalhava na sala de costura depois da aula, é surpreendido por… ninguém menos que…?! 'Você não faria meus cosplays…?!' Tem início a emocionante vida escolar e de cosplay desses dois!!", 
        id: 12, autor: "Shinichi Fukuda", nota: 4.4 },
    { nome: "Tokyo Ghoul RE 11", genero: "Ação", subgenero: "Terror", preco: "R$ 30,00", imagem: "img/TokyoGuruRE11.jpg", descricao:"Ataques simultâneos ocorrem em filiais do CCG por um grupo usando máscaras de palhaços. Nimura Furuta, controlado pelos 'Palhaços', gradualmente faz o que quer no CCG. Os Quinx, que tiveram Haise Sasaki como mentor, não escondem a hesitação ao saber das ações da Goat, liderada por Ken Kaneki. Enquanto tentam transformar as bases do relacionamento entre os 'humanos' e os 'ghouls', o que é esperado do 'Rei Um-Olho'?",
         id: 13, autor: "Sui Ishida", nota: 4.7 },
    { nome: "Neon Genesis Evangelion 4", genero: "Drama", subgenero: "Mecha", preco: "R$ 40,00", imagem: "img/Evangelion4.jpg", descricao:"Depois do acidente que ocorreu durante a batalha contra o último Anjo, Shinji está decidido a nunca mais pilotar um Eva e confronta seu pai. Porém, enquanto Asuka e Rei enfrentam um novo e poderoso inimigo, o garoto fica sabendo mais a fundo sobre o que foi o Segundo Impacto. Já nos bastidores, uma batalha de poder se desenrola ao mesmo tempo que a origem na NERV é revelada.",
         id: 14, autor: "Yoshiyuki Sadamoto", nota: 4.8 },
    { nome: "Neon Genesis Evangelion 7", genero: "Drama", subgenero: "Mecha", preco: "R$ 40,00", imagem: "img/Evangelion7.jpg", descricao:"É chega a hora da batalha final contra os Anjos. E também é chegada hora de Shinji superar seus traumas e medos e mostrar o seu verdadeiro valor. Enquanto uma luta épica se desenrola, nos bastidores os chefões da SEELE seguem no encalço de Gendo Ikari, o pai de Shinji e aquele que usou sua posição dentro da NERV para alcançar seus objetivos pessoais. Adão, EVA, Anjos e seres humanos eclodem em um final emocionante onde muitas perguntas são respondidas ao mesmo tempo que surgem novas", 
        id: 15, autor: "Yoshiyuki Sadamoto", nota: 4.9 },
    { nome: "Tokyo Ghoul RE 16", genero: "Ação", subgenero: "Terror", preco: "R$ 30,00", imagem: "img/TokyoGuruRE16.jpg", descricao:"'Não quero mais ficar sem fazer nada.' O processo de ghoulificação da humanidade avança em Tokyo. Para eliminar a origem da 'toxina', o CCG e os ghouls unem forças e Kaneki e Ayato vão para o subterrâneo do Distrito 24. Quem os espera lá é Nimura Furuta. O que Kaneki deseja ao ver diante de seus olhos a 'causa' de ter se tornado um ghoul? E qual será o destino de Tokyo e dos ghouls", 
        id: 16, autor: "Sui Ishida", nota: 4.8 },
    { nome: "Minha Adoravel Cosplayer 4", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/sono4.jpg", descricao:"Os preparativos para a sessão de Marin e Juju estão avançando… e as roupas enfim ficaram prontas!! Agora só falta o ensaio… ou faltaria, porque Wakana tem um plano que está escondendo das duas…!Sentimentos fortes por aquilo que se gosta e se dá valor é o que motiva cada um…!!",
         id: 17, autor: "Shinichi Fukuda", nota: 4.5 },
    { nome: "Banana Fish 10", genero: "Drama", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/bananafish10.jpg", descricao:"Finalmente, a batalha chegou à sua conclusão. Dino desapareceu no meio das chamas e Blanca partiu para o Caribe. Todos aqueles acontecimentos ficaram para trás e dias pacíficos estavam por vir àqueles que sobreviveram. Aproxima-se o dia em que Eiji receberá alta do hospital e voltará ao Japão. No entanto, Ash decide dar adeus a ele... Neste volume, também serão publicados capítulos especiais contando o passado de alguns dos personagens.", 
        id: 18, autor: "Akimi Yoshida", nota: 4.9 },
    { nome: "Boa Noite Punpun 5", genero: "Drama", subgenero: "Slice of Life", preco: "R$ 40,00", imagem: "img/punpun5.jpg", descricao:"Ao encontrar a felicidade, Punpun finalmente acha o seu lugar. Nessa hora, um incidente e o reencontro com uma certa pessoa fazem a vida do jovem entrar em colapso mais uma vez, e sua alegria começa a ruir aos poucos…",
         id: 19, autor: "Inio Asano", nota: 4.7 },
    { nome: "Dungeon Meshi 4", genero: "Fantasia", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/dungeonmeshi4.jpg", descricao:"Chegou a hora da grande batalha!! Derrotem o Dragão Vermelho!!Laios e seu grupo finalmente chegam ao quinto andar subterrâneo, a morada do Dragão Vermelho! Diante deste oponente formidável, capaz de repelir todo tipo de ataque com suas escamas escarlates e transformar tudo em cinzas com suas chamas, Laios decide apostar sua vida em um plano ousado...! Conseguirá nosso herói salvar a sua irmãzinha Falin? Será possível comer carne de dragão?!Este é o quarto e intenso volume dessa fantasia faminta pelos calabouços!!", 
        id: 20, autor: "Ryuoko Kui", nota: 4.8 },
    { nome: "Chainsaw Man 5", genero: "Ação", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/Chainsaw5.jpg", descricao:"Aki está prestes a enfrentar o Demônio que era usado por Himeno. O que será que está se passando na mente desse jovem que anseia por vingança?! Enquanto isso, Denji enfrenta novamente o Samurai Sword!! Quem sairá vitorioso desta batalha sanguinolenta entre motosserra e katana?! O confronto pelo coração de Denji toma rumos inesperados!!", 
        id: 21, autor: "Tatsuki Fujimoto", nota: 4.9 },
    { nome: "Sakura Card Captor 6", genero: "Fantasia", subgenero: "Romance", preco: "R$ 33,90", imagem: "img/SakuraCardCaptor6.jpg", descricao:"Voltando da escola, Sakura é atacada por um terrível fogo! É mais uma Carta Clow que precisa ser selada, e com ela, Kero retorna à sua forma normal. Ainda falta uma carta para Sakura reunir todas as Cartas Clow, e quando isso acontecer, o Juízo Final terá início. Mas, o Juiz que irá pôr a Card Captor à prova é…?!",
         id: 22, autor: "CLAMP", nota: 4.7 },
    { nome: "Soul Eater Perferct Edition 5", genero: "Ação", subgenero: "Paranormal", preco: "R$ 40,00", imagem: "img/souleater5.jpg", descricao:"Após permitir a libertação do Kissin, que estava selado nas profundezas da AMAAN, Doutor Morte decide reunir na Death City as suas sete armas espalhadas pelo mundo, as Death Scythes, como força de contenção da Insanidade propagada com a ressurreição do Kissin.Uma das Death Scythes, Azusa, percebe uma anormalidade na República Checa envolvendo os golens, e o Doutor Morte pede para que Maka e outros levem Crona até lá como uma aula extracurricular da AMAAN, com a finalidade de descobrir o que está acontecendo.A princípio, golens são feitos para não terem capacidades bélicas, mas ao chegarem no local, Maka e outros terão de enfrentar o golem mais antigo do mundo.",
         id: 23, autor: "Atsushi Ohkubo", nota: 4.6 },
    { nome: "Komi-san Não Consegue Se Comunicar 11", genero: "Slice of Life", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/komisan11.jpg", descricao:"É Golden Week, e Komi-san está numa viagem em família. Lá, eis que ela encontra a família de Tadano-kun e Najimi-chan... Todos passam agradáveis momentos juntos. À noite, enquanto caminha com Tadano-kun para ver as estrelas, uma chuva repentina faz com que os dois corram para se abrigar em uma cabana nas montanhas. Ambos querem ceder o único cobertor disponível para que o outro não passe frio. Essa cortesia difícil de pôr em palavras e causadora de muito acanhamento vai tecendo a 'comunicação' entre os dois.A gentil consideração para com o outro e o calor do afeto são evidenciados no 11º volume da cômica história da beldade que não consegue se comunicar.", 
        id: 24, autor: "Tomohito Oda", nota: 4.7 },
    { nome: "Banana Fish 4", genero: "Drama", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/bananafish4.jpg", descricao:"Ash tem um breve momento de paz junto de Eiji em Manhattan. No entanto, mesmo durante esse período, Arthur e seus capangas continuam incansavelmente no seu encalço. Devido ao plano de Dino, Ash passou a ser procurado até pela polícia. Será que ele conseguirá realizar um contra-ataque...?!", 
        id: 25, autor: "Akimi Yoshida", nota: 4.6 },
    { nome: "Sakura Card Captor 3", genero: "Fantasia", subgenero: "Romance", preco: "R$ 33,90", imagem: "img/SakuraCardCaptor3.jpg", descricao:"Aiaiaiaiai! Problemas à vista, Sakura! Alguém está se fazendo passar pela meiga garotinha e aprontando todas na cidade! Será mais uma Carta Clow?! Seja quem for, Sakura precisará descobrir logo, pois este ser misterioso está armando algo contra Touya!!! Mas nem tudo é problemas na vida de Sakura, pois ela vai aproveitar uma tarde na casa da Tomoyo para saber um pouquinho mais sobre o passado de seus pais. E uma nova professora começa a dar aulas na escola… mas, ela já conhece Touya?! E por que o Shoran fica tão esquisito na presença da professora Mizuki, hein??", 
        id: 26, autor: "CLAMP", nota: 4.6 },
    { nome: "Soul Eater Perferct Edition 7", genero: "Ação", subgenero: "Paranormal", preco: "R$ 40,00", imagem: "img/souleater7.jpg", descricao:"Experimente as aventuras peculiares e cheias de ação de Maka e Soul Eater como nunca antes, com esta nova e luxuosa edição de colecionador para celebrar o sucesso global de Atsushi Ohkubo!Cabe a Maka, BlackStar e Kid proteger o Demon Tool BREW, mas sincronizar comprimentos de onda é difícil na melhor das hipóteses! Será que esses três Meisters únicos conseguirão alcançar a harmonia um com o outro quando o Mosquito estender atrás deles?!Meisters e suas armas assumem um visual totalmente novo no lindo Soul Eater: Perfect Edition!Mergulhe nas aventuras de Maka e Soul em um formato maior exclusivo em papel de alta qualidade que maximiza a arte dinâmica da série!", 
        id: 27, autor: "Atsushi Ohkubo", nota: 4.7 },
    { nome: "Chainsaw Man 3", genero: "Ação", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/Chainsaw3.jpg", descricao:"Um demônio misterioso prende todos os integrantes da 4ª Divisão Especial Antidemônios da Segurança Pública e exige que Denji seja morto!! Encurralados nessa situação desesperadora, parte dos Caçadores de Demônios concorda aceitar a proposta dele...! Entretanto, pensando no beijo que vai ganhar de recompensa, Denji tem uma ideia incrivelmente macabra!! A engenhosidade humanamente demoníaca de nosso protagonista entra em ação com tudo!!", 
        id: 28, autor: "Tatsuki Fujimoto", nota: 4.8 },
    { nome: "Boa Noite Punpun 7", genero: "Drama", subgenero: "Slice of Life", preco: "R$ 40,00", imagem: "img/punpun7.jpg", descricao:"Punpun e Aiko abandonam tudo e fogem para outra cidade. Qual o destino reservado para o casal que apenas quer ser feliz? Eis o volume final de Boa Noite Punpun.", 
        id: 29, autor: "Inio Asano", nota: 4.9 },
    { nome: "Dungeon Meshi 4", genero: "Fantasia", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/dungeonmeshi11.jpg", descricao:"'Posso realizar o seu desejo?'Thistle, o Senhor do Calabouço, conjura diversos dragões lendários e dá uma demonstração de todo o seu poder! Depois de perder seus companheiros, Laios se vê sozinho em uma situação desesperadora e terá que usar todo o seu conhecimento sobre monstros para encarar essa batalha final. Mas será que ele terá sucesso?!Enquanto isso, os Canários seguem avançando para as profundezas do calabouço querendo selar o demônio e estão cada vez mais perto de Laios e seu grupo!Este volume é um verdadeiro turbilhão de desejos humanos!!",
         id: 30, autor: "Ryuoko Kui", nota: 4.8 },
    { nome: "Komi-san Não Consegue Se Comunicar 25", genero: "Slice of Life", subgenero: "Comédia", preco: "R$ 40,00", imagem: "img/komisan25.jpg", descricao:"Estamos no terceiro ano!Komi-san caiu com Tadano-kun e Najimi na turma 1.Mas, a começar pela Manbagi-san, ela se separou de seus amigos da turma 1 do segundo ano, e as coisas têm um começo levemente preocupante?Na companhia de seus colegas de turma um tanto invocados e com problemas comunicativos, ela participa de um 'battle royale' de ano contra ano. E, no meio desse dia atípico, se conecta com…Assim começa o último ano de colegial, com vislumbres de dois anos de progresso.A comédia da beldade com problemas comunicativos chega ao seu 25º volume na esperança de saborear esse último ano.",
         id: 31, autor: "Tomohito Oda", nota: 4.7 },
    { nome: "Minha Adoravel Cosplayer 7", genero: "Slice of Life", subgenero: "Romance", preco: "R$ 40,00", imagem: "img/sono7.jpg", descricao:"'Gojo-kun e Marin, vocês estão namorando?!'Como os dois responderam à provocação de Nowa, sua perspicaz colega de classe…?!É a estação do festival cultural! Um evento tem início na escola de Marin e Wakana, e agora ela terá que fazer cosplay na escola!! E, ainda por cima, será a primeira vez que…?", 
        id: 32, autor: "Shinichi Fukuda", nota: 4.6 },
    { nome: "Tomie Complete Deluxe Edition", genero: "Terror", subgenero: "Suspense", preco: "R$ 40,00", imagem: "img/Tomie.jpg", descricao:"Por trás de um rosto fascinante, realçado por uma única pinta debaixo do olho esquerdo, esconde-se um mal terrível. Um mal sedutor, capaz de enfeitiçar os homens e levá-los a cometer o mais hediondo dos atos: o assassinato. Mas como explicar o fato macabro de que a vítima desse instinto homicida é a própria Tomie? Eles a matam, matam e matam, mas o mundo nunca estará livre de Tomie.",
        id: 33, autor: "Junji Ito", nota: 4.9 }
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
                    <a href="produto.html?id=${produto.id}" class="btn btn-outline-danger ">Mais detalhes</a>
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


//Barra de pesquisa
function filtrarProdutos(termo) {
    termo = termo.toLowerCase().trim();
    
    // Mostra todos os containers de gênero
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.style.display = '';
    });
    
    if (!termo) {
        // Se a pesquisa estiver vazia, mostra todos os produtos normalmente
        carregarProdutos();
        return;
    }
    
    // Filtra os produtos
    const produtosFiltrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termo)
    );
    
    // Esconde todas as tabs de gênero
    document.querySelectorAll('.tab-pane:not(#todos)').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Renderiza os produtos filtrados na tab "todos"
    renderizarProdutos(produtosFiltrados, 'produtos-container');
    
    // Atualiza os containers de gênero para os produtos filtrados
    const generosUnicos = [...new Set(produtosFiltrados.map(p => p.genero))];
    
    generosUnicos.forEach(genero => {
        const produtosGenero = produtosFiltrados.filter(p => p.genero === genero);
        const containerId = `produtos-${normalizarGenero(genero)}`;
        renderizarProdutos(produtosGenero, containerId);
    });
    
    // Ativa a tab "todos" automaticamente
    document.querySelector('#todos-tab').click();
}

// Modifique a função carregarProdutos para garantir que sempre mostre os containers
function carregarProdutos() {
    // Mostra todos os containers
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.style.display = '';
    });
    
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

// Atualize os event listeners da pesquisa
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Pesquisa ao clicar no botão
    searchButton.addEventListener('click', function() {
        filtrarProdutos(searchInput.value);
    });
    
    // Pesquisa ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filtrarProdutos(searchInput.value);
        }
    });
    
    // Limpa a pesquisa quando o input perde o foco e está vazio
    searchInput.addEventListener('input', function() {
        if (!searchInput.value.trim()) {
            carregarProdutos();
        }
    });
});

function finalizarCompra() {
    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
        return;
    }
    
    // Mostra o modal de confirmação
    mostrarModalCompra();
    
    // Limpa o carrinho após a compra
    carrinho = [];
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
    atualizarContadorCarrinho();
    
    // Fecha o carrinho automaticamente
    fecharCarrinho();
}

// Funções para controlar o modal de confirmação
function mostrarModalCompra() {
    document.getElementById('modalCompraFinalizada').style.display = 'flex';
}

function fecharModalCompra() {
    document.getElementById('modalCompraFinalizada').style.display = 'none';
}

// Fechar o modal se clicar fora do conteúdo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modalCompraFinalizada');
    if (event.target === modal) {
        fecharModalCompra();
    }
});

if (window.location.pathname.includes("produto.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = parseInt(urlParams.get("id"));
    const produto = produtos.find(p => p.id === idProduto);
    const container = document.getElementById("produto-detalhe");
  
    if (produto && container) {
        container.innerHTML = `
          <div class="row align-items-start">
            <div class="col-md-6 text-center mb-4 mb-md-0">
              <img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid rounded shadow" style="max-height: 500px; object-fit: cover;">
            </div>
      
            <div class="col-md-6">
              <h2 class="fw-bold mb-3">${produto.nome}</h2>
              
              <!-- Linha de autor e avaliação -->
              <div class="d-flex align-items-center mb-3">
                <span class="me-3"><strong>Autor:</strong> ${produto.autor}</span>
                <div class="d-flex align-items-center">
                  ${gerarEstrelas(produto.nota)}
                  <span class="ms-2 text-muted">${produto.nota.toFixed(1)}/5.0</span>
                </div>
              </div>
              
              <div class="mb-3">
                <span class="badge bg-danger-subtle text-danger-emphasis me-2">${produto.genero}</span>
                <span class="badge bg-danger-subtle text-danger-emphasis me-2">${produto.subgenero}</span>
              </div>
              
              <p class="fs-5 text-muted mb-4">
                ${produto.descricao || "Aqui vai uma breve descrição do mangá pra deixar a página mais completa."}
              </p>
              
              <h3 class="text-danger fw-semibold mb-4">${produto.preco}</h3>
              <button class="btn btn-outline-danger btn-lg px-5 rounded-pill" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
          </div>
        `;
      } else {
        container.innerHTML = `<p class="text-center text-danger fs-5">Produto não encontrado 😢</p>`;
      }
}

// Função auxiliar para gerar as estrelas de avaliação
function gerarEstrelas(nota) {
    const estrelasCheias = Math.floor(nota);
    const temMeiaEstrela = nota % 1 >= 0.5;
    const estrelasVazias = 5 - Math.ceil(nota);
    
    let html = '';
    
    // Estrelas cheias
    for (let i = 0; i < estrelasCheias; i++) {
        html += '<i class="fas fa-star text-warning"></i>';
    }
    
    // Meia estrela (se necessário)
    if (temMeiaEstrela) {
        html += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    // Estrelas vazias
    for (let i = 0; i < estrelasVazias; i++) {
        html += '<i class="far fa-star text-warning"></i>';
    }
    
    return html;
}