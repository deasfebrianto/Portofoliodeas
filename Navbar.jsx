export default function Navbar() {
  // Sesuaikan nama menu dan link id-nya dengan yang ada di web kamu
  const menu = [
    { nama: 'Beranda', link: '#hero' },
    { nama: 'Tentang', link: '#tentang' },
    { nama: 'Layanan', link: '#layanan' },
    { nama: 'Karya', link: '#karya' },
    { nama: 'Kontak', link: '#kontak' }
  ]

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(12, 13, 14, 0.95)', padding: '20px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, borderBottom: '1px solid #222', backdropFilter: 'blur(5px)' }}>
      
      {/* CSS untuk animasi klik dan smooth scroll */}
      <style>
        {`
          html {
            scroll-behavior: smooth; /* Biar scroll ke bawahnya mulus */
          }
          
          .nav-link {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
            position: relative;
            padding: 5px 0;
            transition: color 0.3s ease, transform 0.1s ease;
            display: inline-block;
          }
          
          /* Efek garis bawah jalan */
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #39ff14;
            transition: width 0.3s ease;
          }
          
          /* Saat mouse di atas tulisan */
          .nav-link:hover {
            color: #39ff14;
          }
          .nav-link:hover::after {
            width: 100%;
          }

          /* Animasi pas diklik (efek ditekan) */
          .nav-link:active {
            transform: scale(0.85);
          }
        `}
      </style>

      {/* Logo / Nama Kiri */}
      <div style={{ color: '#39ff14', fontSize: '24px', fontWeight: '900', letterSpacing: '2px', cursor: 'pointer' }}>
        DEAS.
      </div>

      {/* Deretan Menu Kanan */}
      <div style={{ display: 'flex', gap: '35px' }}>
        {menu.map((item, i) => (
          <a key={i} href={item.link} className="nav-link">
            {item.nama}
          </a>
        ))}
      </div>
    </nav>
  )
}