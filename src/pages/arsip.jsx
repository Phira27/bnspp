// src/pages/arsip.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

function Arsip() {
  const navigate = useNavigate();

  // Data surat contoh
  const [dataSurat, setDataSurat] = useState([
    { nomorSurat: '001', kategori: 'Umum', judul: 'Surat Penting', waktuPengarsipan: '2024-07-11' },
    { nomorSurat: '002', kategori: 'Pribadi', judul: 'Undangan Rapat', waktuPengarsipan: '2024-07-10' },
    { nomorSurat: '003', kategori: 'Umum', judul: 'Pemberitahuan', waktuPengarsipan: '2024-07-09' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSurat, setFilteredSurat] = useState(dataSurat);

  const handleDelete = (nomorSurat) => {
    const updatedSurat = dataSurat.filter(surat => surat.nomorSurat !== nomorSurat);
    setDataSurat(updatedSurat);
    setFilteredSurat(updatedSurat);
  };

  const handleDownload = (nomorSurat) => {
    console.log(`Mengunduh surat dengan nomor: ${nomorSurat}`);
  };

  const handleView = (surat) => {
    navigate('/lihat', { state: surat }); // Mengarahkan ke halaman lihat dengan data surat
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterSurat(event.target.value);
  };

  const filterSurat = (searchTerm) => {
    const filtered = dataSurat.filter(surat =>
      surat.nomorSurat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.waktuPengarsipan.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSurat(filtered);
  };

  const toggleArsipkanForm = () => {
    navigate('/arsipkan'); // Navigate to separate Arsipkan page
  };

  return (
    <div className="arsip-container">
      <div className="arsip-content">
        <div className="arsip-header">
          <h2>Arsip Surat</h2>
          <div className="search-container">
            <input type="text" placeholder="Cari surat..." value={searchTerm} onChange={handleSearchChange} />
            <button>Cari</button>
          </div>
        </div>
        <div className="arsip-box">
          <table>
            <thead>
              <tr>
                <th>Nomor Surat</th>
                <th>Kategori</th>
                <th>Judul</th>
                <th>Waktu Pengarsipan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredSurat.map((surat, index) => (
                <tr key={index}>
                  <td>{surat.nomorSurat}</td>
                  <td>{surat.kategori}</td>
                  <td>{surat.judul}</td>
                  <td>{surat.waktuPengarsipan}</td>
                  <td className="aksi-buttons">
                    <button onClick={() => handleDelete(surat.nomorSurat)}>Hapus</button>
                    <button onClick={() => handleDownload(surat.nomorSurat)}>Unduh</button>
                    <button onClick={() => handleView(surat)}>Lihat</button> {/* Memanggil handleView dengan data surat */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bottom-left">
            <button className="arsipkan-button" onClick={toggleArsipkanForm}>Arsipkan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arsip;
