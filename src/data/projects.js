import yumiImg from "../assets/Yumi.jpg";
import anggarinImg from "../assets/Anggarin.jpg";
import camImg from "../assets/CAM.jpg";
import innerwellImg from "../assets/Innerwell.jpg";
import askCoreImg from "../assets/AskCore.jpg";
import getAbsenImg from "../assets/Getabsen.jpg";
import p2pImg from "../assets/P2P.jpg";
import pacarkuImg from "../assets/Pacarku.jpg";
import spiImg from "../assets/SPI.jpg";
import secBotImg from "../assets/SecBot.jpg";

export const projects = [
  {
    title: "AskCore",
    description:
      "Aplikasi chat AI buat mobile yang connect ke beberapa LLM sekaligus. Bisa streaming response, edit pesan, search riwayat chat, dan ada keyboard shortcut juga. Backend-nya jalan di VPS pakai SSE buat real-time streaming.",
    tags: ["Dart", "Flutter", "SSE", "LLM Integration", "VPS"],
    image: askCoreImg,
    link: "https://github.com/iyantama9/AskCore",
  },
  {
    title: "GetAbsen",
    description:
      "Sistem absensi berbasis AI yang bisa deteksi wajah buat verifikasi kehadiran. Ada dashboard admin buat monitoring, client app buat user, dan AI service terpisah yang handle face recognition.",
    tags: ["React", "Express.js", "Python", "AI Face Recognition"],
    image: getAbsenImg,
    link: "https://github.com/iyantama9/GetAbsen",
  },
  {
    title: "Pacarku Landing Page",
    description:
      "Landing page premium buat platform Pacarku. Scroll-driven animation pakai 3D hero section, karakter yang gerak ngikutin scroll, responsive mobile-first, dan dark theme Cosmic Void.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: pacarkuImg,
    link: "https://github.com/iyantama9/pacarku-landing",
  },
  {
    title: "SecBot - Security Scanner Bot",
    description:
      "Telegram bot yang bisa scan vulnerability suatu website atau repository secara otomatis. Terintegrasi sama AI buat analisis hasil scan dan kasih rekomendasi perbaikan.",
    tags: ["Python", "Telegram Bot", "Security Scan", "AI Analysis"],
    image: secBotImg,
    link: "#",
  },
  {
    title: "Yumi - Discord Payment Bot",
    description:
      "Bot Discord yang handle pembayaran otomatis lewat Midtrans. User bisa beli role, bot assign role berdasarkan status pembayaran, dan semua transaksi tercatat di Google Spreadsheet.",
    tags: ["Python FastAPI", "discord.py", "Midtrans", "GCP VM"],
    image: yumiImg,
    link: "https://github.com/iyantama9/Crowned-Traders-Payment-BOT",
  },
  {
    title: "Anggar.in",
    description:
      "Capstone project Bangkit Academy — aplikasi pengelolaan anggaran pribadi. Hampir seluruh backend dikerjain sendiri, mulai dari desain ERD sampai implementasi API. Ada fitur prediksi pengeluaran pakai ML juga.",
    tags: ["Express.js", "TensorFlow", "Kotlin", "MySQL", "GCP"],
    image: anggarinImg,
    link: "#",
  },
  {
    title: "Cah Apik Messenger - CAM",
    description:
      "Aplikasi chat real-time yang support private message dan group chat. Pakai WebSocket biar pesan langsung nyampe tanpa delay. Frontend React + TypeScript, backend Express + Socket.IO.",
    tags: ["React", "TypeScript", "Express.js", "Socket.IO", "MySQL"],
    image: camImg,
    link: "https://github.com/iyantama9/CAM-Frontend",
  },
  {
    title: "Innerwell Klinic",
    description:
      "Sistem informasi klinik kesehatan mental yang handle booking sesi konseling, manajemen pasien, dan pembayaran online via Midtrans. Full-stack Laravel dari dashboard admin sampai landing page.",
    tags: ["Laravel", "MySQL", "Midtrans", "Blade"],
    image: innerwellImg,
    link: "#",
  },
  {
    title: "SPI UNS",
    description:
      "Sistem pengaduan internal kampus UNS. Mahasiswa bisa submit laporan pengaduan, track statusnya, dan admin bisa follow up langsung dari dashboard. Clean and simple, tapi fungsional.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    image: spiImg,
    link: "#",
  },
  {
    title: "P2P File Transfer",
    description:
      "Desktop app buat transfer file langsung antar device di jaringan lokal tanpa perlu cloud. Peer-to-peer murni, tinggal konek dan kirim. Dibangun pakai Python Flet buat UI-nya.",
    tags: ["Python", "Flet", "P2P Networking", "Desktop App"],
    image: p2pImg,
    link: "https://github.com/iyantama9/P2P-Flet-py-Apps",
  },
];
