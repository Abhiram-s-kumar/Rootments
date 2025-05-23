import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Zorucci Kochi",
    address:
      "Metro Piller No 366, Chilton Tower, Road, Koonamthai, Edappally, Aluva, Kochi, Kerala 682024",
    timings: "Mon-Sat | 10:00am - 06:00pm",
    phone: "+91 6235031144",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7972120986815!2d76.31038367479401!3d10.033586290073526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2283e42261%3A0xdf71e226912c20af!2sZorucci%20Edappally!5e0!3m2!1sen!2sin!4v1747888928728!5m2!1sen!2sin",
    mapLink: "https://maps.app.goo.gl/LTGk2GyRwCfHzoe57",
  },
  {
    name: "Zorucci Perinthalmanna",
    address:
      "Sahara Complex, Mysuru - Ooty Rd, Valiyangadi, Perinthalmanna, Kerala 679322",
    timings: "Mon-Sat | 10:00am - 06:00pm",
    phone: "+91 7593844448",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.686840469863!2d76.22323267480816!3d10.986993289174864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd8e9dce589f%3A0xc12607ef8755511!2sZorucci%20premium%20rentals%20Perinthalmanna!5e0!3m2!1sen!2sin!4v1747889188334!5m2!1sen!2sin",
    mapLink: "https://maps.app.goo.gl/PH5j2feCrU5Cb7SL7",
  },
  {
    name: "Zorucci Edappal",
    address: "Calicut Rd, Edappal, Kerala 679576",
    timings: "Mon-Sat | 10:00am - 06:00pm",
    phone: "+91 7593844448",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2623980094327!2d76.00391107769289!3d10.791203861919925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b9b3ef556613%3A0x5293c9bf91462289!2sZorucci%20bridal%20rental%20Edappal!5e0!3m2!1sen!2sin!4v1747889255089!5m2!1sen!2sin",
    mapLink: "https://maps.app.goo.gl/YiY1sGxmqGorU76X8",
  },
  {
    name: "Zorucci Kottakkal",
    address: "Zabeel complex Changuvetty, Kottakkal, Kerala 676503",
    timings: "Mon-Sat | 10:00am - 06:00pm",
    phone: "+91 6282 193345",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5144047534272!2d75.99077037480832!3d10.999978589162698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5b49e67c70d%3A0xf07919d302412cc9!2sBridal%20wedding%20hub%20Kottakkal!5e0!3m2!1sen!2sin!4v1747901757611!5m2!1sen!2sin",
    mapLink: "https://maps.app.goo.gl/hX2FrGkzQyW8gEaB8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const LocationCard = ({ location, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    className="bg-white rounded-lg jishnufont shadow border border-gray-200 p-4 max-w-sm w-full mx-auto"
  >
    <div className="h-40 w-full overflow-hidden rounded">
      <iframe
        src={location.mapSrc}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={location.name}
      ></iframe>
    </div>
    <div className="mt-4 text-[#083B37]">
      <h3 className="font-semibold text-lg text-center mb-3">{location.name}</h3>
      <p className="text-sm mb-3">{location.address}</p>
      <p className="text-sm mb-3">🕒 {location.timings}</p>
      <p className="text-sm mb-5">📞 {location.phone}</p>
      <a
        href={location.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center border border-[#083B37] text-[#5C3013] py-2 rounded hover:bg-[#083B37] hover:text-white transition"
      >
        View Location
      </a>
    </div>
  </motion.div>
);

const LocationPage = () => {
  return (
    <div id="location" className="bg-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="italic text-sm text-[#083B37] mb-2">Location</p>
        <h2 className="sugarfont font-normal text-[40px] sm:text-[60px] leading-tight tracking-wide text-[#083B37] mb-12">
          VISIT US,<br /> EXPERIENCE LUXURY
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <LocationCard key={index} location={loc} index={index} />
          ))}
        </div>

        <p className="text-xs mt-8 text-gray-600 italic max-w-xl mx-auto text-center">
          Personalized fittings by appointment only
        </p>

        <div className="mt-8 text-center">
          <a href="#contact" aria-label="Schedule your visit today">
            <button className="border border-[#083B37] text-[#083B37] px-6 py-2 rounded hover:bg-[#083B37] hover:text-white transition">
              Schedule your visit today ⟶
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
