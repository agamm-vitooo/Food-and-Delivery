import React from 'react';

const Checkout = ({ totals }) => {
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <h2 className="font-semibold text-xl mb-6">Delivery Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First name" className="border p-2 rounded" />
              <input type="text" placeholder="Last name" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-1 mb-4">
              <input type="email" placeholder="Email address" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-1 mb-4">
              <input type="text" placeholder="Street" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="City" className="border p-2 rounded" />
              <input type="text" placeholder="State" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Zip code" className="border p-2 rounded" />
              <input type="text" placeholder="Country" className="border p-2 rounded" />
            </div>
            <div className="grid grid-cols-1 mb-4">
              <input type="text" placeholder="Phone" className="border p-2 rounded" />
            </div>
          </form>
        </div>

        {/* Cart Totals Section */}
        {totals && totals.total > 0 ? (
          <div className="flex-1">
            <h2 className="font-semibold text-xl mb-6">Cart Totals</h2>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>{formatRupiah(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Delivery Fee</span>
                <span>{formatRupiah(totals.deliveryFee)}</span>
              </div>
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>{formatRupiah(totals.total)}</span>
              </div>
              <button className="bg-red-600 text-white w-full p-3 rounded hover:bg-red-700">
                Proceed to Payment
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <h2 className="font-semibold text-xl mb-6">Cart Totals</h2>
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <p className="text-center text-gray-500">No items in your cart.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
