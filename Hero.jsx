import { useState, useEffect } from 'react';
import gambarKarakter from '../assets/Karakter.png'; 

export default function Hero() {
  // State untuk Loading 3 Detik
  const [isLoading, setIsLoading] = useState(true);
  const [teksLoading, setTeksLoading] = useState('INITIALIZING DEAS PROTOCOL...');

  // State untuk Efek Muncul Teks Halaman 1 (Lambat & Berurutan)
  const [tampilOperational, setTampilOperational] = useState(false);
  const [tampilDan, setTampilDan] = useState(false);
  const [tampilSystem, setTampilSystem] = useState(false);
  const [tampilInfo, setTampilInfo] = useState(false);

  const [menuAktif, setMenuAktif] = useState(null);
  const menuPita = ['BERANDA', 'TENTANG', 'KARYA', 'KONTAK'];

  const [posisiMouse, setPosisiMouse] = useState({ x: -100, y: -100 });
  const [hoverKursor, setHoverKursor] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Urutan teks loading dalam waktu 3 detik
    const load1 = setTimeout(() => setTeksLoading('ACCESSING OPERATIONAL DATA...'), 800);
    const load2 = setTimeout(() => setTeksLoading('VERIFYING SYSTEM SECURITY...'), 1800);
    const load3 = setTimeout(() => setTeksLoading('SYSTEM ONLINE. WELCOME, DEAS.'), 2600);
    
    // Selesai loading tepat di 3 detik (3000ms)
    const selesaiLoad = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Efek kemunculan teks halaman 1 setelah loading selesai (berurutan & lambat)
    const t1 = setTimeout(() => setTampilOperational(true), 3200);
    const t2 = setTimeout(() => setTampilDan(true), 4200);
    const t3 = setTimeout(() => setTampilSystem(true), 5000);
    const t4 = setTimeout(() => setTampilInfo(true), 6000);

    const handleMouseMove = (e) => {
      setPosisiMouse({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(load1);
      clearTimeout(load2);
      clearTimeout(load3);
      clearTimeout(selesaiLoad);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="spider-verse-hero">
      
      {/* --- LAYAR LOADING JARVIS 3 DETIK --- */}
      {isLoading && (
        <div className="jarvis-loader-screen">
          <div className="loader-content">
            <div className="loader-arc">
              <div className="loader-inner-circle"></div>
            </div>
            <div className="loader-text-status">{teksLoading}</div>
            <div className="loader-bar-container">
              <div className="loader-bar-fill"></div>
            </div>
          </div>
        </div>
      )}

      {/* --- KURSOR ANIMASI KUSTOM --- */}
      <div 
        className={`custom-cursor ${hoverKursor ? 'hover' : ''}`}
        style={{ left: `${posisiMouse.x}px`, top: `${posisiMouse.y}px` }}
      ></div>

      {/* --- LAPISAN 1: BACKGROUND --- */}
      <div 
        className="layer-bg-belakang"
        style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0)` }}
      >
        <div className="bg-gradient-ironman"></div>
        <div className="bg-grid"></div>
        <div className="jaring-laba jaring-kiri"></div>
        <div className="jaring-laba jaring-kanan"></div>
      </div>

      {/* --- NAVBAR TENGAH --- */}
      <nav className="nav-baru">
        <div className="nav-logo animasi-masuk-1" onMouseEnter={() => setHoverKursor(true)} onMouseLeave={() => setHoverKursor(false)}>DEAS FEBRIANTO</div>
        <div className="nav-links animasi-masuk-1">
          {['BERANDA', 'TENTANG', 'LAYANAN', 'KARYA', 'KONTAK'].map((menu, i) => (
            <a 
              key={i} 
              href={`#${menu.toLowerCase()}`}
              onMouseEnter={() => setHoverKursor(true)}
              onMouseLeave={() => setHoverKursor(false)}
            >
              {menu}
            </a>
          ))}
        </div>
      </nav>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@700&family=Space+Mono:wght@400;700&display=swap');

          body { cursor: default; overflow-x: hidden; }

          /* --- STYLE LOADING JARVIS 3 DETIK --- */
          .jarvis-loader-screen {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background-color: #060913; z-index: 999999;
            display: flex; justify-content: center; align-items: center;
            animation: fadeOutLoader 0.5s ease 2.8s forwards;
          }

          @keyframes fadeOutLoader {
            0% { opacity: 1; visibility: visible; }
            100% { opacity: 0; visibility: hidden; }
          }

          .loader-content {
            display: flex; flex-direction: column; align-items: center; gap: 20px;
          }

          .loader-arc {
            width: 100px; height: 100px; border: 3px dashed rgba(0, 212, 255, 0.4);
            border-top: 3px solid #00d4ff; border-radius: 50%;
            animation: putarLoader 1.5s linear infinite; display: flex; justify-content: center; align-items: center;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
          }

          .loader-inner-circle {
            width: 50px; height: 50px; border: 2px solid #ff3b30; border-radius: 50%;
            box-shadow: 0 0 20px rgba(255, 59, 48, 0.8); animation: putarLoaderReverse 1s linear infinite;
          }

          @keyframes putarLoader { 100% { transform: rotate(360deg); } }
          @keyframes putarLoaderReverse { 100% { transform: rotate(-360deg); } }

          .loader-text-status {
            font-family: 'Space Mono', monospace; font-size: 13px; color: #00d4ff;
            letter-spacing: 3px; text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
          }

          .loader-bar-container {
            width: 260px; height: 4px; background: rgba(255, 255, 255, 0.1);
            border-radius: 2px; overflow: hidden; position: relative;
          }

          .loader-bar-fill {
            position: absolute; top: 0; left: 0; height: 100%; width: 0%;
            background: linear-gradient(90deg, #00d4ff, #00ff00);
            box-shadow: 0 0 10px #00ff00;
            animation: isiBar 3s cubic-bezier(0.1, 1, 0.3, 1) forwards;
          }

          @keyframes isiBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }

          /* --- KURSOR & KONTEN --- */
          .custom-cursor {
            position: fixed;
            width: 30px; height: 30px;
            border: 2px solid #00d4ff; border-radius: 50%;
            pointer-events: none; transform: translate(-50%, -50%);
            transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
            z-index: 99999; box-shadow: 0 0 15px #00d4ff;
          }

          .custom-cursor.hover {
            width: 60px; height: 60px;
            background-color: rgba(0, 212, 255, 0.2);
            border-color: #ffcc00; box-shadow: 0 0 25px #ffcc00;
          }

          /* --- EFEK KETIK SATU PERSATU YANG LAMBAT & HALUS --- */
          .animasi-ketik-custom {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            width: 0;
            animation: ketikPanjang 1.5s steps(15, end) forwards;
          }

          @keyframes ketikPanjang {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes munculDariBawah {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes karakterMasuk {
            0% { opacity: 0; transform: translateY(80px) scale(1.05); filter: drop-shadow(0 0 0px rgba(255,59,48,0)); }
            100% { opacity: 1; transform: translateY(0) scale(1.15); filter: drop-shadow(45px 45px 90px rgba(0,0,0,0.99)) drop-shadow(0 0 60px rgba(255, 59, 48, 0.6)); }
          }

          .animasi-masuk-1 { animation: munculDariBawah 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animasi-masuk-3 { opacity: 0; animation: karakterMasuk 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }

          .spider-verse-hero {
            min-height: 100vh; display: flex; align-items: flex-end; 
            position: relative; overflow: hidden; background-color: #0b0f19; 
          }

          .layer-bg-belakang {
            position: absolute; top: 0; left: 0; width: 100%; height: 130%;
            z-index: 1; pointer-events: none; will-change: transform;
          }

          .nav-baru {
            position: absolute; top: 0; left: 0; width: 100%; z-index: 50;
            display: flex; justify-content: center; align-items: center; padding: 25px 5%; 
            background: linear-gradient(to bottom, rgba(11, 15, 25, 0.95) 0%, transparent 100%); 
          }

          .nav-logo {
            position: absolute; left: 5%; font-family: 'Bebas Neue', sans-serif; font-size: 35px; color: #ffffff; 
            letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.5);
          }

          .nav-links { display: flex; gap: 25px; }
          .nav-links a {
            color: #b0b5c9; text-decoration: none; font-family: 'Space Mono', monospace;
            font-size: 13px; letter-spacing: 2px; transition: color 0.3s ease; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
          }
          .nav-links a:hover { color: #ffcc00; }

          .jaring-laba {
            position: absolute; top: 0; width: 450px; height: 450px;
            background-image: 
              radial-gradient(circle at 0 0, transparent 15%, rgba(255,255,255,0.08) 16%, transparent 17%, transparent 35%, rgba(255,255,255,0.08) 36%, transparent 37%, transparent 55%, rgba(255,255,255,0.08) 56%, transparent 57%, transparent 75%, rgba(255,255,255,0.08) 76%, transparent 77%),
              repeating-conic-gradient(from 0deg at 0 0, rgba(255,255,255,0.1) 0deg, rgba(255,255,255,0.1) 0.5deg, transparent 0.5deg, transparent 12deg);
            z-index: 1; pointer-events: none; opacity: 0.7;
          }
          .jaring-kiri { left: 0; border-radius: 0 0 100% 0; }
          .jaring-kanan { right: 0; transform: scaleX(-1); border-radius: 0 0 100% 0; }

          .bg-gradient-ironman {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: 
              radial-gradient(circle at 80% 20%, rgba(211, 26, 33, 0.4) 0%, transparent 45%), 
              radial-gradient(circle at 20% 80%, rgba(255, 204, 0, 0.25) 0%, transparent 40%), 
              radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.25) 0%, transparent 70%); 
            z-index: 1;
          }

          .bg-grid {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px; z-index: 0;
          }

          .hero-container {
            display: flex; align-items: flex-end; justify-content: space-between;
            width: 100%; max-width: 1300px; margin: auto;
            position: relative; z-index: 10; padding: 100px 5% 60px; height: 100vh;
          }

          .teks-kiri {
            flex: 1.2; display: flex; flex-direction: column; justify-content: center;
            position: relative; z-index: 20; padding-bottom: 80px; will-change: transform;
          }

          .teks-atas {
            font-family: 'Bebas Neue', sans-serif; font-size: 150px; color: #ffffff;
            line-height: 0.85; margin: 0; z-index: 3;
            text-shadow: 3px 3px 0px #020305, 6px 6px 0px #05070a, 9px 9px 0px #090d14, 12px 12px 0px #0b0f19, 20px 20px 40px rgba(0, 0, 0, 0.98), 0 0 50px rgba(255, 255, 255, 0.5);
            transition: transform 0.2s ease;
          }
          .teks-atas:hover { transform: skewX(-5deg) scale(1.02); }

          .baris-bawah { display: flex; align-items: flex-end; margin-top: -10px; position: relative; }
          .pembungkus-dan { position: relative; margin-right: 25px; display: flex; align-items: center; }

          .teks-kursif {
            font-family: 'Caveat', cursive; font-size: 80px; color: #6ee6d3; 
            line-height: 0.7; position: relative; z-index: 3;
            transform: translateY(15px) rotate(-5deg); 
            text-shadow: 3px 3px 10px rgba(0,0,0,0.9), 0 0 20px rgba(110, 230, 211, 0.8);
          }

          .garis-rays {
            position: absolute; left: -30px; top: 50%; transform: translateY(-50%) scaleX(-1);
            width: 350px; height: 300px;
            background: repeating-conic-gradient(from 200deg at 100% 50%, transparent 0deg, transparent 5deg, #6ee6d3 5.3deg, transparent 5.6deg);
            -webkit-mask-image: linear-gradient(to right, transparent 5%, black 80%);
            mask-image: linear-gradient(to right, transparent 5%, black 80%);
            z-index: 1; opacity: 0.8;
          }

          .teks-bawah {
            font-family: 'Bebas Neue', sans-serif; font-size: 150px; line-height: 0.8; margin: 0; z-index: 2;
            background: linear-gradient(to bottom right, #ffb86c 0%, #ff5e62 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            filter: drop-shadow(6px 6px 0px rgba(2,3,5,0.98)) drop-shadow(12px 12px 0px rgba(11,15,25,0.95)) drop-shadow(20px 20px 50px rgba(255, 94, 98, 0.9));
            transition: transform 0.2s ease;
          }
          .teks-bawah:hover { transform: skewX(-5deg) scale(1.02); }

          .info-bawah {
            display: flex; gap: 40px; margin-top: 50px;
            border-top: 1px solid rgba(255,255,255,0.25); padding-top: 25px;
            font-family: 'Space Mono', monospace;
          }

          .info-blok p { margin: 0; }
          .info-label { 
            color: #6ee6d3; font-size: 12px; font-weight: 700; text-transform: uppercase; 
            margin-bottom: 8px !important; letter-spacing: 2px; text-shadow: 2px 2px 5px rgba(0,0,0,0.9);
          }
          .info-isi { color: #d0d5e9; font-size: 12px; line-height: 1.6; max-width: 160px; text-shadow: 2px 2px 5px rgba(0,0,0,0.95); }

          .visual-kanan {
            flex: 1; display: flex; justify-content: center; align-items: flex-end; 
            position: relative; height: 100%; will-change: transform;
          }

          .cincin-belakang {
            position: absolute; top: 15%; left: 50%; transform: translateX(-50%);
            width: 250px; height: 250px; border: 2px solid #ff3b30; border-radius: 50%;
            box-shadow: 0 0 60px rgba(211, 26, 33, 1); z-index: 1; 
          }

          .arc-reactor-bg {
            position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%);
            width: 130px; height: 130px;
            background: radial-gradient(circle, #ffffff 10%, #00d4ff 40%, transparent 70%);
            box-shadow: 0 0 80px #00d4ff, inset 0 0 45px #00d4ff; border-radius: 50%;
            z-index: 2; opacity: 1; animation: denyutArc 3s ease-in-out infinite;
          }

          .arc-reactor-bg::after {
            content: ''; position: absolute; top: -22px; left: -22px; right: -22px; bottom: -22px;
            border: 3px dashed rgba(0, 212, 255, 0.9); border-radius: 50%; animation: putarArc 10s linear infinite;
          }

          @keyframes denyutArc { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; } }
          @keyframes putarArc { 100% { transform: rotate(360deg); } }

          .gambar-karakter-wrapper {
            position: relative; width: 100%; max-width: 650px; max-height: 90vh;
            z-index: 5; display: flex; justify-content: center; align-items: flex-end;
          }

          .gambar-karakter {
            width: 100%; max-height: 90vh; object-fit: contain; object-position: bottom;
            display: block; transform-origin: bottom center;
          }

          .pita-merah-bawah {
            position: absolute; bottom: 0; left: -5%; width: 110%;
            background: linear-gradient(90deg, #d31a21, #ffcc00, #d31a21); background-size: 200% auto;
            display: flex; align-items: center; padding: 12px 0; z-index: 40;
            transform: rotate(-1deg); box-shadow: 0 -20px 50px rgba(211, 26, 33, 1);
            border-top: 2px solid #fff; border-bottom: 2px solid #fff;
            overflow: hidden; white-space: nowrap; animation: gerakPita 10s linear infinite;
          }
          @keyframes gerakPita { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }

          .marquee-content { display: flex; align-items: center; flex-shrink: 0; animation: berjalanKeKanan 25s linear infinite; }
          @keyframes berjalanKeKanan { 0% { transform: translateX(-100%); } 100% { transform: translateX(0%); } }

          .item-pita {
            color: #ffffff; font-family: 'Bebas Neue', sans-serif; font-size: 26px;
            letter-spacing: 2px; cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative; text-shadow: 2px 2px 0px #000, 4px 4px 10px rgba(0,0,0,0.8);
          }
          .pemisah-pita { color: rgba(255,255,255,0.5); font-size: 20px; font-family: sans-serif; }
          .item-pita.aktif, .item-pita:hover { color: #ffcc00; transform: scale(1.3) translateY(-3px); text-shadow: 3px 3px 0px #000; z-index: 45; }

          @media (max-width: 1024px) {
            .teks-atas, .teks-bawah { font-size: 120px; } .teks-kursif { font-size: 70px; }
            .pita-merah-bawah { padding: 8px 0; } .item-pita { font-size: 20px; } .nav-links { display: none; } 
          }
          @media (max-width: 768px) {
            .hero-container { flex-direction: column; height: auto; padding-top: 80px; }
            .teks-kiri { padding-bottom: 30px; } .visual-kanan { height: 50vh; } .jaring-laba { width: 250px; height: 250px; }
          }
        `}
      </style>

      <div className="hero-container">
        
        <div 
          className="teks-kiri"
          style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0)` }}
        >
          {/* Teks 1: OPERATIONAL */}
          <div style={{ minHeight: '130px' }}>
            {tampilOperational && (
              <div className="animasi-ketik-custom">
                <h1 
                  className="teks-atas"
                  onMouseEnter={() => setHoverKursor(true)}
                  onMouseLeave={() => setHoverKursor(false)}
                >
                  OPERATIONAL
                </h1>
              </div>
            )}
          </div>
          
          <div className="baris-bawah">
            <div className="pembungkus-dan">
              <div className="garis-rays"></div>
              <div style={{ minHeight: '60px' }}>
                {tampilDan && (
                  <div className="animasi-ketik-custom" style={{ animationDuration: '0.8s' }}>
                    <span className="teks-kursif">dan</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Teks 2: SYSTEM */}
            <div style={{ minHeight: '130px' }}>
              {tampilSystem && (
                <div className="animasi-ketik-custom" style={{ animationDuration: '1.2s' }}>
                  <h1 
                    className="teks-bawah"
                    onMouseEnter={() => setHoverKursor(true)}
                    onMouseLeave={() => setHoverKursor(false)}
                  >
                    SYSTEM
                  </h1>
                </div>
              )}
            </div>
          </div>

          {/* Info Bawah */}
          <div style={{ minHeight: '100px' }}>
            {tampilInfo && (
              <div className="info-bawah animasi-masuk-1">
                <div className="info-blok">
                  <p className="info-label">ROLE</p>
                  <p className="info-isi">Data & Operational<br/>System Specialist</p>
                </div>
                <div className="info-blok">
                  <p className="info-label">FOKUS</p>
                  <p className="info-isi">Efisiensi anggaran, manajemen aset & resolusi data.</p>
                </div>
                <div className="info-blok">
                  <p className="info-label">STATUS</p>
                  <p className="info-isi">Sistem Aktif<br/>Verifikasi Akurat</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div 
          className="visual-kanan animasi-masuk-3"
          style={{ transform: `translate3d(0, ${scrollY * -0.3}px, 0)` }}
        >
          <div className="cincin-belakang"></div>
          <div className="arc-reactor-bg"></div>
          
          <div className="gambar-karakter-wrapper">
            <img 
              src={gambarKarakter} 
              alt="Karakter Iron Man" 
              className="gambar-karakter"
            />
          </div>
        </div>
      </div>

      <div className="pita-merah-bawah">
        {[1, 2, 3, 4].map((grup) => (
          <div key={grup} className="marquee-content">
            {menuPita.map((item, index) => (
              <span key={`${grup}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginRight: '20px', position: 'relative', zIndex: 2 }}>
                <span 
                  className={`item-pita ${menuAktif === index ? 'aktif' : ''}`}
                  onClick={() => setMenuAktif(index)}
                  onMouseEnter={() => setHoverKursor(true)}
                  onMouseLeave={() => setHoverKursor(false)}
                >
                  {item}
                </span>
                <span className="pemisah-pita">-</span>
              </span>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}