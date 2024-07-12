// src/components/tambahKategori.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'; 

function TambahKategori() {
  const navigate = useNavigate();
  const [namaKategori, setNamaKategori] = useState('');
  const [judul, setJudul] = useState('');
  const [alert, setAlert] = useState('');

  const handleSave = () => {
    if (!namaKategori || !judul) {
      setAlert('Harap lengkapi semua inputan sebelum menyimpan.');
    } else {
      // Logika untuk menyimpan data kategori baru ke database
      console.log('Kategori baru disimpan:', { namaKategori, judul });
      // Reset form
      setNamaKategori('');
      setJudul('');
      setAlert('');
      // Navigasi kembali ke halaman kategori surat
      navigate('/kategori-surat');
    }
  };

  return (
    <div className="tambah-kategori-container">
      <h2>Tambah Kategori</h2>
      {alert && <div className="alert">{alert}</div>}
      <form>
        <div className="form-group">
          <label>ID (Auto Increment)</label>
          <input type="text" value="Auto Increment" readOnly />
        </div>
        <div className="form-group">
          <label>Nama Kategori</label>
          <input 
            type="text" 
            value={namaKategori} 
            onChange={(e) => setNamaKategori(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Judul</label>
          <textarea 
            value={judul} 
            onChange={(e) => setJudul(e.target.value)} 
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={() => navigate('/arsip')}>Kembali</button>
          <button type="button" onClick={handleSave}>Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default TambahKategori;
