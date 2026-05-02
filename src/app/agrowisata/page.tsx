export default function AgrowisataPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* 
        Halo! Ini adalah halaman gabungan untuk Farm dan Education (Agrowisata).
        Silakan tambahkan komponen atau konten dari Farm dan Education di sini.
        Tempat ini sudah disiapkan untuk dikerjakan.
      */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">
          Agrowisata (Farm & Education)
        </h1>
        
        {/* Konten Farm / Pertanian */}
        <section className="mb-12 border-2 border-dashed border-green-300 p-8 rounded-lg bg-green-50">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Bagian Pertanian (Farm)</h2>
          <p className="text-gray-600">Tempatkan komponen dan konten Farm di sini...</p>
          {/* Tambahkan komponen farm di bawah ini */}
          
        </section>

        {/* Konten Education / Edukasi */}
        <section className="border-2 border-dashed border-blue-300 p-8 rounded-lg bg-blue-50">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Bagian Edukasi (Education)</h2>
          <p className="text-gray-600">Tempatkan komponen dan konten Education di sini...</p>
          {/* Tambahkan komponen education di bawah ini */}
          
        </section>
      </div>
    </main>
  );
}
