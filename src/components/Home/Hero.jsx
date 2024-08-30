import heroImage from "../../images/hero-icon.jpg";

const Hero = () => {
  return (
    <header className="text-content">
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
          color: "white",
        }}
        className="absolute left-0 top-0 opacity-50"
      ></div>
      <h1 className="pt-10 text-6xl relative">FitFlow</h1>
      <div className="pt-14 flex flex-row gap-x-20">
        <div className="w-2/4">
          <h2 className="text-5xl font-Mona-Sans font-extrabold">
            Build the Perfect Body.
            <br />
            With a Clean Mind.
          </h2>
        </div>
        <p className="text-md mt-4">
          Unleash your potential with FitFlow, the ultimate fitness companion.
          Whether you&apos;re a pro or just starting, FitFlow offers tailored
          workouts, real-time tracking, and adaptive goals. With expert guidance
          and a supportive community, FitFlow helps you achieve your fitness
          goals and stay motivated. Make every workout count with FitFlow!
        </p>
      </div>
    </header>
  );
};

export default Hero;
