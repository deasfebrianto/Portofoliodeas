export default function Layanan() {
  const daftarLayanan = [
    { 
      id: '01', 
      judul: 'ASSET & INVENTORY CONTROL', 
      deskripsi: 'Pengelolaan warehouse, Stock Opname, tracking mutasi aset, serta investigasi selisih data aset dengan metode Root Cause Analysis (RCA).' 
    },
    { 
      id: '02', 
      judul: 'GENERAL AFFAIR & PROPERTY', 
      deskripsi: 'Pengelolaan fasilitas bangunan/properti perusahaan, pemeliharaan operasional, dan penanganan administrasi perpajakan terkait.' 
    },
    { 
      id: '03', 
      judul: 'PROCUREMENT & VENDOR RELATIONS', 
      deskripsi: 'Pengadaan barang/jasa, koordinasi vendor untuk perawatan mesin/genset/kendaraan, dan kontrol SLA pemenuhan aset operasional.' 
    },
    { 
      id: '04', 
      judul: 'OPERATIONAL DASHBOARD & DATA', 
      deskripsi: 'Pengolahan data operasional, verifikasi dokumen, dan pelaporan manajemen menggunakan Microsoft Excel, Google Sheets, dan RO Dashboard.' 
    },
  ]

  return (
    <section id="layanan" style={{ padding: '80px 8%', maxWidth: '1200px', margin: 'auto' }}>
      <p style={{ 
        color: '#39ff14', 
        fontSize: '12px', 
        fontWeight: 'bold', 
        letterSpacing: '2px', 
        marginBottom: '15px' 
      }}>
        [ KEAHLIAN UTAMA & LAYANAN ]
      </p>

      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: '800', 
        marginBottom: '40px', 
        color: '#ffffff' 
      }}>
        SOLUSI OPERASIONAL & <span style={{ color: '#39ff14' }}>SISTEM.</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {daftarLayanan.map((item) => (
          <div 
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '25px 30px',
              backgroundColor: '#121416',
              border: '1px solid #222426',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <span style={{ 
                color: '#39ff14', 
                fontSize: '24px', 
                fontWeight: '800',
                fontFamily: 'Syne, sans-serif'
              }}>
                {item.id}
              </span>
              <div>
                <h3 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '5px' }}>
                  {item.judul}
                </h3>
                <p style={{ color: '#888888', fontSize: '13px', lineHeight: '1.5' }}>
                  {item.deskripsi}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}