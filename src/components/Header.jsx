export default function Header() {
  return (
    <header className="w-full bg-gray-100 shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 border-2 border-gray-700"></div>
        <h1 className="text-sm">Ewerton Henrique</h1>
      </div>

      <nav className="flex gap-6 text-xs uppercase">
        <a href="#hero">Inicio</a>
        <a href="#projects">Projetos</a>
        <a href="#Technologies">Tecnologias</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
