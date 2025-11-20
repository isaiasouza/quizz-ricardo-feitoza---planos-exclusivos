
import { Question, ResultContent, ResultType, OptionType } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'text',
    text: "Para começar, qual o nome da sua Barbearia?",
    subText: "Vamos personalizar seu plano de crescimento.",
    placeholder: "Ex: Barbearia do João, King Cuts...",
    microCopy: "Vamos analisar o potencial específico do seu negócio.",
  },
  {
    id: 2,
    type: 'image-choice',
    text: "Qual é o estilo da sua Barbearia?",
    microCopy: "Isso ajuda a definir a linguagem para atrair clientes premium.",
    options: [
      { id: 'CLASSIC', text: "Clássica / Tradicional", icon: "Scissors" },
      { id: 'MODERN', text: "Moderna / Urbana", icon: "Zap" },
      { id: 'LUXURY', text: "VIP / Lounge", icon: "Crown" },
      { id: 'STREET', text: "Street / Freestyle", icon: "SprayCan" },
    ]
  },
  {
    id: 3,
    type: 'team-size',
    text: "Qual o tamanho da sua equipe?",
    microCopy: "O método funciona para quem trabalha sozinho ou tem rede.",
    options: [
      { id: 'SOLO', text: "Euquipe (Só eu)", icon: "User" },
      { id: 'SMALL_TEAM', text: "2 a 4 Barbeiros", icon: "Users" },
      { id: 'BIG_TEAM', text: "5+ Barbeiros", icon: "Building2" },
      { id: 'OWNER', text: "Sou Apenas Gestor", icon: "Briefcase" },
    ]
  },
  {
    id: 4,
    type: 'range',
    text: "Qual é o seu faturamento médio mensal hoje?",
    subText: "Arraste para selecionar o valor aproximado",
    microCopy: "Dado 100% confidencial para o cálculo de projeção.",
    rangeConfig: {
      min: 2000,
      max: 60000,
      step: 1000,
      prefix: "R$ ",
      labelLow: "Iniciando",
      labelHigh: "Consolidado"
    }
  },
  {
    id: 5,
    type: 'choice',
    text: "Qual melhor descreve sua dor principal hoje?",
    microCopy: "Essa é a mesma situação que Ricardo tinha antes de virar o jogo...",
    options: [
      { id: OptionType.A, text: "Tenho clientes, mas o dinheiro não sobra" },
      { id: OptionType.B, text: "Agenda cheia, mas estou exausto (escravo do negócio)" },
      { id: OptionType.C, text: "Concorrência desleal de preço no bairro" },
      { id: OptionType.D, text: "Não consigo fidelizar, o cliente some" },
    ],
  },
  {
    id: 6,
    type: 'multiselect',
    text: "Quais serviços você oferece além do corte?",
    subText: "Selecione todos que se aplicam.",
    microCopy: "Serviços extras são a chave para o Upsell nos Planos.",
    options: [
      { id: 'BEARD', text: "Barba / Barboterapia" },
      { id: 'CHEMISTRY', text: "Química / Luzes" },
      { id: 'PRODUCTS', text: "Venda de Produtos" },
      { id: 'DRINKS', text: "Bar / Bebidas" },
      { id: 'NONE', text: "Apenas o Básico" },
    ]
  },
  {
    id: 7,
    type: 'choice',
    text: "Seus clientes premium (que pagam mais) recebem tratamento REALMENTE diferenciado?",
    microCopy: "Aqui está o segredo que Ricardo usou para aumentar 80% do faturamento...",
    options: [
      { id: OptionType.A, text: "Não, todos recebem o mesmo atendimento" },
      { id: OptionType.B, text: "Sim, mas é algo básico (café/prioridade)" },
      { id: OptionType.C, text: "Sim, temos Planos de Assinatura ou VIP" },
      { id: OptionType.D, text: "Nunca pensei em segmentar" },
    ],
  },
  {
    id: 8,
    type: 'simulator',
    text: "Vamos simular: Onde você quer chegar em 6 meses?",
    subText: "Defina sua meta usando o método de Planos Exclusivos",
    microCopy: "Veja a diferença entre continuar igual vs. aplicar o método.",
    rangeConfig: {
      min: 5000,
      max: 120000,
      step: 1000,
      prefix: "R$ ",
      labelLow: "Meta Conservadora",
      labelHigh: "Meta Agressiva"
    }
  },
  {
    id: 9,
    type: 'choice',
    text: "Se você pudesse aumentar o faturamento em 80% SEM aumentar clientes, você faria?",
    microCopy: "Ricardo fez exatamente isso. E você pode também.",
    options: [
      { id: OptionType.A, text: "Sim, com certeza! Isso seria perfeito" },
      { id: OptionType.B, text: "Talvez, mas preciso entender a matemática" },
      { id: OptionType.C, text: "Não, meu foco é em volume de gente" },
      { id: OptionType.D, text: "Acho difícil ser possível" },
    ],
  },
  {
    id: 10,
    type: 'choice',
    text: "Quanto você estaria disposto a investir para ter o script exato dessa estratégia?",
    microCopy: "O investimento é menor que um corte de cabelo por mês...",
    options: [
      { id: OptionType.A, text: "Quero o sistema completo e suporte" },
      { id: OptionType.B, text: "Busco apenas dicas gratuitas" },
      { id: OptionType.C, text: "Pagaria se tiver garantia de resultado" },
      { id: OptionType.D, text: "Não é minha prioridade agora" },
    ],
  },
];

