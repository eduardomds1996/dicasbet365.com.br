import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import ComoApostarEmEscanteiosImg from "../src/img/como-apostar-em-escanteios.jpg";

export default function ComoApostarEmEscanteios() {
  return (
    <Fragment>
      <Header />
      <main className="bg-white min-h-full min-w-full p-4 w-full min-h-screen">
        <div className="flex w-100 justify-center items-center">
          <div className="w-2/4">
            <div style={{ overflow: "hidden", height: 300 }}>
              <Image
                src={ComoApostarEmEscanteiosImg}
                alt="Como Apostar em Escanteios"
              />
            </div>
            <h1 className="text-3xl mt-4 mb-2">Como apostar em escanteios?</h1>
            <p className="mb-3">
              Muitos apostadores querem saber como apostar em escanteios na
              Bet365 ou em outras plataformas. Porém, antes de descobrir isso, é
              necessário entender como funcionam as apostas em escanteios.
            </p>

            <p className="mb-3">
              Quem assiste futebol sabe que escanteios são eventos comuns e
              importantes do jogo, pois significa que o time está muito próximo
              de chegar ao gol.
            </p>

            <p className="mb-3">
              E é justamente através das apostas em gols o melhor jeito que eu
              tenho para te explicar como funcionam as apostas em escanteios.
            </p>

            <p className="mb-3">
              Grosso modo, as apostas em escanteios funcionam de forma muito
              parecida com as apostas em gols.
            </p>

            <p className="mb-3">
              Nas apostas em escanteios, o apostador pode palpitar qual time
              marcará mais vezes, quem terá um número x de cantos a favor, entre
              outras opções.
            </p>

            <p className="mb-3">
              Também dá para apostar nos escanteios que podem ser marcados pelos
              dois times, como nos gols. Ou fazer apostas em quantos escanteios
              somados terão na partida.
            </p>

            <p className="mb-3">
              Em suma, quase todo tipo de aposta que você pode fazer em gols,
              também pode fazer em escanteios.
            </p>

            <ul>
              <li>Over/Under escanteios;</li>
              <li>Handicap asiático e europeu;</li>
              <li>Escanteio asiático;</li>
              <li>Total da partida;</li>
              <li>Total do time;</li>
              <li>1º tempo/2º tempo;</li>
              <li>Quem marca primeiro.</li>
            </ul>

            <p className="mb-3">
              Embora tenham suas semelhanças, é importante entender as
              particularidades do mercado de escanteios e saber o máximo de
              informações e estatísticas sobre as equipes antes de fazer suas
              apostas.
            </p>

            <h2>Como apostar em escanteios Bet365?</h2>

            <p className="mb-3">
              Antes de continuarmos este artigo, é essencial entender que um dos
              pontos chave para apostar em escanteios na Bet365 é sempre estudar
              os times da partida.
            </p>

            <p className="mb-3">
              Conhecer as estatísticas e performance das equipes é primordial,
              pois te ajuda a entender se um time costuma ter muitos ou poucos
              escanteios por jogo, por exemplo.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
