import Image from "next/image";
import hoge from "./ajh.png";

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

      <div className="text-center text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        Se você fala sério em entrar para a área de programação então saiba que
        existe uma rede social especialmente desenvolvida para nerds chamada{" "}
        <b>GitHub</b> que você tem a obrigação moral de conhecer.
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
        1. Entender o que é GitHub
        <span className="text-xs block font-normal">
          Assista vídeos no YouTube, leia, fale com alguém de usa. Enfim.
          Vire-se.
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        2. Criar sua conta no GitHub.com
        <span className="text-xs block font-normal">
          Você precisa ter um email. Daí é só criar sua conta no site{" "}
          <a href="https://github.com">GitHub.com</a>
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        3. Adicionar seu nome completo no perfil
        <span className="text-xs block font-normal">
          Nós utilizaremos esta conta do GitHub que você vai criar para
          identificá-lo na ELITI. Portanto, garanta que seu nome estará correto
          e completo. Tente não confundir nome no perfil com o username.
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        4. Adicionar uma foto profissional no perfil
        <span className="text-xs block font-normal">
          Através dessa foto que você será identificado na ELITI. Portanto,
          capriche no look e procure utilizar uma foto que transmita certo
          profissionalismo. Afinal, você não quer assustar quem pretende te
          contratar, certo?
        </span>
      </div>

      <div className="text-xl font-bold bg-white p-5 text-slate-800 rounded-lg shadow-xl">
        5. Enviar o link do seu GitHub para nós
        <span className="text-xs block font-normal">
          Enviar o link do seu GitHub para o Whatsapp da ELITI abaixo
        </span>
        <a
          href="https://api.whatsapp.com/send?phone=5548999826011&text=Link do meu GitHub..."
          className="mt-3 text-white text-sm bg-green-600 hover:bg-green-500 rounded-md py-5 m-1 flex justify-center align-middle uppercase font-bold tracking-wider"
        >
          Enviar link do meu GitHub
        </a>
      </div>
    </div>
  );
}
