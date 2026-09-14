import yumiImg from "../assets/Yumi.jpg";
import anggarinImg from "../assets/Anggarin.jpg";
import camImg from "../assets/CAM.jpg";
import innerwellImg from "../assets/Innerwell.jpg";
import askCoreImg from "../assets/AskLo.jpg";
import getAbsenImg from "../assets/Getabsen.jpg";
import p2pImg from "../assets/P2P.jpg";
import pacarkuImg from "../assets/Pacarku.jpg";
import pacarku1Img from "../assets/Pacarku-1.jpg";
import pacarku2Img from "../assets/Pacarku-2.jpg";
import spiImg from "../assets/SPI.jpg";
import secBotImg from "../assets/SecBot.jpg";
import custodialImg from "../assets/Custodial Apps.jpg";
import fluxHrImg from "../assets/Flux HR.jpg";
import aiCafeImg from "../assets/AI Caffe.jpg";
import arsivaImg from "../assets/Arsiva.jpg";
import causoraImg from "../assets/Causora.jpg";
import custoRouterImg from "../assets/CustoRouter.jpg";
import custoRouter1Img from "../assets/CustoRouter-1.jpg";
import foomImg from "../assets/Foom.jpg";

export const projects = [
  {
    title: "AskCore",
    description:
      "Aplikasi chat AI buat mobile yang connect ke beberapa LLM sekaligus. Bisa streaming response, edit pesan, search riwayat chat, dan ada keyboard shortcut juga. Backendnya jalan di VPS pakai SSE buat real time streaming.",
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
    title: "Custodial Apps",
    description:
      "Aplikasi manajemen aset digital dengan fitur custodial wallet, tracking transaksi, dan dashboard monitoring. Dibangun dengan arsitektur modular dan fokus pada keamanan serta kemudahan pengguna.",
    tags: ["React", "TypeScript", "Node.js", "Web3"],
    image: custodialImg,
    link: "https://github.com/iyantama9/custodial-apps",
  },
  {
    title: "CustoRouter",
    description:
      "AI gateway self hosted dengan API yang kompatibel dengan OpenAI dan Anthropic. Mengelola routing multi provider, rotasi credential, fallback, kuota client, observability real time, dan memory semantik dalam satu control plane.",
    tags: ["Python", "FastAPI", "PostgreSQL", "LLM Gateway", "Docker"],
    images: [custoRouterImg, custoRouter1Img],
    link: "https://github.com/iyantama9/iyanrouter-llm",
  },
  {
    title: "Flux HR",
    description:
      "Platform rekrutmen internal untuk mengelola lowongan, lamaran, pipeline kandidat, tes, interview, analytics, dan analisis CV berbantuan AI. Mendukung banyak entitas dengan akses admin yang terpisah.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Private"],
    image: fluxHrImg,
    link: "#",
  },
  {
    title: "SecBot Security Scanner Bot",
    description:
      "Telegram bot yang bisa scan vulnerability suatu website atau repository secara otomatis. Terintegrasi sama AI buat analisis hasil scan dan kasih rekomendasi perbaikan.",
    tags: ["Python", "Telegram Bot", "Security Scan", "AI Analysis"],
    image: secBotImg,
    link: "#",
  },
  {
    title: "Yumi Discord Payment Bot",
    description:
      "Bot Discord yang handle pembayaran otomatis lewat Midtrans. User bisa beli role, bot assign role berdasarkan status pembayaran, dan semua transaksi tercatat di Google Spreadsheet.",
    tags: ["Python FastAPI", "discord.py", "Midtrans", "GCP VM"],
    image: yumiImg,
    link: "https://github.com/iyantama9/Crowned-Traders-Payment-BOT",
  },
  {
    title: "Anggar.in",
    description:
      "Capstone project Bangkit Academy, aplikasi pengelolaan anggaran pribadi. Hampir seluruh backend dikerjain sendiri, mulai dari desain ERD sampai implementasi API. Ada fitur prediksi pengeluaran pakai ML juga.",
    tags: ["Express.js", "TensorFlow", "Kotlin", "MySQL", "GCP"],
    image: anggarinImg,
    link: "https://github.com/Anggar-In",
  },
  {
    title: "Cah Apik Messenger CAM",
    description:
      "Aplikasi chat real time yang support private message dan group chat. Pakai WebSocket biar pesan langsung nyampe tanpa delay. Frontend React + TypeScript, backend Express + Socket.IO.",
    tags: ["React", "TypeScript", "Express.js", "Socket.IO", "MySQL"],
    image: camImg,
    link: "https://github.com/iyantama9/CAM-Frontend",
  },
  {
    title: "Innerwell Klinic",
    description:
      "Sistem informasi klinik kesehatan mental yang handle booking sesi konseling, manajemen pasien, dan pembayaran online via Midtrans. Full stack Laravel dari dashboard admin sampai landing page.",
    tags: ["Laravel", "MySQL", "Midtrans", "Blade"],
    image: innerwellImg,
    link: "https://github.com/InnerWell-Klinic",
  },
  {
    title: "P2P Encrypted Chat",
    description:
      "Aplikasi chat peer to peer yang terenkripsi, langsung konek antar device tanpa lewat server pusat. Semua pesan dienkripsi end to end. Dibangun pakai Python Flet buat UI desktopnya.",
    tags: ["Python", "Flet", "P2P Networking", "Encryption"],
    image: p2pImg,
    link: "https://github.com/iyantama9/P2P-Flet-py-Apps",
  },
  {
    title: "Arsiva",
    description:
      "Backend game edukasi bergaya visual novel untuk pelajar. Menangani cerita interaktif, kuis, puzzle, kelompok belajar, RBAC, serta gamifikasi berbasis XP, level, leaderboard, streak, dan daily task.",
    tags: ["Golang", "GoFiber", "PostgreSQL", "Redis", "Clean Architecture"],
    image: arsivaImg,
    link: "https://github.com/ArthaFreestyle/Arsiva",
  },
  {
    title: "FOOM Future Makers",
    description:
      "Platform rekrutmen fresh graduate end to end untuk FOOM Global, mulai dari lamaran multi step dan online assessment hingga AI interview serta dashboard HR dengan funnel dan scorecard kandidat.",
    tags: ["React", "Vite", "AI Interview", "Proctoring", "HR Dashboard"],
    image: foomImg,
    link: "#",
  },
  {
    title: "AI Cafe CoreSip",
    description:
      "Platform chat AI multi model untuk pengunjung coffee shop yang hanya aktif dari WiFi cafe. CoreSip menyediakan daily energy, streaming chat, riwayat percakapan, top up QR dari kasir, dan panel admin multi cafe.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Multi model AI"],
    image: aiCafeImg,
    link: "#",
  },
];

