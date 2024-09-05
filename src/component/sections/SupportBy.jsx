import React from 'react';
import gopayLogo from '../../assets/images/gojek.svg';
import grabLogo from '../../assets/images/grab.svg';
import danaLogo from '../../assets/images/dana.svg';
import shopeePayLogo from '../../assets/images/shopee.svg';
import zomatoLogo from '../../assets/images/zomato.svg';

export const SupportBy = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 text-sm mb-8">Support by :</h3>
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-36">
          {/* Logo 1 */}
          <img src={gopayLogo} alt="Gopay" className="h-10 my-2" />
          {/* Logo 2 */}
          <img src={grabLogo} alt="Grab" className="h-10 my-2" />
          {/* Logo 3 */}
          <img src={danaLogo} alt="Dana" className="h-10 my-2" />
          {/* Logo 4 */}
          <img src={shopeePayLogo} alt="ShopeePay" className="h-10 my-2" />
          {/* Logo 5 */}
          <img src={zomatoLogo} alt="Zomato" className="h-10 my-2" />
        </div>
      </div>
    </section>
  );
};

export default SupportBy;
