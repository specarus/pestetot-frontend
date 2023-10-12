"use client";

const Hero = () => {
  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      <video className="w-full h-full object-cover" loop autoPlay muted>
        <source
          src="/assets/videos/fishing-box-close-up.mp4"
          type="video/mp4"
        />
      </video>
      {/* Overlay */}
      <span className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-20" />
      {/* Overlay */}
    </div>
  );
};

export default Hero;
