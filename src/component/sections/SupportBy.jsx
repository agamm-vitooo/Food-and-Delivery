import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import gopayLogo from '../../assets/images/gojek.svg';
import grabLogo from '../../assets/images/grab.svg';
import danaLogo from '../../assets/images/dana.svg';
import shopeePayLogo from '../../assets/images/shopee.svg';
import zomatoLogo from '../../assets/images/zomato.svg';

export const SupportBy = () => {
  // Create refs for logos
  const logosRef = useRef([]);
  logosRef.current = [];

  // Add logo to the array of refs
  const addToRefs = (el) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation for appearance
    gsap.fromTo(
      logosRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2, // Delay between each logo animation
      }
    );

    // GSAP hover effect to turn logo orange
    logosRef.current.forEach((logo) => {
      // Mouse hover event to turn orange
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          filter: 'sepia(100%) saturate(500%) hue-rotate(-20deg) brightness(110%)', // Changes to orange
          duration: 0.5,
        });
      });

      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, { filter: 'none', duration: 0.5 }); // Resets to original color
      });
    });
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 text-sm mb-8">Support by :</h3>
        <div className="container p-4 md:px-14 px-8 flex flex-wrap justify-center items-center space-x-4 md:space-x-36 gap-4">
          {/* Logos with refs */}
          <img ref={addToRefs} src={gopayLogo} alt="Gopay" className="h-10 my-2" />
          <img ref={addToRefs} src={grabLogo} alt="Grab" className="h-10 my-2" />
          <img ref={addToRefs} src={danaLogo} alt="Dana" className="h-10 my-2" />
          <img ref={addToRefs} src={shopeePayLogo} alt="ShopeePay" className="h-10 my-2" />
          <img ref={addToRefs} src={zomatoLogo} alt="Zomato" className="h-10 my-2" />
        </div>
      </div>
    </section>
  );
};

export default SupportBy;
