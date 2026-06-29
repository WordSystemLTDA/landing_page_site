import { bigchef } from "./bigchef";
import { sagestart } from "./sagestart";
import type { Flavor, MenusCabecalho, TextosFlavor } from "./types";

const WORDSYSTEM_LOGO = "https://wordsystem.com.br/sistema/apis_restaurantes/imagens/logo_wordsystem.png";

const menusWordSystem: MenusCabecalho = {
  sistemas: {
    rotulo: "Sistemas",
    prefixoRota: "/",
    itens: [
      { rotulo: "BigChef", slug: "bigchef", path: "/#bigchef" },
      { rotulo: "SageStart", slug: "sagestart", path: "/#sagestart" },
    ],
  },
  segmentos: bigchef.configuracao.menus?.segmentos,
  planos: sagestart.configuracao.menus?.planos,
};

const textosBaseWordSystem = transformFlavorValue(bigchef.textos, replaceProductCopy);
const textosWordSystem: TextosFlavor = {
  ...textosBaseWordSystem,
  heroi: {
    selo: "Tecnologia de gestao para negocios modernos",
    tituloAntes: "Conheca os sistemas da",
    tituloDestaque: "Word System",
    subtitulo:
      "BigChef e SageStart reunem nossa experiencia em gestao, vendas, financeiro, fiscal e operacao para empresas que precisam crescer com controle.",
    ctaPrimario: "Conhecer sistemas",
    ctaSecundario: "Falar com consultor",
  },
  funcionalidades: {
    titulo: "Escolha o sistema ideal para sua operacao",
    subtitulo: "Duas plataformas Word System para momentos e necessidades diferentes do seu negocio.",
    cartoes: [
      {
        icone: "BC",
        titulo: "BigChef",
        descricao:
          "Sistema completo para restaurantes, bares, lanchonetes e delivery, com PDV, mesas, comandas, fiscal, financeiro e atendimento integrado.",
      },
      {
        icone: "SS",
        titulo: "SageStart",
        descricao:
          "ERP leve e inteligente para organizar vendas, financeiro, emissao fiscal, relatorios e gestao comercial em uma rotina simples.",
      },
      {
        icone: "WS",
        titulo: "Implantacao Word System",
        descricao:
          "Acompanhamento para escolher o melhor sistema, configurar a operacao e colocar sua equipe para trabalhar com seguranca.",
      },
    ],
  },
  contato: {
    ...textosBaseWordSystem.contato,
    titulo: "Fale com a Word System",
    subtitulo:
      "Conte um pouco sobre sua operacao e nossa equipe indica se o melhor caminho e BigChef, SageStart ou uma combinacao de solucoes.",
  },
  chamadaFinal: {
    ...textosBaseWordSystem.chamadaFinal,
    titulo: "Qual sistema combina com sua empresa?",
    subtitulo: "Compare BigChef e SageStart com nossa equipe e escolha a solucao certa para o momento da sua operacao.",
    ctaPrimario: "Falar com consultor",
    ctaSecundario: "Ver planos",
  },
  parceiros: {
    ...textosBaseWordSystem.parceiros,
    tituloPagina: "Cresca com a Word System",
    descricaoSobre: "Desenvolvemos o BigChef e o SageStart para empresas que precisam operar melhor todos os dias.",
  },
};

export const wordsystem: Flavor = {
  ...sagestart,
  id: "wordsystem",
  cores: {
    primaria: "#0F766E",
    primariaEscura: "#115E59",
    primariaClara: "#CCFBF1",
    destaque: "#F59E0B",
    escura: "#172033",
    clara: "#FFFFFF",
    borda: "#D7DEE8",
    textoSuave: "#475569",
    textoDesabilitado: "#94A3B8",
    secundaria: "#CCFBF1",
  },
  imagens: {
    ...sagestart.imagens,
    gifHeroi: bigchef.imagens.gifHeroi,
    preVisualizacaoPainel: bigchef.imagens.preVisualizacaoPainel,
    simulacaoWhatsapp: bigchef.imagens.simulacaoWhatsapp,
  },
  sombras: {
    cabecalho: "0 4px 30px rgba(15,118,110,0.10)",
    imagemPainel: "0 20px 50px rgba(23,32,51,0.12)",
    ctaPadrao: "0 8px 20px rgba(15,118,110,0.28)",
    ctaHover: "0 8px 25px rgba(15,118,110,0.36)",
    botaoHeroiPrimario: "0 10px 40px rgba(15,118,110,0.35)",
    botaoPreco: "0 10px 30px rgba(15,118,110,0.25)",
    botaoPrecoHover: "0 10px 35px rgba(15,118,110,0.35)",
    cardFuncionalidade: "0 10px 40px rgba(15,118,110,0.08)",
    planoSelecionado: "0 6px 20px rgba(15,118,110,0.25)",
  },
  configuracao: transformFlavorValue(
    {
      ...sagestart.configuracao,
      nome: "Word System",
      nomePro: "Word System Pro",
      slogan: "Sistemas de gestao para empresas",
      nomeEmpresa: "Word System Desenvolvimento de Sistemas LTDA",
      descricao: "Solucoes de gestao para restaurantes, operacoes comerciais e empresas em crescimento.",
      logo: WORDSYSTEM_LOGO,
      logoColorida: WORDSYSTEM_LOGO,
      acoesCabecalho: {
        baixar: false,
        conta: false,
        teste: false,
      },
      menus: menusWordSystem,
      plataformas: sagestart.configuracao.plataformas,
      contato: {
        urlWhatsapp: bigchef.configuracao.contato.urlWhatsapp,
        email: "contato@wordsystem.com.br",
      },
      links: {
        ...sagestart.configuracao.links,
        sistemaWeb: sagestart.configuracao.links.sistemaWeb,
      },
      download: {
        categorias: sagestart.configuracao.download.categorias,
        itens: sagestart.configuracao.download.itens,
        requisitos: {
          desktop: bigchef.configuracao.download.requisitos.desktop,
          celular: sagestart.configuracao.download.requisitos.celular,
        },
      },
    },
    replaceProductCopy
  ),
  textos: textosWordSystem,
};

function transformFlavorValue<T>(value: T, transformText: (text: string) => string): T {
  if (typeof value === "string") {
    return transformText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => transformFlavorValue(item, transformText)) as T;
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, transformFlavorValue(entry, transformText)])
    ) as T;
  }

  return value;
}

function replaceProductCopy(text: string): string {
  const replacements: Array<[RegExp, string]> = [
    [/Big Chef Pro/g, "Word System Pro"],
    [/Sage Start Pro/g, "Word System Pro"],
    [/bigchef/g, "wordsystem"],
    [/sagestart/g, "wordsystem"],
    [/contato@bigchef\.com\.br/g, "contato@wordsystem.com.br"],
    [/contato@sagestart\.com\.br/g, "contato@wordsystem.com.br"],
  ];

  return replacements.reduce((currentText, [pattern, replacement]) => currentText.replace(pattern, replacement), text);
}
