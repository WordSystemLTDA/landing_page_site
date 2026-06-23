import { sagestart } from "./sagestart";
import type { ConfiguracaoFlavor, Flavor, MenusCabecalho, TextosFlavor } from "./types";

const URL_APP_STORE = "https://apps.apple.com/br/app/TODO-custodeproducao";
const URL_PLAY_STORE = "https://play.google.com/store/apps/details?id=br.com.TODO.custodeproducao";

const menusCustoProducao: MenusCabecalho = {
  planos: {
    rotulo: "Planos",
    prefixoRota: "/planos",
    itens: [
      { rotulo: "Empresariais", slug: "empresariais", path: "/planos" },
      { rotulo: "Implantacao", slug: "implantacao", path: "/planos" },
      { rotulo: "Consultoria", slug: "consultoria", path: "/planos" },
    ],
  },
  funcionalidades: {
    rotulo: "Funcionalidades",
    prefixoRota: "/funcionalidades",
    itens: [
      { rotulo: "Ficha Tecnica", slug: "ficha-tecnica" },
      { rotulo: "Custo por Produto", slug: "custo-por-produto" },
      { rotulo: "Formacao de Preco", slug: "formacao-de-preco" },
      { rotulo: "Controle de Insumos", slug: "controle-de-insumos" },
      { rotulo: "Relatorios de Margem", slug: "relatorios-de-margem" },
    ],
  },
  segmentos: {
    rotulo: "Segmentos",
    prefixoRota: "/segmentos",
    itens: [
      { rotulo: "Industrias", slug: "industrias" },
      { rotulo: "Fabricas de Alimentos", slug: "fabricas-de-alimentos" },
      { rotulo: "Operacoes Artesanais", slug: "operacoes-artesanais" },
    ],
  },
  plataformas: {
    rotulo: "Plataformas",
    prefixoRota: "/plataformas",
    itens: [
      { rotulo: "Desktop Local", slug: "desktop-local" },
      { rotulo: "Desktop Online", slug: "desktop-online" },
      { rotulo: "Web", slug: "web" },
    ],
  },
};

