import { useState, useEffect } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import TaskIcon from "@mui/icons-material/Task";
import heroImage from "../../images/hero-icon.jpg";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) => setCurrentIndex(index);

  const carouselItems = [
    {
      title: "Extensive Exercise Library",
      description:
        "Explore a vast collection of workouts tailored to target specific muscles, body regions, or exercise types.",
      icon: <FitnessCenterIcon style={{ fontSize: 60 }} />,
    },
    {
      title: "Customized Workout Plans",
      description:
        "Create personalized workout routines that align with your fitness goals and track your progress over time.",
      icon: <TaskIcon style={{ fontSize: 60 }} />,
    },
    {
      title: "Track Your Progress",
      description:
        "Monitor and record your improvement across various exercises, ensuring consistent progress in your fitness journey.",
      icon: <EqualizerIcon style={{ fontSize: 60 }} />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <section className="text-content">
      <div
        className="absolute left-0 top-0 dark:opacity-50"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "65%",
          width: "100%",
        }}
      ></div>
      <h1 className="pt-10 text-6xl relative">FitFlow</h1>
      <h2 className="pt-10 w-2/4 text-5xl font-Mona-Sans font-extrabold relative top-64">
        Build the Perfect Body.
        <br />
        With a Clean Mind.
      </h2>

      <div className="relative pt-10 top-80 w-2/4 mx-auto overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="inline-block w-full text-center p-5"
              style={{ whiteSpace: "normal" }}
            >
              {item.icon && <div className="mb-3">{item.icon}</div>}
              <h3 className="text-4xl font-bold">{item.title}</h3>
              <p className="text-xl mt-3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-content" : "bg-backgroundAccent"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