export const RESULTS: Record<ResultType, ResultContent> = {
  [ResultType.PERFECT_CANDIDATE]: {
    title: "CANDIDATO PERFEITO",
    description: "Sua barbearia tem a estrutura ideal para o Método de Planos Exclusivos. Você já tem o fluxo, mas está desperdiçando margem de lucro. Com o ajuste certo, você dobra o lucro líquido em 60 dias.",
    ctaText: "QUERO DOBRAR MEU LUCRO - R$ 197",
    highlightColor: "green",
    priceDisplay: true
  },
  [ResultType.UNDERSTANDS_GAME]: {
    title: "VOCÊ ENTENDE O JOGO",
    description: "Você já percebeu que 'cortar mais cabelo' não é a solução para ficar rico. Você precisa de LTV (Lifetime Value). O sistema do Ricardo vai te dar a estrutura de recorrência que falta.",
    ctaText: "QUERO ESTRUTURAR AGORA - R$ 197",
    highlightColor: "blue",
    priceDisplay: true
  },
  [ResultType.MINDSET_SHIFT]: {
    title: "PRECISA MUDAR O FOCO",
    description: "Você ainda pensa muito em 'volume' e pouco em 'valor'. Ricardo provou que ter menos clientes pagando mais é o segredo da liberdade. O curso vai virar essa chave na sua cabeça.",
    ctaText: "QUERO APRENDER O MÉTODO - R$ 197",
    highlightColor: "amber",
    priceDisplay: true
  },
  [ResultType.HAS_POTENTIAL]: {
    title: "TEM GRANDE POTENCIAL",
    description: "Você tem uma base sólida, mas está inseguro sobre precificação e estratégia. É normal. O sistema elimina o 'achismo' e te dá a certeza matemática para cobrar mais sem medo.",
    ctaText: "QUERO CLAREZA TOTAL - R$ 197",
    highlightColor: "purple",
    priceDisplay: true
  },
  [ResultType.NOT_READY]: {
    title: "MOMENTO DE ESTUDO",
    description: "Talvez você ainda esteja na fase inicial de montagem. O treinamento seria um atalho gigante, mas se preferir, comece com nossos conteúdos gratuitos.",
    ctaText: "QUERO COMEÇAR CERTO - R$ 197",
    highlightColor: "gray",
    priceDisplay: false
  },
};
