const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const content = document.getElementById('content');
const music = document.getElementById('musica'); // id correto
const foto = document.getElementById('foto');
const video = document.getElementById('video');
const mensagem = document.getElementById('mensagem');
let current = 0;


// Aqui tu coloca as fotos e mensagens
const slides = [
  {tipo: "imagem", src: "imagens/1.jpg", text: "Se lembra de como era bom, inocentem um amor aonde havia paz para nois, como era bom amar e presentea-la meu amor, cada vez que eu via seu sorriso eu me apaixonava mais e ja pensava como iria arrancar seu sorriso denovo, como eramos jovens e inoscente!😍"},
  {tipo: "imagem", src: "imagens/2.jpg",text: "Me lembro muito bem de quando te dei esse colar pendurado no seu pescoço, foi um dos presentes que eu mais amei te entregar, e cada um presente que era pra vc se apaixonar mais por mim eu que acabava me apaixonando mais!Como era bom te amar!❤️ "},
  {tipo: "imagem", src: "imagens/3.jpg", text: "AMOR se lembra quando começamos a nos cuidar KKKK, ahhh era maravilhoso, chegavamos a fazer até em video chamada, que tempo maravilhoso, como eu queria voltar a ter vc perto de mim novamente!"},
  {tipo: "video", src: "video/WhatsApp Video 2025-10-24 at 16.44.46 (1).mp4", text: "AHHHHHH como era bom ter seu abraço, seus beijos e carinhos, cada momento q eu passei ao seu lado foi maravilhosos, essa distancia toda so fará aumentar ainda mais o meu amor por vc e fazer eu e vc valorizarmos ainda mais um ao outro quando nós se contrarmos!"},
  {tipo: "imagem", src: "imagens/4.jpg", text: "Meu amorzinho, quando voce me mandou essa foto eu fique tao felizzzz em saber que vc guardou meus presentes com tanto carinho mesmo depois de tantos anos, nao foi em vão todo meu amor e carinho, e pode ter certeza ate o fim de nossas vidas na terra voce tera ainda mais amor e carinho!"},
  {tipo: "imagem", src: "imagens/5.jpg", text: "Quando voce me mandou essa foto eu fiquei admirando e pensando, como Deus e bom de ter me deixado conhecer uma de suas princesas, o quao sortudo eu sou somente de conversar com vc e poder ama-la da forma correta, eu agradeço todos os dias por isso!"},
  {tipo: "imagem", src: "imagens/6.jpg", text: "Tu és toda formosa queria, em ti nao há defeitos(canticos 4.7), fiquei relutante de colocar esse versiculo por ser cliche... mas até agr so achei 1 defeito em vc... estar longe de mim,eu amo cada jeito, cada palavra de sua boca, cada carinho, eu amo ate seus ciumes e cismas, pra mim seria uma honra te-la ao meu lado, uma honra de Deus dada a mmim!"},
  {tipo: "imagem", src: "imagens/7.jpg", text: "Um nó de 3 dobras nao se rompe com facilidade( eclesiastes 4.12), agradeço a Deus por nosso nó nao foi rompido podendo assim reecontrar meu verdadeiro amor novamente e esse nó nunca será pois sempre vamos manter ele com 3 nó e assim serviremos ao senhor com todo o nosso coração e com toda nossa obecienca!"},
  {tipo: "imagem", src: "imagens/8.jpg", text: "Grava-me como selo sobre o teu coração, como selo sobre o teu braço, porque o amor é forte como a morte(canticos8.6), esse versiculo me lembrou muito nosso amor um pelo outro, pois mesmo separados por anos esse amor ainda pulsa e pulsa tao forte um pelo outro,que esse amor nunca acabe e nem enfraqueça, que seja cravado nos fundos de nossas almas com cada oração nossa!"},
  {tipo: "imagem", src: "imagens/9.jpg", text: "Assim serviu jacó sete anos por Raquel e fora aos seus olhos como poucos dias, pelo que muito que a amava!(genesis 29.20).Amor eu esperarei vc pelo tempo que for preciso, pelo tempo da preparação de Deus, pois meu amor por vc eu o comparo pelo amor de Jaco a Raquel, vc tem um amor ao qual tanto sonhou... nao de um contos de fadas mas de um amor biblico que somente Deus possa conceder!"},
  {tipo: "imagem", src: "imagens/10.jpg", text: "O amor tudo sofre, tudo cre, tudo espera e tudo suporte(1 corintios 13.7).Aqui faço uma promessa de esperar voce o tempo que for preciso,suportarei toda minha ansiedade e desejo de te ter por perto, vou crer e confiar em vc que me esperara e em Deus que me honrara e vou sofre com toda minha saudade, com toda a desavença, com cada silencio entre nos que parecera desesperador, mas suportarei tudo pra ter a princesa ao qual eu sempre orei!"},

];

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  document.getElementById('titulo').style.display = 'none';
  content.classList.remove('hidden');

  // Força o play do áudio
  music.play().then(() => {
    console.log("Música tocando!");
  }).catch(err => {
    console.log("Erro ao tentar tocar música:", err);
    alert("Música não pôde tocar. Clique no ícone de play do celular para iniciar.");
  });

  mostrarSlide();
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current < slides.length) {
    mostrarSlide();
  } else {
    foto.style.display = "none";
    video.style.display = "none";
    nextBtn.style.display = "none";
    mensagem.textContent = "Esse foi o fim do meu melhor projeto, fiz de todo meu coração, cada palavra escrita foi a mais sincera, eu amo muito você minha princesa e irei casar com você! Nunca se esqueça do meu amor e cuidado!";
    mensagem.style.opacity = 1;
  }
});

function mostrarSlide() {
  const { tipo, src, text } = slides[current];

  foto.style.opacity = 0;
  video.style.opacity = 0;
  mensagem.style.opacity = 0;

  setTimeout(() => {
    if (tipo === "imagem") {
      foto.src = src;
      foto.classList.remove('hidden');
      video.classList.add('hidden');
    } else if (tipo === "video") {
      video.src = src;
      video.classList.remove('hidden');
      foto.classList.add('hidden');
      video.play();
    }

    mensagem.textContent = text;
    foto.style.opacity = 1;
    video.style.opacity = 1;
    mensagem.style.opacity = 1;
  }, 500);
}