export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur p-4 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-600 to-indigo-600 flex items-center justify-center font-bold">A76</div>
          <div>
            <div className="text-lg font-semibold">Artemis 76</div>
            <div className="text-xs text-slate-400">ISS 25th Anniversary — Space Apps</div>
          </div>
        </div>

        <div className="flex gap-6">
          <a href="#cupola" className="hover:text-sky-400">Cupola</a>
          <a href="#nbl" className="hover:text-sky-400">NBL</a>
          <a href="#info" className="hover:text-sky-400">Benefits</a>
        </div>
      </div>
    </nav>
  );
}
