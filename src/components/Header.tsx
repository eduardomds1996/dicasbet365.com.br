import Link from 'next/link'

export default function Header() {
    return (
      <header className="flex flex-row justify-between items-center p-4">
        <h1 className="text-4xl font-black text-green-300	">Dicas bet365</h1>
        <nav>
            <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                {/* <li>
                  <Link href="/recentes">Recentes</Link>
                </li> */}
            </ul>
        </nav>
      </header>
    );
  }
  