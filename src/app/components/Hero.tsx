import Verificar from "./Verificar";
export default function Hero() {
  return (
    <div className="flex flex-col gap-7 py-5 px-5">
      <h1 className="font-bold uppercase text-xl text-center py-5">
        Desafio <span className="text-[2em]">2</span> da ELITI
      </h1>

      <p>
        É provável que você tenha uma conta em redes sociais como o{" "}
        <b>Instagram</b> e o <b>Tiktok</b>. Se for mais velho já deve ter usado
        coisas como o <b>Facebook</b> ou até mesmo o <b>Orkut</b> junto com
        Cabral.
      </p>

      <div className="text-center text-xl font-regular bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        Se você fala sério em entrar para a área de programação então saiba que
        existe uma rede social especialmente desenvolvida para nerds chamada{" "}
        <b className="text-purple-700">GitHub</b> que você vai adorar conhecer.
      </div>

      <p className="text-lg">
        Isso porque o <b>GitHub</b> é incrivelmente útil e grátis! Através dele
        nerds do mundo inteiro se juntam para armazenar e dividir o que têm de
        melhor. Fotos e nudes? Não! Seus códigos de computador!
      </p>

      <p>
        Sua próxima missão é entender o mais profundamente possível o que é
        GitHub. Para isso, garanta que conseguiu cumprir estas atividades:
      </p>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            1
          </div>
          <div>Entenda o que é GitHub</div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm block font-normal">
            Esta é uma tarefa relativamente fácil. É tipo pedir para alguém
            entender o que é o <b>Instagram</b>. Mas existem níveis de
            entendimento e isso é o que define que tipo de profissional você vai
            ser.
          </p>
          {/* <p className="text-sm block font-normal">
            Na sua pesquisa você pode acabar encontrando algo dizendo:
            <span className="font-bold">
              GitHub é uma plataforma de desenvolvimento colaborativo que aloja
              projetos na nuvem utilizando o sistema de controle de versões
              chamado Git
            </span>
            . Daí você terá a resposta certa, mas não necessariamente o
            entendimento.
          </p> */}
          {/* <p className="text-sm block font-normal">
            Lembre-se de que a ELITI não é uma escolinha onde você faz de conta
            que aprende e seu professor faz de conta que te ensina. Então
            procure saber as coisas de verdade a tal ponto que possa se sentir
            seguro sendo capaz de explicar de várias formas diferentes com suas
            palavras que é o <b>GitHub</b> sem nunca mais esquecer.
          </p> */}
          <p className="text-lg block font-normal">
            Procure compreender de tal forma que você seja capaz de explicar
            para qualquer pessoa o que é o <b>GitHub</b> com naturalidade. Este
            é o nível de entendimento que esperamos dos nossos aprendizes.
          </p>
        </div>
        <p className="text-xs block font-bold mt-2">Dicas:</p>
        <p className="text-xs block font-normal">
          💡 Assista vídeos no YouTube, leia, fale com alguém que já usa{" "}
          <b>GitHub</b>.
        </p>
        <p className="text-xs block font-normal">
          💡 Saiba a diferença entre <b>GitHub</b> e <b>Git</b>.
        </p>
        <p className="text-xs block font-normal">
          💡 <a href="https://www.youtube.com/watch?v=za5KWZ5pRag">Aqui</a> tem
          um vídeo do canal Código Fonte no YouTube que explica o que é{" "}
          <b>Git</b>.
        </p>
        <p className="text-xs block font-normal">
          💡 <a href="https://www.youtube.com/watch?v=myQuetgSEsY">Aqui</a> tem
          um vídeo do canal Código Fonte no YouTube que explica o que é{" "}
          <b>GitHub</b>.
        </p>
        <p className="text-xs block font-normal">
          🥷 <a href="https://www.youtube.com/watch?v=6Czd1Yetaac">Aqui</a> tem
          um vídeo de 1 hora do Fábio Akita falando sobre <b>GIT</b> caso você
          esteja interessado em mergulhar mais fundo no assunto.
        </p>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            2
          </div>
          <div>Crie sua conta no GitHub.com</div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm block font-normal">
            O GitHub é grátis e basta você já ter um edereço de email para poder
            criar uma nova conta por lá. Este é o site:{" "}
            <a href="https://github.com">GitHub.com</a>
          </p>
          <p className="text-sm block font-normal">
            No momento de criação de sua conta no <b>GitHub</b> você precisará
            escolher um <b>username</b> (nome de usuário). Fique atento a esta
            informação, você vai precisar dela mais abaixo.
          </p>
        </div>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            3
          </div>
          <div>Adicione seu nome completo no perfil</div>
        </div>
        <span className="text-sm block font-normal">
          Nós utilizaremos esta conta do <b>GitHub</b> que você criar para
          identificá-lo na ELITI. Portanto, garanta que seu nome completo
          correto também esteja presente no seu perfil.
        </span>
        <span className="text-sm block font-normal bg-slate-200 p-3 mt-3 rounded-md">
          💡 <b>Dica:</b> Não confunda{" "}
          <span className="font-medium">nome completo no perfil</span> com o seu{" "}
          <span className="font-medium">username</span>.
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            4
          </div>
          <div>Adicione uma foto profissional no perfil</div>
        </div>
        <span className="text-sm block font-normal">
          Através dessa foto que você será identificado na ELITI. Portanto,
          capriche no look e procure utilizar uma foto que transmita certo
          profissionalismo. Afinal, você não quer assustar quem pretende te
          contratar, certo?
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            5
          </div>
          <div>Informe seu username e envie para nosso Whatsapp</div>
        </div>
        <div className="flex flex-col gap-3 my-3">
          <p className="text-sm block font-normal">
            <b>Username</b> é um nome único de usuário através do qual o GitHub
            consegue te identificar.
          </p>
          <p className="text-sm block font-normal">
            Um dos educadores na ELITI chamado Lucas, por exemplo, tem o
            username <b>pachecolucas</b> no GitHub. Isso significa que o perfil
            dele no GitHub pode ser encontrado na página:{" "}
            <a href="https://github.com/pachecolucas" className="">
              github.com.br/pachecolucas
            </a>
            .
          </p>
          <p className="text-sm block font-normal">
            Informe abaixo o seu <b>username</b> no GitHub e depois clique no
            botão para enviar ao nosso WhatsApp.
          </p>
        </div>
        <Verificar />
      </div>

      {/* <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        <div className="my-3 text-center">
          <div className="bg-purple-700 text-white w-10 m-auto rounded-full">
            6
          </div>
          <div>Envir o link do seu GitHub para nós</div>
        </div>
        <span className="text-sm block font-normal">
          Para enviar o link do seu GitHub para o Whatsapp da ELITI informe
          abaixo qual username você escolheu.
        </span>
        <div className="flex text-[1.05rem] max-w-[320px]">
          <label className="bg-slate-200 py-2 px-3 font-medium rounded-l-lg border">
            github.com/
          </label>
          <input
            type="text"
            className="font-semibold px-2 py-2 border rounded-r-lg w-full"
            value="pachecolucas"
            placeholder="Coloque aqui seu username no GitHub"
          />
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5548999826011&text=Link do meu GitHub..."
          className="mt-3 text-white text-sm bg-green-600 hover:bg-green-500 rounded-md py-5 m-1 flex justify-center align-middle uppercase font-bold tracking-wider"
        >
          Enviar link do meu GitHub
        </a>
      </div> */}
    </div>
  );
}
