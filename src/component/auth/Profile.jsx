import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('biodata');

  const getStoredData = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  const [biodata, setBiodata] = useState(getStoredData('biodata', {
    name: 'Agam Vito Asyhari',
    birthdate: '2001-12-24',
    gender: 'Pria',
    email: 'agamvito7@gmail.com',
    phone: '628895576402',
  }));

  const [profilePhoto, setProfilePhoto] = useState(getStoredData('profilePhoto', null));

  const [addresses, setAddresses] = useState(getStoredData('addresses', [
    {
      id: 1,
      label: 'Rumah',
      name: 'Agam Vito Asyhari',
      phone: '628895576402',
      address: 'Garuda, Garuda, Jatisrono, Kabupaten Wonogiri, Jawa Tengah, 57691',
      isPrimary: true,
    },
  ]));

  const [newAddress, setNewAddress] = useState({
    id: '',
    label: '',
    name: '',
    phone: '',
    address: '',
  });

  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressToEdit, setAddressToEdit] = useState(null);

  const [isEditingBiodata, setIsEditingBiodata] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        localStorage.setItem('profilePhoto', JSON.stringify(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBiodataChange = (e) => {
    const updatedBiodata = { ...biodata, [e.target.name]: e.target.value };
    setBiodata(updatedBiodata);
    localStorage.setItem('biodata', JSON.stringify(updatedBiodata));
  };

  const handleSaveBiodata = () => {
    setIsEditingBiodata(false);
    localStorage.setItem('biodata', JSON.stringify(biodata));
  };

  const handleSaveContact = () => {
    setIsEditingContact(false);
    localStorage.setItem('biodata', JSON.stringify(biodata));
  };

  const handleSaveNewAddress = () => {
    if (isEditingAddress) {
      const updatedAddresses = addresses.map((address) =>
        address.id === addressToEdit.id ? { ...newAddress, id: address.id, isPrimary: address.isPrimary } : address
      );
      setAddresses(updatedAddresses);
      setIsEditingAddress(false);
    } else {
      const updatedAddresses = [...addresses, { ...newAddress, id: addresses.length + 1, isPrimary: false }];
      setAddresses(updatedAddresses);
    }
    setIsAddingAddress(false);
    localStorage.setItem('addresses', JSON.stringify(addresses));
    clearNewAddressForm();
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const handleSetPrimaryAddress = (id) => {
    const updatedAddresses = addresses.map((address) => ({
      ...address,
      isPrimary: address.id === id,
    }));
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const handleEditAddress = (address) => {
    setIsEditingAddress(true);
    setAddressToEdit(address);
    setNewAddress(address);
    setIsAddingAddress(true);
  };

  const clearNewAddressForm = () => {
    setNewAddress({ id: '', label: '', name: '', phone: '', address: '' });
    setIsEditingAddress(false);
    setAddressToEdit(null);
  };

  return (
    <div className="container mx-auto p-10 lg:flex lg:space-x-10 space-y-8 lg:space-y-0">
      {/* Left Section - Profile Photo */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6 bg-white shadow-md rounded-lg p-6">
        <div className="w-48 h-48 rounded-full bg-orange-500 shadow-xl flex items-center justify-center transition-all duration-500 transform hover:scale-105 profile-photo">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-gray-500">Pilih Foto</span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="cursor-pointer bg-gradient-to-r bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        />
      </div>

      {/* Right Section - Tabs and Content */}
      <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-8">
        {/* Tab Headers */}
        <div className="flex justify-center lg:justify-start space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 ${
              activeTab === 'biodata' ? 'bg-gradient-to-r bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handleTabClick('biodata')}
          >
            Biodata Diri
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 ${
              activeTab === 'alamat' ? 'bg-gradient-to-r bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handleTabClick('alamat')}
          >
            Daftar Alamat
          </button>
        </div>

        {/* Biodata Section */}
        {activeTab === 'biodata' && (
          <div className="transition-opacity duration-500 opacity-100 bg-white shadow-lg rounded-lg p-6 transform hover:shadow-xl">
            <h2 className="text-xl font-bold text-gray-700 mb-6">Biodata Diri</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Nama</p>
                  {isEditingBiodata ? (
                    <input
                      type="text"
                      name="name"
                      value={biodata.name}
                      onChange={handleBiodataChange}
                      className="px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-md font-semibold text-gray-800">{biodata.name}</p>
                  )}
                </div>
                <button
                  className="text-orange-500 hover:text-orange-600 transform hover:scale-105 transition-transform"
                  onClick={() => setIsEditingBiodata(true)}
                >
                  Ubah Biodata
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Tanggal Lahir</p>
                  {isEditingBiodata ? (
                    <input
                      type="date"
                      name="birthdate"
                      value={biodata.birthdate}
                      onChange={handleBiodataChange}
                      className="px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-md font-semibold text-gray-800">{biodata.birthdate}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Jenis Kelamin</p>
                  {isEditingBiodata ? (
                    <select
                      name="gender"
                      value={biodata.gender}
                      onChange={handleBiodataChange}
                      className="px-4 py-2 border border-gray-300 rounded-md w-full"
                    >
                      <option value="Pria">Pria</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  ) : (
                    <p className="text-md font-semibold text-gray-800">{biodata.gender}</p>
                  )}
                </div>
                {isEditingBiodata && (
                  <button
                    className="px-4 py-2 bg-gradient-to-r bg-orange-500 text-white rounded-md hover:bg-orange-600"
                    onClick={handleSaveBiodata}
                  >
                    Simpan
                  </button>
                )}
              </div>

              <h2 className="text-xl font-bold text-gray-700 mt-6 mb-4">Kontak</h2>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Email</p>
                  {isEditingContact ? (
                    <input
                      type="email"
                      name="email"
                      value={biodata.email}
                      onChange={handleBiodataChange}
                      className="px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-md font-semibold text-gray-800">{biodata.email}</p>
                  )}
                </div>
                <button
                  className="text-orange-500 hover:text-orange-600 transform hover:scale-105 transition-transform"
                  onClick={() => setIsEditingContact(true)}
                >
                  Ubah Kontak
                </button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Nomor HP</p>
                  {isEditingContact ? (
                    <input
                      type="tel"
                      name="phone"
                      value={biodata.phone}
                      onChange={handleBiodataChange}
                      className="px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-md font-semibold text-gray-800">{biodata.phone}</p>
                  )}
                </div>
                {isEditingContact && (
                  <button
                    className="px-4 py-2 bg-gradient-to-r bg-orange-500 text-white rounded-md hover:bg-orange-600"
                    onClick={handleSaveContact}
                  >
                    Simpan
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Daftar Alamat Section */}
        {activeTab === 'alamat' && (
          <div className="transition-opacity duration-500 opacity-100 bg-white shadow-lg rounded-lg p-6 transform hover:shadow-xl">
            <h2 className="text-xl font-bold text-gray-700 mb-6">Daftar Alamat</h2>

            <div className="text-right mb-4">
              {!isAddingAddress && (
                <button
                  className="px-4 py-2 bg-gradient-to-r bg-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  onClick={() => setIsAddingAddress(true)}
                >
                  + Tambah Alamat Baru
                </button>
              )}
            </div>

            {isAddingAddress && (
              <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{isEditingAddress ? 'Edit Alamat' : 'Tambah Alamat Baru'}</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="label"
                    value={newAddress.label}
                    onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                    placeholder="Label (e.g. Rumah)"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name="name"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                    placeholder="Nama"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={newAddress.phone}
                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                    placeholder="Nomor HP"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                  />
                  <input
                    type="text"
                    name="address"
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                    placeholder="Alamat"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="text-right mt-4">
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 mr-2"
                    onClick={handleSaveNewAddress}
                  >
                    {isEditingAddress ? 'Simpan Perubahan' : 'Simpan'}
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    onClick={() => {
                      setIsAddingAddress(false);
                      clearNewAddressForm();
                    }}
                  >
                    Batal
                  </button>
                </div>
              </div>
            )}

            {addresses.map((address) => (
              <div
                key={address.id}
                className={`p-4 mb-4 border-2 ${
                  address.isPrimary ? 'border-orange-400 bg-orange-50' : 'border-gray-300'
                } rounded-lg shadow-sm transform hover:scale-105 transition-transform`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800">
                      {address.label}{' '}
                      {address.isPrimary && (
                        <span className="bg-orange-200 text-xs px-2 py-1 rounded-md">Utama</span>
                      )}
                    </p>
                    <p className="text-sm text-gray-600">{address.name}</p>
                    <p className="text-sm text-gray-600">{address.phone}</p>
                    <p className="text-sm text-gray-600">{address.address}</p>
                  </div>
                  <div className="text-right">
                    <button
                      className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 ${
                        address.isPrimary ? 'cursor-default' : ''
                      }`}
                      onClick={() => handleSetPrimaryAddress(address.id)}
                      disabled={address.isPrimary}
                    >
                      Pilih sebagai Utama
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-600 ml-4 transform hover:scale-105 transition-transform"
                      onClick={() => handleEditAddress(address)}
                    >
                      Edit Alamat
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 ml-4 transform hover:scale-105 transition-transform"
                      onClick={() => handleDeleteAddress(address.id)}
                    >
                      Hapus Alamat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

