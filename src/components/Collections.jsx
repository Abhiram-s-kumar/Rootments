import CardScroller from "./CardScroller";

const Collections = () => {
    return (
        <div id="collections"
            className="w-full flex flex-col items-center justify-start text-center px-4 pt-[300px] sm:pt-24 md:pt-28 lg:pt-32 xl:pt-24"
            style={{ minHeight: '100vh' }}
        >
            <h3
                className="sugarfont font-medium px-4 py-2 rounded-md text-3xl sm:mt-48 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{ color: '#083B37' }}
            >
                Our Collections
            </h3>

            <p className="font-serif font-normal text-sm sm:text-base md:text-lg leading-[1.4] tracking-normal text-center text-[#5C3013] max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 mt-2">
                At Zorucci, we believe every bride deserves to feel special. Our handpicked collection of bridal gowns blends timeless elegance with
                modern luxury, available for rent. From classic silhouettes to contemporary styles, we carefully curate our collection to help brides
                find their perfect dress without compromise.
            </p>

            <div className="mt-4 w-full mb-48 px-2 sm:px-4">
                <CardScroller />
            </div>
        </div>
    );
};

export default Collections;