export const topProjects = [
  {
    title: "Causora",
    description:
      "Platform riset trading Smart Money Concepts yang memindai pasar perpetual, memvalidasi setup lintas timeframe, mengelola risiko dan lifecycle order, lalu menyimpan setiap keputusan sebagai evidence yang bisa diaudit.",
    tags: ["Python", "React", "Bybit API", "Docker", "LLM Research"],
    image: causoraImg,
    link: "#",
  },
  {
    title: "Pacarku.ai",
    description:
      "Salah satu Top Project Getcore.ID dan Flux yang fokus membangun platform pacar AI Antimainstream, dimana setiap karakter mempunyai otak, kepribadian, mood, dan backstory nya masing masing. Pacar AI juga dapat mengirim foto, video, voice note, bahkan Sleep call.",
    tags: ["React", "Express", "Redis", "PostgreSQL"],
    images: [pacarkuImg, pacarku1Img, pacarku2Img],
    link: "https://github.com/zufar27/pacarku-ai",
  },
  {
    title: "SPI Secure Parking Indonesia",
    description:
      "Sistem internal buat Secure Parking Indonesia, salah satu perusahaan pengelola parkir terbesar di Indonesia. Handle manajemen data parkir, monitoring area, dan reporting dashboard buat operasional harian.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    images: [spiImg],
    link: "#",
  },
];
