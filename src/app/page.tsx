import Link from "next/link";
import Image from "next/image";
import ComoApostarEmEscanteios from "../img/como-apostar-em-escanteios.jpg";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
      <main className="bg-white min-h-full min-w-full p-4 w-full mxin-h-screen">
        <div className="flex w-100 justify-center items-center">
          <div className="w-100 lg:w-2/4">
            <Link href="/como-apostar-em-escanteios">
              <Image
                src={ComoApostarEmEscanteios}
                alt="Como Apostar em Escanteios" 
                className="transition-opacity hover:opacity-80"
              />
            </Link>
            <h1 className="text-3xl mt-4 mb-2 transition-all hover:opacity-80 hover:text-green-300">
              <Link href="/como-apostar-em-escanteios">
                Como apostar em escanteios?
              </Link>
            </h1>
            <p>
              Descubra estratégias inteligentes para apostar em escanteios e
              aumente suas chances de ganhar. Dicas essenciais para apostadores
              esportivos!
            </p>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
