import { useState } from 'react';
import roData from '../assets/ro-data.png'; 
import trekingAset from '../assets/Treking-Aset.png'; 
import stockCard from '../assets/stock-card.png';
import procurmanPO from '../assets/Procurman-PO.png';

export default function Karya() {
  const [filterAktif, setFilterAktif] = useState('ALL');
  const [projectTerpilih, setProjectTerpilih] = useState(null);

  const daftarKarya = [
    {
      id: 1,
      judul: 'STARK ASSET TRACKING SYSTEM',
      kategori: 'ASSET MGT',
      deskripsi: 'Sistem monitoring & pelacakan aset perusahaan mencakup 161 Aset Tetap dan 4.131 Perlengkapan secara akurat.',
      detail: 'Sistem ini mengelola verifikasi pengajuan data (ro-data) serta pelacakan mutasi fisik (Treking-Aset). Fokus pelacakan mencakup 161 Aset Tetap dan 4.131 Perlengkapan, meliputi rotasi Aset Tetap (Mesin Kopi antar outlet, 2 Unit Motor dari Outlet ke GA, serta Alat Screening Covid-19) serta alur pergerakan Perlengkapan dari Finance ke Outlet tujuan lengkap dengan tanggal pembelian, akun input, dan status validasinya.',
      tech: ['React', 'Asset Analytics', 'Stark Database'],
      status: 'ONLINE // VERIFIED',
      menggunakanDuaGambar: true,
      gambar1: roData,
      gambar2: trekingAset
    },
    {
      id: 2,
      judul: 'GA FACILITY & VENDOR HUB',
      kategori: 'GENERAL AFFAIR',
      deskripsi: 'Portal manajemen fasilitas gedung, pemeliharaan inventaris mess, serta penjadwalan vendor dan supplier.',
      detail: 'Mengoptimalkan alur kerja General Affair dalam menangani perbaikan fasilitas, pengadaan kebutuhan operasional harian, serta evaluasi performa vendor secara berkala.',
      tech: ['Procurement Flow', 'Vendor Management', 'UI/UX'],
      status: 'ACTIVE PROTOCOL',
      menggunakanDuaGambar: false
    },
    {
      id: 3,
      judul: 'PROCUREMENT & INVENTORY CONTROL',
      kategori: 'PROCUREMENT',
      deskripsi: 'Sistem pengadaan barang terpusat untuk efisiensi anggaran dan kontrol stok gudang yang lebih ketat.',
      detail: 'Mengelola proses purchase order (PO), perbandingan penawaran supplier, pencatatan stock card, hingga pengawasan keluar-masuk barang logistik secara transparan dan terstruktur.',
      tech: ['Data Analysis', 'Inventory System', 'Logistics'],
      status: 'OPTIMIZED',
      menggunakanProcurement: true,
      gambarPO: procurmanPO,
      gambarStock: stockCard
    },
    {
      id: 4,
      judul: 'MULTIVERSE PORTFOLIO INTERACTIVE',
      kategori: 'WEB SYSTEM',
      deskripsi: 'Website portofolio pribadi bertema Spider-Verse dan Stark Tech dengan animasi kustom dan efek parallax.',
      detail: 'Dibangun menggunakan React dan Custom CSS murni, menampilkan pengalaman visual imersif dengan elemen holografik, layar loading Jarvis, serta interaksi komik dinamis.',
      tech: ['React.js', 'CSS Parallax', 'UI Animation'],
      status: 'ONLINE // V.2.6',
      menggunakanDuaGambar: false
    }
  ];

  const daftarKategori = ['ALL', 'ASSET MGT', 'GENERAL AFFAIR', 'PROCUREMENT', 'WEB SYSTEM'];

  const karyaTampil = filterAktif === 'ALL' 
    ? daftarKarya 
    : daftarKarya.filter(item => item.kategori === filterAktif);

  return (
    <section id="karya" className="spider-verse-karya">
      <div className="bg-karya-grid"></div>
      <div className="spider-dots-overlay"></div>

      <div className="karya-container">
        <div className="karya-header">
          <span className="subtitle-tech">// SECTION: STARK_ARCHIVES_03</span>
          <h2 className="karya-title">
            FEATURED <span className="teks-cyan">PROJECTS</span>
          </h2>
        </div>

        <div className="karya-filters">
          {daftarKategori.map((kat, index) => (
            <button
              key={index}
              className={`filter-btn ${filterAktif === kat ? 'aktif' : ''}`}
              onClick={() => setFilterAktif(kat)}
            >
              {kat}
            </button>
          ))}
        </div>

        <div className="karya-grid">
          {karyaTampil.map((karya) => (
            <div 
              key={karya.id} 
              className="karya-card"
              onClick={() => setProjectTerpilih(karya)}
            >
              <div className="stark-corner top-left"></div>
              <div className="stark-corner bottom-right"></div>
              
              <div className="karya-card-header">
                <span className="karya-kategori-tag">{karya.kategori}</span>
                <span className="karya-status-indicator">{karya.status}</span>
              </div>

              <h3 className="karya-card-title">{karya.judul}</h3>
              <p className="karya-card-desc">{karya.deskripsi}</p>

              <div className="karya-tech-stack">
                {karya.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="karya-action-link">
                [ AKSES DETAIL SYSTEM ]
              </div>
            </div>
          ))}
        </div>
      </div>

      {projectTerpilih && (
        <div className="modal-overlay" onClick={() => setProjectTerpilih(null)}>
          <div className="modal-content modal-lebar" onClick={(e) => e.stopPropagation()}>
            <button className="tutup-modal" onClick={() => setProjectTerpilih(null)}>[X] CLOSE SYSTEM</button>
            <div className="modal-corner top-left"></div>
            <div className="modal-corner bottom-right"></div>

            <div className="modal-isi">
              <span className="subtitle-tech">// FILE SPEC: {projectTerpilih.kategori}</span>
              <h2 className="modal-judul">{projectTerpilih.judul} <span className="kedip">|</span></h2>
              
              <p className="modal-teks">
                <strong className="modal-highlight">Ringkasan:</strong> {projectTerpilih.deskripsi}
              </p>
              
              <p className="modal-teks">
                <strong className="modal-highlight">Implementasi & Peran:</strong> {projectTerpilih.detail}
              </p>

              {/* Tampilan Gambar untuk Asset Mgt */}
              {projectTerpilih.menggunakanDuaGambar && (
                <div className="modal-dashboard-preview">
                  <div className="preview-label">MODULE 1: RO-DATA & REQUEST VERIFICATION</div>
                  <div className="preview-image-container" style={{ marginBottom: '25px' }}>
                    <img src={projectTerpilih.gambar1} alt="RO Data Pengajuan" className="gambar-dashboard-asli" />
                  </div>

                  <div className="preview-label">MODULE 2: TREKING-ASET & MOVEMENT LOG</div>
                  <div className="preview-image-container">
                    <img src={projectTerpilih.gambar2} alt="Dashboard Treking Aset" className="gambar-dashboard-asli" />
                  </div>
                  
                  <div className="stark-stats-row" style={{ marginTop: '20px' }}>
                    <div className="stat-box">
                      <span className="stat-num">161</span>
                      <span className="stat-lbl">Aset Tetap</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">4.131</span>
                      <span className="stat-lbl">Perlengkapan</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">6 Item</span>
                      <span className="stat-lbl">Fokus Tracking</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tampilan Gambar untuk Procurement & Inventory Control (Stock Card & PO) */}
              {projectTerpilih.menggunakanProcurement && (
                <div className="modal-dashboard-preview">
                  <div className="preview-label">MODULE 1: PROCUREMENT PURCHASE ORDER (PO)</div>
                  <div className="preview-image-container" style={{ marginBottom: '25px' }}>
                    <img src={projectTerpilih.gambarPO} alt="Procurement PO" className="gambar-dashboard-asli" />
                  </div>

                  <div className="preview-label">MODULE 2: INVENTORY STOCK CARD CONTROL</div>
                  <div className="preview-image-container">
                    <img src={projectTerpilih.gambarStock} alt="Stock Card Inventory" className="gambar-dashboard-asli" />
                  </div>
                </div>
              )}

              <div className="modal-tech-wrapper" style={{ marginTop: '25px' }}>
                <span className="info-label" style={{ display: 'block', marginBottom: '10px' }}>TECH & PROTOCOLS USED:</span>
                <div className="karya-tech-stack">
                  {projectTerpilih.tech.map((t, i) => (
                    <span key={i} className="tech-badge" style={{ fontSize: '12px', padding: '6px 12px' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="garis-pindai"></div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .spider-verse-karya {
            min-height: 100vh; position: relative;
            background-color: #060913; padding: 100px 5%;
            overflow: hidden; display: flex; flex-direction: column; justify-content: center;
          }
          .bg-karya-grid {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-image: linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px; z-index: 1; pointer-events: none;
          }
          .spider-dots-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-image: radial-gradient(rgba(255, 59, 48, 0.08) 15%, transparent 16%);
            background-size: 20px 20px; z-index: 1; pointer-events: none;
          }
          .karya-container { max-width: 1200px; width: 100%; margin: 0 auto; position: relative; z-index: 10; }
          .karya-header { margin-bottom: 30px; }
          .karya-title { font-family: 'Bebas Neue', sans-serif; font-size: 70px; color: #fff; margin: 5px 0 0 0; letter-spacing: 2px; }
          .teks-cyan { color: #00d4ff; text-shadow: 0 0 20px rgba(0,212,255,0.5); }
          .karya-filters { display: flex; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; }
          .filter-btn {
            background: rgba(11, 15, 25, 0.8); border: 1px solid rgba(0, 212, 255, 0.3);
            color: #b0b5c9; font-family: 'Space Mono', monospace; font-size: 12px;
            padding: 8px 18px; cursor: pointer; letter-spacing: 1px; transition: all 0.3s ease;
          }
          .filter-btn:hover, .filter-btn.aktif {
            background: rgba(0, 212, 255, 0.15); border-color: #00d4ff; color: #00d4ff;
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.3); transform: translateY(-2px);
          }
          .karya-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; }
          .karya-card {
            background: rgba(11, 15, 25, 0.9); border: 1px solid rgba(0, 212, 255, 0.2);
            padding: 30px; position: relative; cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex; flex-direction: column; justify-content: space-between;
          }
          .karya-card:hover {
            transform: translateY(-8px); border-color: #ffcc00;
            box-shadow: 0 10px 30px rgba(255, 204, 0, 0.2); background: rgba(15, 22, 36, 0.95);
          }
          .stark-corner { position: absolute; width: 12px; height: 12px; border-color: #00d4ff; border-style: solid; }
          .stark-corner.top-left { top: 0; left: 0; border-width: 2px 0 0 2px; }
          .stark-corner.bottom-right { bottom: 0; right: 0; border-width: 0 2px 2px 0; }
          .karya-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-family: 'Space Mono', monospace; font-size: 10px; }
          .karya-kategori-tag { color: #ffcc00; background: rgba(255, 204, 0, 0.1); padding: 4px 8px; border: 1px solid rgba(255, 204, 0, 0.3); }
          .karya-status-indicator { color: #00ff00; text-shadow: 0 0 5px #00ff00; }
          .karya-card-title { font-family: 'Bebas Neue', sans-serif; font-size: 26px; color: #fff; margin-bottom: 12px; letter-spacing: 1px; }
          .karya-card-desc { font-family: 'Space Mono', monospace; font-size: 12px; color: #b0b5c9; line-height: 1.6; margin-bottom: 20px; }
          .karya-tech-stack { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
          .tech-badge { font-family: 'Space Mono', monospace; font-size: 10px; color: #6ee6d3; background: rgba(110, 230, 211, 0.1); border: 1px solid rgba(110, 230, 211, 0.3); padding: 3px 8px; }
          .karya-action-link { font-family: 'Space Mono', monospace; font-size: 11px; color: #00d4ff; letter-spacing: 1px; transition: color 0.2s ease; }
          .karya-card:hover .karya-action-link { color: #ffcc00; text-shadow: 0 0 8px #ffcc00; }
          .modal-lebar { max-width: 1000px !important; width: 95% !important; }
          .modal-dashboard-preview { margin-top: 20px; }
          .preview-label { font-family: 'Space Mono', monospace; font-size: 11px; color: #00d4ff; letter-spacing: 1px; margin-bottom: 8px; }
          .preview-image-container {
            width: 100%; border: 1px solid rgba(0, 212, 255, 0.4); background: #030508;
            padding: 8px; border-radius: 4px; box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
            margin-bottom: 15px;
          }
          .gambar-dashboard-asli { width: 100%; height: auto; display: block; border-radius: 2px; }
          .stark-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px; }
          .stat-box { background: rgba(0, 212, 255, 0.05); border: 1px solid rgba(0, 212, 255, 0.3); padding: 12px; text-align: center; }
          .stat-num { display: block; font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: #ffcc00; }
          .stat-lbl { font-family: 'Space Mono', monospace; font-size: 10px; color: #b0b5c9; }
          @media (max-width: 768px) {
            .karya-title { font-size: 50px; }
            .stark-stats-row { grid-template-columns: 1fr; }
          }
        `}
      </style>
    </section>
  );
}