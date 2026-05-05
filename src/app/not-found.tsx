import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-6">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
          404
        </h1>
        <h2 className="text-3xl font-bold text-foreground">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground max-w-md mx-auto text-lg">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia di Kampung Wisata Sicapit.
        </p>
        <div className="pt-4">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 rounded-full px-8">
            <Link href="/">
              <Home className="mr-2 w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}