export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-yellow-400 text-2xl font-black mb-4">CELLUX</h3>
          <p className="text-sm">Dyqani më premium i celularëve në Shqipëri.<br />2026 vibes.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigim</h4>
          <p className="text-sm space-y-2">Celularë • Oferta • Krahasim • Blog</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Kontakt</h4>
          <p className="text-sm">Tirana • +355 69 123 4567<br />info@cellux.al</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Pagesa të sigurta</h4>
          <div className="flex gap-4 text-3xl">💳 🏦 💰</div>
        </div>
      </div>
      <div className="text-center mt-16 text-xs">© 2026 CELLUX. All rights reserved.</div>
    </footer>
  );
}