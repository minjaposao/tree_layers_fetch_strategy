import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white/90 shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left side: Info */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Kontaktirajte nas</h2>
              <p className="text-sm mb-8">
                Tu smo za sva pitanja, sugestije i saradnje. Slobodno nas kontaktirajte putem forme ili direktno.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +381 64 123 4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> kontakt@primer.rs
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Beograd, Srbija
                </li>
              </ul>
            </div>
            <p className="text-xs opacity-70 mt-8">© {new Date().getFullYear()} Primer. Sva prava zadržana.</p>
          </div>

          {/* Right side: Form */}
          <form className="p-8 space-y-6 bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
              <input
                type="text"
                placeholder="Vaše ime"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email adresa</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Poruka</label>
              <textarea
                rows={5}
                placeholder="Napišite svoju poruku..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Pošalji poruku
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
