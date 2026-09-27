export default function Kontak() {
  return (
    <footer id="kontak" style={{ 
      padding: '80px 8% 40px', 
      backgroundColor: '#08090a', 
      borderTop: '1px solid #1a1c1e',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <p style={{ 
          color: '#39ff14', 
          fontSize: '12px', 
          fontWeight: 'bold', 
          letterSpacing: '2px', 
          marginBottom: '15px' 
        }}>
          [ PUNYA PROYEK ATAU PELUANG KERJA? ]
        </p>

        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 56px)', 
          fontWeight: '800', 
          color: '#ffffff',
          lineHeight: '1.1',
          marginBottom: '30px'
        }}>
          MARI BUAT SESUATU YANG <br />
          <span style={{ color: '#39ff14' }}>LUAR BIASA.</span>
        </h2>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '15px', 
          marginBottom: '50px' 
        }}>
          {/* Tombol Kirim Email */}
          <a 
            href="mailto:deasfebrianto87@gmail.com" 
            style={{
              backgroundColor: '#39ff14',
              color: '#000000',
              padding: '14px 28px',
              fontWeight: 'bold',
              fontSize: '12px',
              borderRadius: '3px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            KIRIM EMAIL &rarr;
          </a>

          {/* Tombol WhatsApp */}
          <a 
            href="https://wa.me/62895702214619" 
            target="_blank" 
            rel="noreferrer"
            style={{
              backgroundColor: '#16181a',
              color: '#ffffff',
              border: '1px solid #2e3236',
              padding: '14px 28px',
              fontWeight: 'bold',
              fontSize: '12px',
              borderRadius: '3px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            HUBUNGI VIA WHATSAPP
          </a>
        </div>

        {/* Detail Kontak Asli & Hak Cipta */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '30px',
          borderTop: '1px solid #1a1c1e',
          color: '#777777',
          fontSize: '13px'
        }}>
          <div>
            <p style={{ color: '#ffffff', fontWeight: '600', marginBottom: '4px' }}>Deas Febrianto</p>
            <p>📍 Pontianak, Kalimantan Barat</p>
            <p>📧 deasfebrianto87@gmail.com | 📱 0895-7022-14619</p>
          </div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}