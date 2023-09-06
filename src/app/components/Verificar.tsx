"use client";

import { useRef, useState } from "react";

type User = {
  html_url: string;
  avatar_url: string;
  name: string;
};

export default function Verificar() {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function getGitHubUser() {
    setError(null);

    if (!username) {
      setError(
        ` Informe seu username acima antes de poder enviar por WhatsApp`
      );
      return;
    }

    const result = await fetch(`https://api.github.com/users/${username}`);
    const { html_url, avatar_url, name } = await result.json();

    console.log({ html_url, avatar_url, name });

    if (!html_url) {
      setError(
        `Não encontramos no GitHub nenhuma conta com o username '${username}'`
      );
      return;
    }

    if (!name || name.split(" ").length < 2) {
      setError(
        `Faltou informar seu nome completo no seu perfil do GitHub. Vá no site do GitHub para corrijir e depois tente novamente.`
      );
      return;
    }

    window.location.href = `https://api.whatsapp.com/send?phone=5548999826011&text=Link do meu GitHub: ${html_url}`;
  }

  return (
    <div className="max-w-[320px] m-auto flex flex-col gap-2">
      <div className="flex text-[1rem]">
        <label className="bg-slate-200 py-2 px-3 font-medium rounded-l-lg border">
          github.com/
        </label>
        <input
          type="text"
          className="font-semibold px-2 py-2 border rounded-r-lg w-full placeholder:font-normal placeholder:text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Seu username aqui"
        />
      </div>

      {error && (
        <div className="text-xs font-normal bg-red-200 px-4 py-3 text-red-800">
          {error}
        </div>
      )}

      <div className="text-center">
        <button
          type="button"
          onClick={getGitHubUser}
          // className="text-white text-sm bg-indigo-600 hover:bg-indigo-500 rounded-md py-3 px-5 uppercase font-bold tracking-wider"
          className="text-white text-sm bg-green-600 hover:bg-green-500 rounded-md px-5 py-2 uppercase font-bold tracking-wider w-full"
        >
          Enviar por Whatsapp
        </button>
      </div>
    </div>
  );
}
