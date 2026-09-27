import { useState, useEffect } from 'react';

export default function Tentang() {
  const [scrollY, setScrollY] = useState(0);
  const [panelAktif, setPanelAktif] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (panelAktif !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [panelAktif]);

  const tutupModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPanelAktif(null);
      setIsClosing(false);
    }, 400); 
  };

  return (
    <section id="tentang" className="spider-verse-about">
      
      {/* Background Halftone yang bergerak */}
      <div className="bg-halftone-base"></div>

      <div className="shattered-glass-bg">
        <div className="shattered-center"></div>
        {/* Rays yang berputar pelan secara FULL SCREEN */}
        <div className="shattered-rays"></div>
      </div>

      <div className="comic-container">
        
        <div className="about-header">
          <span className="subtitle-tech">// FILE: PARKER_STARK_02</span>
          <h2 className="about-title-comic title-shatter">
            <span className="s-char s-1 teks-merah">W</span>
            <span className="s-char s-2 teks-merah">H</span>
            <span className="s-char s-3 teks-merah">O</span>
            <span className="s-space"> </span>
            <span className="s-char s-4">A</span>
            <span className="s-char s-5">M</span>
            <span className="s-space"> </span>
            <span className="s-char s-6">I</span>
            <span className="s-char s-7 tanda-tanya">?</span>
          </h2>
        </div>

        <div className="comic-grid">
          
          <div className="comic-panel panel-tall" onClick={() => setPanelAktif(1)}>
            <div className="layer-stark">
              <div className="stark-corner top-left"></div>
              <div className="stark-corner bottom-right"></div>
              <h3 className="stark-heading">SYSTEM.PROFILE_</h3>
              <p className="stark-text">
                Saya adalah Deas Febrianto, profesional di bidang <span className="stark-highlight">General Affair, Asset Management, & Procurement</span>. 
                Berpengalaman mengelola aset dan operasional di PT Boedjang Group...
                <br/><br/><span className="stark-status blink-slow">[ KLIK UNTUK AKSES PENUH ]</span>
              </p>
              <div className="stark-status">STATUS: ONLINE</div>
            </div>
            
            <div className="layer-spider bg-merah">
              <h3 className="spider-heading">HELLO!</h3>
              <p className="spider-text">
                Dari General Affair hingga manajemen aset, saya pastikan operasional berjalan lancar!
              </p>
              <div className="spider-bam">THWIP!</div>
            </div>
          </div>

          <div className="comic-panel panel-wide-top" onClick={() => setPanelAktif(2)}>
            <div className="layer-stark">
              <h3 className="stark-heading">CORE.FOCUS_</h3>
              <div className="stark-grid-info">
                <div className="info-box">General Affair</div>
                <div className="info-box">Asset Mgt.</div>
                <div className="info-box">Procurement</div>
              </div>
              <div className="stark-status blink-slow mt-10">[ KLIK UNTUK 5 FOKUS UTAMA ]</div>
            </div>

            <div className="layer-spider bg-kuning">
              <h3 className="spider-heading teks-hitam">MY FOCUS</h3>
              <p className="spider-text teks-hitam bold">Mengelola GA, Aset, Pengadaan, Operasional, hingga Administrasi Data!</p>
              <div className="spider-pow">BAM!</div>
            </div>
          </div>

          <div className="comic-panel panel-wide-bottom" onClick={() => setPanelAktif(3)}>
            <div className="layer-stark">
              <h3 className="stark-heading">CAPABILITIES_</h3>
              <div className="skill-item">
                <div className="skill-info"><span>General Affair</span><span>85%</span></div>
                <div className="skill-bar"><div className="skill-progress" style={{width: '85%'}}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Asset Management</span><span>90%</span></div>
                <div className="skill-bar"><div className="skill-progress" style={{width: '90%'}}></div></div>
              </div>
              <div className="stark-status blink-slow mt-10">[ KLIK UNTUK 10 DIAGNOSTIK KEMAMPUAN ]</div>
            </div>

            <div className="layer-spider bg-putih">
               <h3 className="spider-heading teks-hitam">SKILLS</h3>
               <div className="spider-skill-text">ASSET MANAGEMENT <span className="spider-percent">90%</span></div>
               <div className="spider-skill-text">GENERAL AFFAIR <span className="spider-percent">85%</span></div>
            </div>
          </div>

        </div>
      </div>

      {panelAktif !== null && (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={tutupModal}>
          <div className={`modal-content ${isClosing ? 'closing-content' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="tutup-modal" onClick={tutupModal}>[X] CLOSE SYSTEM</button>
            <div className="modal-corner top-left"></div>
            <div className="modal-corner bottom-right"></div>
            
            {panelAktif === 1 && (
              <div className="modal-isi">
                <h2 className="modal-judul animasi-teks-1">SYSTEM.PROFILE_ <span className="kedip">|</span></h2>
                <div className="animasi-teks-2">
                  <p className="modal-teks">
                    Saya adalah Deas Febrianto, memiliki pengalaman di bidang <span className="modal-highlight">General Affair, Asset Management, Procurement</span>, dan operasional perusahaan. Selama bekerja, saya terbiasa menangani berbagai kebutuhan operasional, mulai dari pengelolaan aset, pengadaan barang, koordinasi dengan vendor dan supplier, pengawasan warehouse, hingga kebutuhan fasilitas perusahaan.
                  </p>
                  <p className="modal-teks">
                    Di <span className="modal-highlight">PT Boedjang Group</span>, saya berperan dalam mengelola dan mengontrol aset operasional yang digunakan oleh berbagai outlet dan warehouse. Saya terbiasa melakukan monitoring aset, stock opname, pencatatan dan dokumentasi distribusi aset, mengoordinasikan tim, serta memastikan kondisi dan ketersediaan aset tetap terkontrol.
                  </p>
                  <p className="modal-teks">
                    Saya memiliki latar belakang <span className="modal-highlight">D3 Sistem Informasi dari Universitas Bina Sarana Informatika dengan IPK 3,41</span>. Latar belakang tersebut mendukung kemampuan saya dalam pengolahan data, administrasi, penggunaan sistem, serta pemanfaatan teknologi untuk membantu pekerjaan sehari-hari.
                  </p>
                </div>
                <div className="garis-pindai"></div>
              </div>
            )}

            {panelAktif === 2 && (
              <div className="modal-isi">
                <h2 className="modal-judul animasi-teks-1">CORE.FOCUS_ <span className="kedip">|</span></h2>
                <div className="modal-grid-5 animasi-teks-2">
                  <div className="modal-box">
                    <h4 className="box-judul">01. GENERAL AFFAIR</h4>
                    <p className="box-teks">Pengelolaan fasilitas, kebutuhan operasional, mess, kendaraan, gedung, dan koordinasi kebutuhan perusahaan.</p>
                  </div>
                  <div className="modal-box">
                    <h4 className="box-judul">02. ASSET MANAGEMENT</h4>
                    <p className="box-teks">Kontrol aset, stock opname, monitoring warehouse, distribusi aset ke outlet, stock card, dan dokumentasi.</p>
                  </div>
                  <div className="modal-box">
                    <h4 className="box-judul">03. PROCUREMENT</h4>
                    <p className="box-teks">Pengadaan barang, pencarian kebutuhan, koordinasi vendor/supplier, serta proses administrasi pembelian.</p>
                  </div>
                  <div className="modal-box">
                    <h4 className="box-judul">04. OPERATIONAL MANAGEMENT</h4>
                    <p className="box-teks">Monitoring kegiatan operasional, koordinasi tim, memastikan kebutuhan lapangan terpenuhi, dan menjaga proses kerja tetap terkontrol.</p>
                  </div>
                  <div className="modal-box">
                    <h4 className="box-judul">05. ADMINISTRATION & DATA</h4>
                    <p className="box-teks">Pengelolaan dokumen, pencatatan, laporan, pengolahan data, dan penggunaan sistem untuk mendukung pekerjaan.</p>
                  </div>
                </div>
                <div className="garis-pindai"></div>
              </div>
            )}

            {panelAktif === 3 && (
              <div className="modal-isi">
                <h2 className="modal-judul animasi-teks-1">CAPABILITIES_ <span className="kedip">|</span></h2>
                <div className="animasi-teks-2 modal-grid-skills">
                  
                  <div className="modal-skill">
                    <div className="m-skill-info"><span>General Affair</span><span>85%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '85%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Asset Management</span><span>90%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '90%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Procurement & Purchasing</span><span>85%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '85%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Warehouse & Inventory Control</span><span>90%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '90%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Operational Management</span><span>85%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '85%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Administration & Reporting</span><span>85%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '85%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Vendor & Supplier Coordination</span><span>80%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '80%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Team Coordination</span><span>80%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '80%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Problem Solving</span><span>80%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '80%'}}></div></div>
                  </div>

                  <div className="modal-skill">
                    <div className="m-skill-info"><span>Data & System Administration</span><span>75%</span></div>
                    <div className="m-skill-bar"><div className="m-skill-progress" style={{width: '75%'}}></div></div>
                  </div>

                </div>
                <div className="garis-pindai"></div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Permanent+Marker&display=swap');

          .spider-verse-about {
            min-height: 100vh; position: relative;
            background-color: #0b0f19; padding: 100px 5% 100px;
            overflow: hidden; display: flex; align-items: center; justify-content: center;
          }

          .bg-halftone-base {
            position: absolute; top: -10%; left: -10%; width: 120%; height: 120%;
            background-image: radial-gradient(rgba(255,255,255,0.05) 15%, transparent 16%);
            background-size: 10px 10px; z-index: 1; pointer-events: none;
            animation: gerakHalftone 20s linear infinite;
          }
          
          @keyframes gerakHalftone {
            0% { background-position: 0px 0px; }
            100% { background-position: 100px 100px; }
          }

          .shattered-glass-bg {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; pointer-events: none; opacity: 0.25;
            overflow: hidden;
          }
          .shattered-center {
            position: absolute; top: 30%; right: 20%; width: 15px; height: 15px; margin-top: -7.5px; margin-right: -7.5px;
            background: #00d4ff; border-radius: 50%; box-shadow: 0 0 20px #00d4ff, 0 0 50px #fff;
          }
          
          .shattered-rays {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-image: repeating-conic-gradient(from 0deg at 80% 30%, transparent 0deg, transparent 4deg, #ffffff 4.1deg, transparent 4.3deg, transparent 15deg, #ffffff 15.1deg, transparent 15.3deg);
            mask-image: radial-gradient(circle at 80% 30%, black 0%, black 50%, transparent 80%);
            -webkit-mask-image: radial-gradient(circle at 80% 30%, black 0%, black 50%, transparent 80%);
            transform-origin: 80% 30%;
            animation: putarRays 90s linear infinite;
          }

          @keyframes putarRays {
            0% { transform: scale(3) rotate(0deg); }
            100% { transform: scale(3) rotate(360deg); }
          }

          .comic-container { max-width: 1200px; width: 100%; position: relative; z-index: 10; }
          
          .about-header { margin-bottom: 40px; position: relative; transform: rotate(-2deg); perspective: 1200px; }
          .subtitle-tech { font-family: 'Space Mono', monospace; color: #00d4ff; font-size: 12px; letter-spacing: 2px; background: #000; padding: 5px 10px; display: inline-block; border: 1px solid #00d4ff; margin-bottom: 15px;}
          
          .about-title-comic { 
            font-family: 'Bebas Neue', sans-serif; font-size: 90px; color: #ffffff; 
            margin: -5px 0 0 0; line-height: 0.9;
          }
          .title-shatter { cursor: crosshair; display: inline-block; }
          
          .s-char {
            display: inline-block;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease, color 0.4s ease, text-shadow 0.4s ease, filter 0.4s ease;
            text-shadow: 4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.8);
          }
          .s-space { display: inline-block; width: 25px; }
          .teks-merah { color: #d31a21; }
          .tanda-tanya { color: #ffcc00; font-family: 'Permanent Marker', cursive; font-size: 100px; text-shadow: 4px 4px 0px #000; position: absolute; transform-origin: bottom center;}

          .title-shatter:hover .s-1 { transform: translate3d(-50px, -30px, 150px) rotate(-25deg); color: #00d4ff; text-shadow: -4px 4px 0px #000, -10px 10px 0px #d31a21; }
          .title-shatter:hover .s-2 { transform: translate3d(-10px, -60px, 50px) rotate(15deg); opacity: 0.4; }
          .title-shatter:hover .s-3 { transform: translate3d(30px, -40px, 200px) rotate(-10deg); color: #ffcc00; text-shadow: 5px 5px 0px #000, 15px 15px 40px #ffcc00; }
          .title-shatter:hover .s-4 { transform: translate3d(-30px, 40px, 100px) rotate(35deg); color: #d31a21; text-shadow: -5px -5px 0px #000; }
          .title-shatter:hover .s-5 { transform: translate3d(20px, 60px, 250px) rotate(-20deg); filter: blur(3px); opacity: 0.6; }
          .title-shatter:hover .s-6 { transform: translate3d(60px, 30px, 120px) rotate(50deg); color: #00d4ff; }
          .title-shatter:hover .s-7 { transform: translate3d(90px, -30px, 300px) rotate(-20deg) scale(1.4); color: #ff3b30; text-shadow: 0 0 30px #ff3b30; }

          .comic-grid { display: grid; grid-template-columns: 1fr 1.2fr; grid-template-rows: auto auto; gap: 20px; }
          .panel-tall { grid-row: span 2; transform: rotate(1deg); }
          .panel-wide-top { transform: rotate(-1deg); }
          .panel-wide-bottom { transform: rotate(0.5deg); }

          .comic-panel {
            position: relative; background: #000; border: 5px solid #000; box-shadow: 10px 10px 0px rgba(0,0,0,0.8);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; cursor: pointer;
          }
          .comic-panel:hover { transform: translateY(-10px) rotate(0deg) scale(1.02); box-shadow: 0 0 30px rgba(0, 212, 255, 0.4); border-color: #00d4ff; }
          .comic-panel:active { transform: scale(0.98); }

          .layer-stark { position: relative; width: 100%; height: 100%; background: rgba(11, 15, 25, 0.95); padding: 40px; z-index: 1; }
          .stark-corner { position: absolute; width: 15px; height: 15px; border-color: #00d4ff; border-style: solid; }
          .stark-corner.top-left { top: 0; left: 0; border-width: 2px 0 0 2px; }
          .stark-corner.bottom-right { bottom: 0; right: 0; border-width: 0 2px 2px 0; }
          .stark-heading { font-family: 'Space Mono', monospace; color: #00d4ff; font-size: 16px; margin-bottom: 20px; letter-spacing: 1px; }
          .stark-text { font-family: 'Space Mono', monospace; color: #b0b5c9; font-size: 13px; line-height: 1.8; margin-bottom: 15px; }
          .stark-highlight { color: #ffcc00; font-weight: 700; }
          .stark-status { font-family: 'Space Mono', monospace; color: #00ff00; font-size: 11px; margin-top: 20px; text-shadow: 0 0 5px #00ff00; }
          .mt-10 { margin-top: 10px; }
          .blink-slow { animation: kedip 1.5s infinite; color: #00d4ff; text-shadow: 0 0 5px #00d4ff;}

          .stark-grid-info { display: flex; gap: 10px; }
          .info-box { flex: 1; border: 1px solid rgba(0,212,255,0.3); padding: 12px 5px; font-family: 'Space Mono', monospace; font-size: 11px; color: #fff; text-align: center; background: rgba(0,212,255,0.05); }

          .skill-item { margin-bottom: 12px; }
          .skill-info { display: flex; justify-content: space-between; font-family: 'Space Mono', monospace; font-size: 11px; color: #fff; margin-bottom: 4px; }
          .skill-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.1); }
          .skill-progress { height: 100%; background: #00d4ff; box-shadow: 0 0 10px #00d4ff; }

          .layer-spider {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 40px; z-index: 2;
            background-image: radial-gradient(#000 12%, transparent 13%); background-size: 8px 8px;
            transition: opacity 0.3s ease, transform 0.4s ease; transform-origin: center;
          }
          .comic-panel:hover .layer-spider { opacity: 0; transform: scale(1.1); pointer-events: none; }

          .bg-merah { background-color: #d31a21; } .bg-kuning { background-color: #ffcc00; } .bg-putih { background-color: #ffffff; }
          .spider-heading { font-family: 'Bebas Neue', sans-serif; font-size: 45px; color: #fff; text-shadow: 3px 3px 0px #000; letter-spacing: 2px; margin-bottom: 15px; transform: rotate(-2deg); }
          .spider-text { font-family: 'Permanent Marker', cursive; font-size: 18px; color: #fff; line-height: 1.4; text-shadow: 2px 2px 0px #000; }
          .teks-hitam { color: #000 !important; text-shadow: 2px 2px 0px #fff !important; }
          .bold { font-family: sans-serif; font-weight: 900; font-size: 16px; text-transform: uppercase; border: 2px solid #000; padding: 10px; background: #fff; box-shadow: 4px 4px 0 #000; }
          .spider-skill-text { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: #000; border-bottom: 3px solid #000; margin-bottom: 8px; display: flex; justify-content: space-between; }
          .spider-percent { font-family: 'Permanent Marker', cursive; color: #d31a21; }
          .spider-bam, .spider-pow { position: absolute; font-family: 'Permanent Marker', cursive; font-size: 50px; color: #ffcc00; text-shadow: 3px 3px 0px #000; z-index: 3; }
          .spider-bam { bottom: 20px; right: 20px; transform: rotate(-15deg); }
          .spider-pow { top: 20px; right: 20px; color: #ff3b30; transform: rotate(10deg); font-size: 60px; }

          .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(5, 7, 11, 0.95); backdrop-filter: blur(15px);
            z-index: 999999; display: flex; justify-content: center; align-items: center;
            opacity: 0; animation: overlayMasuk 0.4s forwards ease-out; padding: 20px;
          }
          .modal-overlay.closing { animation: overlayKeluar 0.4s forwards ease-in; }

          .modal-content {
            background: radial-gradient(circle at center, #121826 0%, #05070b 100%); border: 1px solid rgba(0, 212, 255, 0.5);
            max-width: 1000px; width: 100%; padding: 50px; position: relative;
            animation: modalPopUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, glitchEffect 0.5s ease-out forwards;
            overflow-y: auto; max-height: 90vh;
          }
          .modal-content.closing-content { animation: modalTutup 0.4s forwards cubic-bezier(0.6, -0.28, 0.735, 0.045); }

          .tutup-modal {
            position: absolute; top: 20px; right: 20px; background: transparent; border: 1px solid transparent;
            color: #00d4ff; font-family: 'Space Mono', monospace; font-size: 14px; cursor: pointer; letter-spacing: 2px; transition: all 0.2s ease; z-index: 10;
          }
          .tutup-modal:hover { color: #ff3b30; border-bottom: 1px solid #ff3b30; text-shadow: 0 0 10px #ff3b30; }

          .modal-corner { position: absolute; width: 30px; height: 30px; border-color: #00d4ff; border-style: solid; opacity: 0.5; }
          .modal-corner.top-left { top: 0; left: 0; border-width: 2px 0 0 2px; }
          .modal-corner.bottom-right { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

          .modal-isi { position: relative; z-index: 5; }
          .animasi-teks-1 { opacity: 0; animation: geserKanan 0.5s ease-out 0.2s forwards; }
          .animasi-teks-2 { opacity: 0; animation: geserAtas 0.5s ease-out 0.4s forwards; }

          .modal-judul { font-family: 'Space Mono', monospace; color: #00d4ff; font-size: 32px; letter-spacing: 3px; margin-bottom: 25px; border-bottom: 1px solid rgba(0,212,255,0.2); padding-bottom: 15px; text-shadow: 0 0 15px rgba(0, 212, 255, 0.5); }
          .kedip { animation: kedip 1s infinite; }
          .modal-teks { font-family: 'Space Mono', monospace; color: #d0d5e9; font-size: 15px; line-height: 1.8; margin-bottom: 20px; text-align: justify; }
          .modal-highlight { color: #ffcc00; font-weight: 700; text-shadow: 0 0 10px rgba(255, 204, 0, 0.3); }

          .modal-grid-5 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
          .modal-grid-5 .modal-box:nth-child(4), .modal-grid-5 .modal-box:nth-child(5) { grid-column: span 1.5; }
          
          .modal-box { border: 1px solid rgba(0,212,255,0.3); padding: 20px; background: rgba(0,212,255,0.02); transition: all 0.3s ease; }
          .modal-box:hover { background: rgba(0,212,255,0.1); transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,212,255,0.2); }
          .box-judul { font-family: 'Space Mono', monospace; color: #6ee6d3; font-size: 14px; margin-bottom: 10px; }
          .box-teks { font-family: 'Space Mono', monospace; color: #b0b5c9; font-size: 12px; line-height: 1.5; }

          /* Grid 2 Kolom untuk 10 Capabilities di Modal */
          .modal-grid-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

          .modal-skill { margin-bottom: 15px; }
          .m-skill-info { display: flex; justify-content: space-between; font-family: 'Space Mono', monospace; font-size: 13px; color: #fff; margin-bottom: 6px; letter-spacing: 1px; }
          .m-skill-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.1); overflow: hidden;}
          .m-skill-progress { height: 100%; background: linear-gradient(90deg, #00d4ff, #6ee6d3); box-shadow: 0 0 10px #00d4ff; }

          .garis-pindai { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: rgba(0, 212, 255, 0.5); box-shadow: 0 0 20px rgba(0, 212, 255, 0.8); animation: pindai 3s linear infinite; pointer-events: none; z-index: 10; }

          @keyframes overlayMasuk { from { opacity: 0; backdrop-filter: blur(0px); } to { opacity: 1; backdrop-filter: blur(15px); } }
          @keyframes overlayKeluar { from { opacity: 1; } to { opacity: 0; } }
          
          @keyframes modalPopUp { 
            0% { transform: scale(0.8) translateY(50px); opacity: 0; } 
            100% { transform: scale(1) translateY(0); opacity: 1; } 
          }
          @keyframes modalTutup {
            0% { transform: scale(1) translateY(0); opacity: 1; }
            100% { transform: scale(0.9) translateY(30px); opacity: 0; }
          }
          
          @keyframes glitchEffect {
            0% { box-shadow: -15px 0 0 rgba(211,26,33,0.8), 15px 0 0 rgba(0,212,255,0.8); }
            20% { box-shadow: 10px 5px 0 rgba(211,26,33,0.8), -10px -5px 0 rgba(0,212,255,0.8); transform: translate(-3px, 3px) scale(1.02); }
            40% { box-shadow: -5px -10px 0 rgba(211,26,33,0.8), 5px 10px 0 rgba(0,212,255,0.8); transform: translate(3px, -3px) scale(1.01); }
            60% { box-shadow: 10px 0 0 rgba(211,26,33,0.8), -10px 0 0 rgba(0,212,255,0.8); transform: translate(0, 0) scale(1); }
            100% { box-shadow: 0 0 60px rgba(0, 212, 255, 0.2), inset 0 0 30px rgba(0, 212, 255, 0.05); }
          }

          @keyframes geserKanan { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes geserAtas { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes kedip { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          @keyframes pindai { 0% { top: -10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 110%; opacity: 0; } }

          @media (max-width: 900px) {
            .comic-grid { grid-template-columns: 1fr; }
            .panel-tall { grid-row: span 1; }
            .about-title-comic { font-size: 60px; }
            .modal-content { padding: 30px; }
            .modal-grid-5 { grid-template-columns: 1fr; }
            .modal-grid-5 .modal-box:nth-child(4), .modal-grid-5 .modal-box:nth-child(5) { grid-column: span 1; }
            .modal-grid-skills { grid-template-columns: 1fr; }
            .modal-judul { font-size: 24px; }
            .modal-teks { font-size: 14px; }
          }
        `}
      </style>
    </section>
  );
}