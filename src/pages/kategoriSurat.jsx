// src/pages/kategoriSurat.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KategoriSurat() {
  const dataSurat = [
    { idKategori: '001', namaKategori: 'Umum', keterangan: 'Surat Penting', waktuPengarsipan: '2024-07-11' },
    { idKategori: '002', namaKategori: 'Pribadi', keterangan: 'Undangan Rapat', waktuPengarsipan: '2024-07-10' },
    { idKategori: '003', namaKategori: 'Umum', keterangan: 'Pemberitahuan', waktuPengarsipan: '2024-07-09' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSurat, setFilteredSurat] = useState(dataSurat);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = dataSurat.filter(surat =>
      surat.namaKategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surat.keterangan.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSurat(filtered);
  };

  const handleDelete = (idKategori) => {
    console.log(`Menghapus surat dengan ID Kategori: ${idKategori}`);
  };

  const handleEdit = (idKategori) => {
    console.log(`Mengedit surat dengan ID Kategori: ${idKategori}`);
  };

  const handleAddCategory = () => {
    navigate('/tambah-kategori');
  };

  return (
    <div>
      <h2>Kategori Surat</h2>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Cari..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: '1', marginRight: '10px' }}
        />
        <button onClick={handleSearch}>Cari</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID Kategori</th>
            <th>Nama Kategori</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredSurat.map((surat) => (
            <tr key={surat.idKategori}>
              <td>{surat.idKategori}</td>
              <td>{surat.namaKategori}</td>
              <td>{surat.keterangan}</td>
              <td>
                <button onClick={() => handleDelete(surat.idKategori)}>Hapus</button>
                <button onClick={() => handleEdit(surat.idKategori)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAddCategory}>Tambah Kategori</button>
      </div>
    </div>
  );
}

export default KategoriSurat;
