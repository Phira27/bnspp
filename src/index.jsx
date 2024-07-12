// src/Index.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Arsip from './pages/arsip';
import KategoriSurat from './pages/kategoriSurat';
import About from './pages/about';
import Arsipkan from './components/arsipkan';
import Lihat from './components/lihat';
import TambahKategori from './components/tambahKategori'; // Import komponen baru

function Index() {
  return (
    <Routes>
      <Route path="/arsip" element={<Arsip />} />
      <Route path="/kategori-surat" element={<KategoriSurat />} />
      <Route path="/about" element={<About />} />
      <Route path="/arsipkan" element={<Arsipkan />} />
      <Route path="/lihat" element={<Lihat />} />
      <Route path="/tambah-kategori" element={<TambahKategori />} /> {/* Rute untuk komponen TambahKategori */}
    </Routes>
  );
}

export default Index;
