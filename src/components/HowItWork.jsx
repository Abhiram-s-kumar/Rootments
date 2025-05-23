import React from 'react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const HowItWork = () => {
  return (
    <section id="howitwork" className="py-16 px-4  mt-6 mb-6 bg-white">
      <p className="text-sm text-[#9A4D06] italic mb-2 ms-0 sm:ms-8 md:ms-18 jishnufont">
        How It Works?
      </p>
      <h2 className="text-[30px] sm:text-4xl font-light mb-4 ms-0 sm:ms-8 md:ms-18 sugarfont text-[#0A3C3F] tracking-wide">
        LUXURY, MADE EFFORTLESS
      </h2>
      <p className="text-gray-600 max-w-2xl mb-12 ms-0 sm:ms-8 md:ms-18 jishnufont">
        At Zorucci, we make bridal rentals seamless and stress-free. Here’s how it works:
      </p>

      <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 md:px-0">
        {/* Step 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stepVariants}
          className="w-full max-w-[345px] h-[auto] bg-white shadow-md rounded-xl p-6 border mx-auto"
        >
          <p className="text-sm text-[#9A4D06] font-semibold mb-2 jishnufont">Step 01</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#0A3C3F] mt-6 mb-6 jishnufont">
            Visit & Try
          </h3>
          <p className="text-sm text-gray-600 jishnufont">
            Book an appointment at your nearest Zorucci showroom for a personalized fitting.
            Our stylists ensure the perfect fit and look.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stepVariants}
          className="w-full max-w-[345px] h-[auto] bg-white shadow-md rounded-xl p-6 border mx-auto"
        >
          <p className="text-sm text-[#9A4D06] font-semibold mb-2 jishnufont">Step 02</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#0A3C3F] mb-6 mt-6 jishnufont">
            Reserve & Shine
          </h3>
          <p className="text-sm text-gray-600 jishnufont">
            Once you’ve found your dream outfit, reserve it for your special day. We take care of
            the details, so you don’t have to.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stepVariants}
          className="w-full max-w-[345px] h-[auto] bg-white shadow-md rounded-xl p-6 border mx-auto"
        >
          <p className="text-sm text-[#9A4D06] font-semibold mb-4 jishnufont">Step 03</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#0A3C3F] mb-6 mt-6 jishnufont">
            Return with Ease
          </h3>
          <p className="text-sm text-gray-600 jishnufont">
            After your event, simply return the outfit. Hassle-free, seamless, and effortless.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWork;