const textosCustoProducao: TextosFlavor = {
  heroi: {
    selo: "Gestao de custos para operacoes produtivas",
    tituloAntes: "Descubra o custo real da sua",
    tituloDestaque: "producao",
    subtitulo:
      "Controle fichas tecnicas, insumos, perdas, mao de obra, margem e preco de venda em uma plataforma criada para quem produz e precisa decidir com dados.",
    ctaPrimario: "Comecar {trialDays} dias gratis",
    ctaSecundario: "Ver sistema funcionando",
  },
  appGarcom: {
    selo: "Apontamento de producao",
    titulo: "Cada etapa registrada, custo",
    tituloDestaque: "sempre atualizado.",
    subtitulo:
      "Registre consumo de insumos, perdas e producao realizada direto da operacao. Os dados alimentam automaticamente custos, margens e relatorios.",
    recursos: [
      {
        titulo: "Consumo em tempo real",
        descricao: "Baixe insumos por lote, ordem de producao ou produto acabado sem depender de planilhas paralelas.",
      },
      {
        titulo: "Perdas e rendimento",
        descricao: "Compare o previsto com o realizado e entenda rapidamente onde a margem esta sendo consumida.",
      },
    ],
  },
  funcionalidades: {
    titulo: "Tudo para controlar custo, margem e preco",
    subtitulo: "Da ficha tecnica ao relatorio gerencial, sua producao fica conectada em um unico sistema.",
    cartoes: [
      {
        icone: "📋",
        titulo: "Ficha Tecnica",
        descricao: "Monte receitas, composicoes e estruturas de produto com quantidade, rendimento e perda tecnica.",
      },
      {
        icone: "💰",
        titulo: "Custo por Produto",
        descricao: "Calcule custo unitario, custo por lote e variacoes causadas por compras, perdas e produtividade.",
      },
      {
        icone: "🏷️",
        titulo: "Formacao de Preco",
        descricao: "Simule preco de venda com margem, impostos, comissoes e despesas operacionais.",
      },
      {
        icone: "📦",
        titulo: "Controle de Insumos",
        descricao: "Acompanhe materia-prima, estoque minimo, consumo previsto e necessidade de reposicao.",
      },
      {
        icone: "📊",
        titulo: "Relatorios de Margem",
        descricao: "Veja margem por produto, familia, periodo e centro de custo para decidir com seguranca.",
      },
    ],
  },
  estatisticas: {
    selo: "Resultados mensuraveis",
    titulo: "Custo claro para produzir melhor",
    itens: [
      { valor: "100%", rotulo: "Custos rastreaveis", icone: "📊" },
      { valor: "30%", rotulo: "Menos retrabalho", icone: "📉" },
      { valor: "24h", rotulo: "Margem atualizada", icone: "⏱️" },
      { valor: "5 anos", rotulo: "No mercado", icone: "🏆" },
    ],
    depoimentos: [
      {
        citacao: "Agora sabemos exatamente quanto custa cada produto e conseguimos reajustar preco antes de perder margem.",
        nome: "Ana Lucia",
        papel: "Diretora de Operacoes",
        iniciais: "AL",
      },
      {
        citacao: "A ficha tecnica integrada ao estoque tirou nossa equipe das planilhas e reduziu muito os erros de compra.",
        nome: "Bruno Costa",
        papel: "Coordenador de Producao",
        iniciais: "BC",
      },
      {
        citacao: "O comparativo entre custo previsto e realizado mostrou perdas que antes passavam despercebidas.",
        nome: "Carla Mendes",
        papel: "Gestora Financeira",
        iniciais: "CM",
      },
    ],
  },
  suporte: {
    selo: "Suporte especializado",
    titulo: "Implantacao guiada para sua operacao",
    subtitulo:
      "Nossa equipe ajuda a organizar produtos, insumos, fichas tecnicas e indicadores para sua empresa comecar medindo do jeito certo.",
    cartoes: [
      {
        icone: "📞",
        titulo: "Suporte por WhatsApp",
        descricao: "Atendimento direto com especialistas para duvidas de operacao, cadastro e leitura dos indicadores.",
      },
      {
        icone: "💻",
        titulo: "Acesso Remoto",
        descricao: "Apoio remoto para configuracoes, importacoes e ajustes durante a implantacao.",
        destaque: true,
        rotuloDestaque: "exclusivo",
      },
      {
        icone: "🎓",
        titulo: "Treinamento Guiado",
        descricao: "Orientacao para sua equipe dominar fichas tecnicas, custos, precificacao e relatorios.",
      },
    ],
    tituloHorario: "Horario de atendimento",
    rotuloDomingo: "Domingo e feriados",
    valorDomingo: "Plantao",
    notaDomingo: "Urgencias via WhatsApp",
    notaSuporteCompleto: "Suporte completo",
  },
  contato: {
    selo: "Fale com a gente",
    titulo: "Quer enxergar o custo real da sua producao?",
    subtitulo:
      "Mostramos como mapear insumos, perdas, produtividade e margem em uma demonstracao focada na sua realidade.",
    rotuloWhatsapp: "WhatsApp Comercial",
    notaWhatsapp: "Resposta em minutos no horario de atendimento",
    rotuloEmail: "E-mail",
    textoBotaoFormulario: "Enviar mensagem via WhatsApp",
    notaFormulario: "Ao enviar, voce sera redirecionado ao WhatsApp com os dados preenchidos.",
  },
  chamadaFinal: {
    selo: "Sem cartao de credito",
    titulo: "Pronto para controlar seu custo de producao?",
    subtitulo:
      "Teste por {trialDays} dias gratis e veja como fichas tecnicas, insumos e margens ficam mais faceis de acompanhar.",
    ctaPrimario: "Comecar {trialDays} dias gratis",
    ctaSecundario: "Ver planos e precos",
  },
  cadastro: {
    seloTeste: "dias gratis · sem cartao",
    tituloFormulario: "Crie sua conta no Custo de Producao",
    subtituloFormulario: "Preencha os dados abaixo para comecar a controlar custos, fichas tecnicas e margens.",
    campoEstabelecimento: "Nome da empresa",
    placeholderCampoEstabelecimento: "Ex: Fabrica Modelo",
    seloRiscoLateral: "Sem risco",
    tituloLateral: "Comece a medir sua producao com precisao!",
    itensLateral: [
      "Sem precisar cadastrar cartao de credito",
      "Acesso a **todos os modulos** durante o teste",
      "Ficha tecnica, insumos, custos e precificacao liberados",
      "Suporte especializado durante o periodo de teste",
      "Cancele quando quiser, sem burocracia",
    ],
    rotuloModulosLateral: "Modulos inclusos no teste:",
    modulosLateral: [
      "Ficha Tecnica",
      "Custos",
      "Insumos",
      "Ordens de Producao",
      "Precificacao",
      "Margens",
      "Apontamentos",
      "Relatorios",
    ],
  },
  baixar: {
    tituloSucesso: "Cadastro realizado!",
    subtituloSucesso: "Sua conta foi criada com sucesso. Agora baixe o sistema para comecar a controlar sua producao.",
    rotuloAcessoWeb: "Ou acesse pelo navegador em",
  },
  download: {
    tituloSecao: "Baixar o Custo de Producao",
    prefixoOsDetectado: "Detectamos que voce usa",
    osDesconhecido: "Escolha sua plataforma abaixo",
    prefixoBotaoDownload: "Baixar para",
    botaoOutrasPlataformas: "Baixar para outra plataforma",
    tituloPassos: "Como comecar em 3 passos",
    passos: [
      {
        titulo: "Baixe e instale",
        descricao: "Clique no botao acima, baixe o instalador e execute. A instalacao leva menos de 2 minutos.",
      },
      {
        titulo: "Faca login",
        descricao: "Abra o sistema e entre com o e-mail e senha que acabou de cadastrar. Seus modulos ja estao liberados.",
      },
      {
        titulo: "Cadastre sua producao",
        descricao: "Crie insumos, produtos, fichas tecnicas e parametros de custo para acompanhar sua margem.",
      },
    ],
    tituloRequisitos: "Requisitos do sistema",
    rotuloDesktop: "Computador (custos / producao)",
    rotuloMobile: "Celular (apontamentos)",
  },
  planos: {
    seloHeroi: "dias gratis, sem cartao de credito",
    tituloHeroi: "Custo de Producao: o plano certo para sua operacao",
    subtituloHeroi:
      "Comece gratuitamente por {trialDays} dias, sem cadastro de cartao, e explore fichas tecnicas, custos e margens.",
    botaoEscolher: "Comece Agora",
    botaoPlanoAtual: "Plano Atual",
    rotuloMaisVendido: "Mais vendido",
    linkCompararPlanos: "Comparar os Planos",
    prefixoEconomize: "Economize",
    sufixoMes: "/mes",
    sufixoTotal: "/total",
    rotuloUsuarios: "Usuarios",
    rotuloPainelAdmin: "Painel Administrativo",
    rotuloAppMobile: "App Android e iOS",
    rotuloEspacoIlimitado: "Espaco ilimitado",
    seloComparativo: "Comparativo",
    tituloComparativo: "Compare os planos e escolha a estrutura ideal para controlar custos",
    dicaRolarMobile: "Role para comparar os planos",
    botaoComecePelaTabela: "Comece gratis",
  },
  paginasFuncionalidades: {
    "ficha-tecnica": {
      titulo: "Ficha Tecnica",
      subtitulo: "Padronize composicoes, receitas e estruturas de produto",
      descricao:
        "Monte fichas tecnicas com insumos, quantidades, rendimento, perda e custo atualizado para cada item produzido.",
      icone: "📋",
      recursos: [
        { titulo: "Composicao por insumo", descricao: "Defina quantidade, unidade, rendimento e perda tecnica.", icone: "🧾" },
        { titulo: "Custo automatico", descricao: "Atualize custos com base no preco de compra dos insumos.", icone: "💰" },
        { titulo: "Versoes de ficha", descricao: "Compare alteracoes de composicao sem perder historico.", icone: "🕘" },
        { titulo: "Padrao de producao", descricao: "Garanta que a equipe produza com a mesma referencia.", icone: "✅" },
      ],
    },
    "custo-por-produto": {
      titulo: "Custo por Produto",
      subtitulo: "Saiba quanto custa produzir cada item",
      descricao:
        "Calcule custo unitario, custo por lote e variacoes entre previsto e realizado para proteger sua margem.",
      icone: "💰",
      recursos: [
        { titulo: "Custo unitario", descricao: "Veja o custo final de cada unidade produzida.", icone: "🏷️" },
        { titulo: "Custo por lote", descricao: "Acompanhe custos agrupados por ordem ou periodo.", icone: "📦" },
        { titulo: "Perdas reais", descricao: "Inclua quebras, sobras e rendimento real no calculo.", icone: "📉" },
        { titulo: "Historico de custos", descricao: "Entenda como compras e produtividade mudam o resultado.", icone: "📈" },
      ],
    },
    "formacao-de-preco": {
      titulo: "Formacao de Preco",
      subtitulo: "Defina precos com margem e seguranca",
      descricao:
        "Simule preco de venda considerando custo, despesas, impostos, comissoes e margem desejada.",
      icone: "🏷️",
      recursos: [
        { titulo: "Margem alvo", descricao: "Informe a margem desejada e veja o preco sugerido.", icone: "🎯" },
        { titulo: "Impostos e taxas", descricao: "Inclua encargos que impactam o preco final.", icone: "📑" },
        { titulo: "Simulacoes", descricao: "Compare cenarios antes de reajustar a tabela.", icone: "🧮" },
        { titulo: "Alertas de margem", descricao: "Identifique produtos vendidos abaixo do ponto ideal.", icone: "⚠️" },
      ],
    },
    "controle-de-insumos": {
      titulo: "Controle de Insumos",
      subtitulo: "Materia-prima conectada ao custo",
      descricao:
        "Controle entradas, consumo, estoque minimo e necessidade de compra com impacto direto no custo dos produtos.",
      icone: "📦",
      recursos: [
        { titulo: "Estoque de insumos", descricao: "Monitore materia-prima por unidade, lote ou categoria.", icone: "🏭" },
        { titulo: "Consumo previsto", descricao: "Projete necessidade com base nas fichas tecnicas.", icone: "📋" },
        { titulo: "Reposicao inteligente", descricao: "Veja alertas de compra antes de faltar material.", icone: "🔔" },
        { titulo: "Variacao de compra", descricao: "Entenda o impacto dos reajustes no custo final.", icone: "📊" },
      ],
    },
    "relatorios-de-margem": {
      titulo: "Relatorios de Margem",
      subtitulo: "Indicadores claros para decisoes rapidas",
      descricao:
        "Acompanhe margem, custo previsto, custo realizado e produtos que mais impactam o resultado da operacao.",
      icone: "📊",
      recursos: [
        { titulo: "Margem por produto", descricao: "Veja quais itens sustentam ou reduzem o lucro.", icone: "💹" },
        { titulo: "Previsto x realizado", descricao: "Compare ficha tecnica com apontamentos reais.", icone: "🔍" },
        { titulo: "Ranking de custos", descricao: "Identifique os maiores ofensores de margem.", icone: "🏆" },
        { titulo: "Dashboard gerencial", descricao: "Indicadores consolidados para diretoria e gestao.", icone: "📈" },
      ],
    },
  },
  paginasSegmentos: {
    industrias: {
      titulo: "Sistema para Industrias",
      subtitulo: "Custo de producao claro para operacoes industriais",
      descricao:
        "Controle insumos, fichas tecnicas, lotes, perdas e margens em uma plataforma pensada para ambientes produtivos.",
      icone: "🏭",
      beneficios: [
        { titulo: "Custos por lote", descricao: "Acompanhe o custo real de cada ordem de producao.", icone: "📦" },
        { titulo: "Ficha tecnica estruturada", descricao: "Padronize composicoes e rendimentos.", icone: "📋" },
        { titulo: "Controle de perdas", descricao: "Registre sobras, quebras e variacoes de rendimento.", icone: "📉" },
        { titulo: "Margem por produto", descricao: "Decida com base em indicadores atualizados.", icone: "💰" },
      ],
    },
    "fabricas-de-alimentos": {
      titulo: "Sistema para Fabricas de Alimentos",
      subtitulo: "Receitas, insumos e margem sempre sob controle",
      descricao:
        "Ideal para producao alimenticia que precisa calcular rendimento, perda, custo por receita e preco de venda.",
      icone: "🍽️",
      beneficios: [
        { titulo: "Receitas padronizadas", descricao: "Controle ingredientes, rendimento e variacoes.", icone: "🧾" },
        { titulo: "Perdas na producao", descricao: "Registre perdas por preparo, armazenamento ou embalagem.", icone: "📉" },
        { titulo: "Precificacao segura", descricao: "Forme precos com margem e custos atualizados.", icone: "🏷️" },
        { titulo: "Compra de insumos", descricao: "Planeje compras com base na demanda de producao.", icone: "📦" },
      ],
    },
    "operacoes-artesanais": {
      titulo: "Sistema para Operacoes Artesanais",
      subtitulo: "Cresca sem perder controle do custo",
      descricao:
        "Organize producao sob encomenda, receitas, materia-prima e margem mesmo em operacoes enxutas.",
      icone: "🛠️",
      beneficios: [
        { titulo: "Produtos sob encomenda", descricao: "Calcule custo antes de confirmar pedidos especiais.", icone: "🧮" },
        { titulo: "Insumos compartilhados", descricao: "Veja como cada materia-prima impacta produtos diferentes.", icone: "🔗" },
        { titulo: "Margem por venda", descricao: "Evite precos abaixo do custo real.", icone: "💹" },
        { titulo: "Rotina simples", descricao: "Substitua planilhas por um fluxo mais confiavel.", icone: "✅" },
      ],
    },
  },
  parceiros: {
    seloPagina: "Programa de Parceiros",
    tituloPagina: "Cresca com o Custo de Producao",
    subtituloPagina:
      "Seja um parceiro comercial e ajude empresas produtivas a controlar custos, margens e precos com mais precisao.",
    seloSobre: "Quem somos",
    tituloSobre: "Conheca a Word System",
    descricaoSobre: "Desenvolvemos solucoes inteligentes de gestao para empresas que precisam medir melhor sua operacao.",
    descricaoEmpresa: "Especializada no desenvolvimento de sistemas para gestao, custos e processos operacionais.",
    sede: "Santa Fe - PR, Brasil",
    cnpjLabel: "Empresa registrada e ativa desde 2016",
    atuacao: "Todo o territorio nacional",
    numeros: [
      { valor: "+10", rotulo: "Anos no mercado", icone: "📅" },
      { valor: "+3.000", rotulo: "Clientes ativos", icone: "👥" },
      { valor: "+15.000", rotulo: "Operacoes gerenciadas", icone: "🏭" },
      { valor: "24/7", rotulo: "Suporte disponivel", icone: "🎧" },
    ],
    motivosParceiro: [
      "Mercado produtivo com alta demanda por controle de custos",
      "Sistema robusto e atualizado continuamente",
      "Produto com apelo claro para industrias e pequenas fabricas",
      "Alta percepcao de valor por reduzir perdas e proteger margens",
      "Suporte completo para fechar negocios",
      "Comissoes recorrentes e previsiveis",
    ],
    vantagens: [
      { icone: "💰", titulo: "Comissao Recorrente", descricao: "Receba comissoes mensais por cada cliente ativo indicado por voce." },
      { icone: "📦", titulo: "Material de Apoio", descricao: "Acesso a materiais de marketing, apresentacoes e conteudos exclusivos." },
      { icone: "🎓", titulo: "Treinamento Especializado", descricao: "Capacitacao completa sobre custo de producao para vender com confianca." },
      { icone: "🤝", titulo: "Suporte Dedicado", descricao: "Canal direto com nosso time comercial para tirar duvidas e fechar negocios." },
      { icone: "📈", titulo: "Painel do Parceiro", descricao: "Acompanhe indicacoes, comissoes e desempenho em tempo real." },
      { icone: "🚀", titulo: "Sem Investimento Inicial", descricao: "Torne-se parceiro sem nenhum custo. Basta se cadastrar e comecar." },
    ],
    comoFunciona: [
      { passo: "1", titulo: "Cadastre-se", descricao: "Preencha o formulario com seus dados e aguarde a aprovacao." },
      { passo: "2", titulo: "Receba seu acesso", descricao: "Apos aprovado, voce tera acesso ao painel e materiais de apoio." },
      { passo: "3", titulo: "Indique clientes", descricao: "Apresente o Custo de Producao para empresas que precisam medir melhor suas margens." },
      { passo: "4", titulo: "Receba comissoes", descricao: "A cada cliente que assinar, voce recebe comissao recorrente." },
    ],
    itensLateral: [
      "Comissao **recorrente** mensal",
      "Material de marketing **exclusivo**",
      "Treinamento **completo** sobre o produto",
      "Suporte **dedicado** do time comercial",
      "Painel para acompanhar **indicacoes e ganhos**",
      "**Sem investimento** inicial",
    ],
    perfisIdeais: ["Consultores de custos", "Contadores", "Consultores industriais", "Empresas de tecnologia", "Revendedores de software"],
  },
};

