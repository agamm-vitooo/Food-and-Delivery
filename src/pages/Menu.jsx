import React from 'react';

const Menu = () => {
  // Daftar menu makanan
  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Pizza dengan saus tomat segar dan keju mozzarella.',
      price: '50.000 IDR',
      image: 'https://example.com/pizza-margherita.jpg',
    },
    {
      id: 2,
      name: 'Burger Sapi',
      description: 'Burger sapi dengan keju, selada, dan saus BBQ.',
      price: '45.000 IDR',
      image: 'https://example.com/burger-sapi.jpg',
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti dengan saus krim dan bacon yang renyah.',
      price: '55.000 IDR',
      image: 'https://example.com/spaghetti-carbonara.jpg',
    },
    {
      id: 4,
      name: 'Nasi Goreng Spesial',
      description: 'Nasi goreng dengan telur, ayam, dan udang.',
      price: '30.000 IDR',
      image: 'https://example.com/nasi-goreng.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Katalog Makanan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-orange-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
