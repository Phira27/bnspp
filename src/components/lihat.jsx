import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style.css';

function Lihat() {
  // Contoh data surat (biasanya data ini akan didapatkan dari API atau state)
  const suratData = {
    nomorSurat: '001',
    kategori: 'Umum',
    judul: 'Surat Penting',
    waktuUnggah: '2024-07-11',
    isiSurat:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis enim aliquet scelerisque.',
  };

  // Gunakan useNavigate untuk navigasi
  const navigate = useNavigate();

  // Handler untuk kembali ke halaman arsip
  const handleKembali = () => {
    navigate('/arsip');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="user-info">
          <span className="user-name">Arsip Surat</span>
          <img src="arsip-avatar.jpg" alt="Arsip Avatar" className="user-avatar" />
        </div>
      </nav>
      <div className="content">
        <div className="lihat-container">
          <h2>Detail Surat</h2>
          <div className="surat-detail">
            <div>
              <strong>Nomor Surat:</strong> {suratData.nomorSurat}
            </div>
            <div>
              <strong>Kategori:</strong> {suratData.kategori}
            </div>
            <div>
              <strong>Judul:</strong> {suratData.judul}
            </div>
            <div>
              <strong>Waktu Unggah:</strong> {suratData.waktuUnggah}
            </div>
          </div>
          <div className="isi-surat">
            <h3>Isi Surat</h3>
            <p>{suratData.isiSurat}</p>
          </div>
          <div className="button-group">
            <button onClick={handleKembali}>Kembali</button>
            <a href="https://example.com/surat-penting.pdf" download="surat-penting.pdf">
              <button>Unduh</button>
            </a>
            <button onClick={() => alert('Edit/Ganti File')}>Edit/Ganti File</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lihat;