export const custodeproducao: Flavor = {
  ...sagestart,
  id: "custodeproducao",
  cores: { ...sagestart.cores },
    imagens: {
    gifHeroi: "https://via.placeholder.com/800x500?text=Sage+Start+Preview",
    preVisualizacaoPainel: "https://www.grandchef.com.br/img/home/dashboard-sistema-grandchef.webp",
    simulacaoWhatsapp: "https://via.placeholder.com/400x600?text=Sage+Start+WhatsApp",
    depoimento1: "https://via.placeholder.com/60x60?text=aspas",
    aiqfome: "https://aiqfome.com/assets/images/logo.svg",
    ifood: "https://www.ifood.com.br/static/images/logo.svg",
  },
  configuracao: {
    ...sagestart.configuracao,
    nome: "Custo de Producao",
    nomePro: "Custo de Producao Pro",
    slogan: "Sistema para Custo de Producao",
    descricao: "Sistema de gestao para fichas tecnicas, insumos, custos, margens e precificacao.",
    logo: "https://custodeproducao.com.br/sistema/apis_restaurantes/imagens/logo_custo_de_producao.png",
    logoColorida: "https://custodeproducao.com.br/sistema/apis_restaurantes/imagens/logo_custo_de_producao.png",
    menus: menusCustoProducao,
    plataformas: buildProductionCostPlatforms(sagestart.configuracao),
    contato: {
      urlWhatsapp: "https://wa.me/5500000000001",
      email: "contato@custodeproducao.com.br",
    },
    links: {
      sistemaWeb: "https://custodeproducao.com.br/painel/#/autenticacao/login",
      appStore: URL_APP_STORE,
      playStore: URL_PLAY_STORE,
    },
    download: {
      categorias: [
        { chave: "sistema_desktop", rotulo: "Sistema Desktop", descricao: "Desktop (custos / producao)" },
        { chave: "sistema_web", rotulo: "Sistema Web", descricao: "Web (custos / producao)" },
        { chave: "app_operador", rotulo: "App do Operador", descricao: "Android / iPhone" },
      ],
      itens: sagestart.configuracao.download.itens.map((item) => ({
        ...item,
        id: item.id.replace("app-garcom", "app-operador"),
        chaveCategoria: item.chaveCategoria === "app_garcom" ? "app_operador" : item.chaveCategoria,
        urlDownload: item.chaveCategoria === "app_garcom" ? getStoreUrl(item.chavePlataforma) : item.urlDownload,
      })),
      requisitos: {
        desktop: sagestart.configuracao.download.requisitos.desktop,
        celular: sagestart.configuracao.download.requisitos.celular,
      },
    },
  },
  textos: textosCustoProducao,
};

