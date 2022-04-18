console.clear();
const prompt = require("prompt-sync")();

console.log(`\tMuitas questões políticas e institucionais têm levantado paixões e
movido uma série de debates. Durante a pandemia de covid-19, por exemplo,
acompanhamos uma diversidade de disputas em torno de atribuições de unidades
da federação, da solidez de nossa democracia, da responsabilidade do Estado 
perante o aumento da pobreza trazido pela crise econômica. Dúvidas não
faltaram: quem se responsabiliza pelas políticas de combate ao coronavírus
e pelas políticas de saúde de forma mais ampla? Devo cobrar medidas sanitárias
do presidente, dos deputados, do governador ou do prefeito? Um presidente
pode ser afastado em virtude de sua atuação numa pandemia?
\tA lista de assuntos é enorme e, para compreender melhor qualquer um
deles, é necessário saber não apenas por que eles estão na ordem do dia, mas 
entender como se relacionam com os pilares de funcionamento dademocracia
brasileira. Com isso em mente, elaborei esse breve Quiz contendo cinco perguntas
sobre a estrutura política de nosso país para você aí do outro lado descobrir
em que pé da jornada de conhecimento sobre o assunto você se encontra. As 
perguntas a seguir devem ser respondidas com "S" para sim ou "N" para não.
Bora começar?!`)
console.log();
console.log();
console.log('Presione ENTER para começar');
prompt();

console.clear();

let perguntas = ['Executivo, Legislativo e Judiciário: Você sabe o que faz cada um deles?', 
`Você consegue diferenciar a função de cada cargo político?
Por exemplo, em qual esfera atua um vereador`,
`Você busa se informar sobre os debates políticos através de meios
de comunicação confiáveis?`,
'Você entende a diferença entre os espectros políticos esquerda e direita?',
'Você sabe como participar da política para além das eleições?'];

let resultadoFinal = 0;

for (let i = 0; i < perguntas.length; i++){
    console.clear();
    console.log(perguntas[i]);
    let resp = prompt().toLowerCase();
    while (resp != "s" && resp != "n") {
        console.clear();
        console.log(`Lembre-se de responder as perguntas utilizando apenas S ou N`);
        console.log();
        console.log("Tente novamente!");
        console.log();
        console.log(perguntas[i]);
        resp = prompt().toLowerCase();
      } if (resp == "s") {
        resultadoFinal++;
      }

}

console.clear();
let info = `Lembre-se que as Eleições Gerais de 2022 já têm data marcada: 2 de outubro. 
E o prazo final para que eleitoras e eleitores regularizem a situação 
eleitoral também: 4 de maio. Anote aí!`;

if (resultadoFinal == 5) {
  console.log(`Parabéns! Você conhece os fundamentos básicos sobre nosso sitema político, 
busca estar informado sobre as decições tomadas por nossos representantes 
e atua ativamente dentro desse campo. Apenas lembre-se que essa jornada 
não chegou ao fim, já que é necessário manter esse exercíco contínuo para
a democracia permanecer saudável`);
  console.log();
  console.log();
  console.log(info);
} else if (resultadoFinal == 4) {
  console.log(`Uau! Você parece compreender bem o funcionmento político do Estado, talvez 
apenas falte um maior engajamento na busca de informações ou uma atuação 
mais ativa fora dos anos eleitorais. Sendo assim, você está quase no "fim"
dessa jornada`);
  console.log();
  console.log();
  console.log(info);
} else if (resultadoFinal == 3) {
  console.log(`Boa! Você já possui alguns conhecimentos fundamentais sobre política.
Podemos dizer que você está no meio do caminho para se tornar
um agente político de respeito`);
  console.log();
  console.log();
  console.log(info);
} else if (resultadoFinal == 2 || resultadoFinal == 1) {
  console.log(`É... Você conhece bem uma coisa ou outra, mas pode se empenhar um 
pouquinho mais. Você já deu alguns passos nessa trilha, que tal 
se aventurar mais e pesquisar sobre as questões levantadas no 
teste?`);
  console.log();
  console.log();
  console.log(info);
} else {
  console.log(`Hmmmm... Acho que você não compreende muito bem como a democracia brasileira
funciona, mas não se preocupe a vontade de saber mais sobre o tema é o 
primeiro passo para iniciar esta jornada`);
  console.log();
  console.log();
  console.log(info);
} 