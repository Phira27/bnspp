import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'; 

const Arsipkan = () => {
  const [nomorSurat, setNomorSurat] = useState('');
  const [kategori, setKategori] = useState('');
  const [judul, setJudul] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nomorSurat || !kategori || !judul || !file) {
      alert('Harap isi semua inputan sebelum menyimpan.');
      return;
    }
    // Handle submission logic here
    console.log('Form submitted!', { nomorSurat, kategori, judul, file, fileName });
    // Clear form fields after submission
    setNomorSurat('');
    setKategori('');
    setJudul('');
    setFile(null);
    setFileName('');
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  return (
    <div className="arsipkan-container">
      <h2>Arsipkan Surat</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nomorSurat">Nomor Surat:</label>
          <input
            type="text"
            id="nomorSurat"
            value={nomorSurat}
            onChange={(e) => setNomorSurat(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="kategori">Kategori:</label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
          >
            <option value="">Pilih Kategori</option>
            <option value="Keputusan">Keputusan</option>
            <option value="Permohonan">Permohonan</option>
            <option value="Kuasa">Kuasa</option>
            <option value="Pengantar">Pengantar</option>
            <option value="Perintah">Perintah</option>
            <option value="Undangan">Undangan</option>
            <option value="Edaran">Edaran</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="judul">Judul:</label>
          <input
            type="text"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="file">Pilih File:</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              required
            />
            <input
              type="text"
              className="file-name-display"
              value={fileName}
              readOnly
            />
            <button type="button" onClick={() => document.getElementById('file').click()}>
              Pilih File
            </button>
          </div>
        </div>
        <div className="button-group">
          <button type="button" onClick={() => navigate('/arsip')}>Kembali</button>
          <button type="submit">Simpan</button>
        </div>
      </form>
    </div>
  );
};

export default Arsipkan;