function buildProductionCostPlatforms(configuracao: ConfiguracaoFlavor): ConfiguracaoFlavor["plataformas"] {
  if (!configuracao.plataformas) return undefined;

  return transformFlavorValue(configuracao.plataformas, replaceRestaurantCopy);
}

function getStoreUrl(platform: string): string {
  if (platform === "ios") return URL_APP_STORE;
  if (platform === "android") return URL_PLAY_STORE;

  return "/baixar";
}

function transformFlavorValue<T>(value: T, transformText: (text: string) => string): T {
  if (typeof value === "string") {
    return transformText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => transformFlavorValue(item, transformText)) as T;
  }

  if (isPlainRecord(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, transformFlavorValue(entry, transformText)])
    ) as T;
  }

  return value;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object";
}

function replaceRestaurantCopy(text: string): string {
  const replacements: Array<[RegExp, string]> = [
    [/Sage Start Pro/g, "Custo de Producao Pro"],
    [/Sage Start/g, "Custo de Producao"],
    [/sagestart/g, "custodeproducao"],
    [/Restaurantes/g, "Industrias"],
    [/restaurantes/g, "industrias"],
    [/Restaurante/g, "Empresa"],
    [/restaurante/g, "empresa"],
    [/Bares e Baladas/g, "Operacoes Produtivas"],
    [/bares e delivery/g, "industrias e fabricas"],
    [/delivery/g, "producao"],
    [/Delivery/g, "Producao"],
    [/Garcom/g, "Operador"],
    [/garcom/g, "operador"],
    [/cozinha/g, "producao"],
    [/Cozinha/g, "Producao"],
    [/PDV/g, "Custos"],
    [/Frente de Caixa/g, "Custo por Produto"],
    [/Mesas e Comandas/g, "Ordens de Producao"],
    [/Mesas/g, "Ordens"],
    [/Comandas/g, "Apontamentos"],
    [/Financeiro/g, "Margens"],
    [/Emissao Fiscal/g, "Formacao de Preco"],
    [/Relatorios Gerenciais/g, "Relatorios de Margem"],
    [/Restaurantes ativos/g, "Operacoes ativas"],
    [/Sistema Desktop/g, "Sistema Desktop"],
    [/App do Operador/g, "App do Operador"],
  ];

  return replacements.reduce((currentText, [pattern, replacement]) => currentText.replace(pattern, replacement), text);
}
