import { useEffect, useState } from "react";
import { bodyPartsURL, exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseBodyPartCard from "./ExerciseBodyPartCard";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../contexts/ThemeContext";
import {
  chestImage,
  chestImageDark,
  backImage,
  backImageDark,
  upperArmsImage,
  upperArmsImageDark,
  shouldersImage,
  shouldersImageDark,
  lowerArmsImage,
  lowerArmsImageDark,
  lowerLegsImage,
  lowerLegsImageDark,
  upperLegsImage,
  upperLegsImageDark,
  waistImage,
  waistImageDark,
  neckImage,
  neckImageDark,
} from "../utils/constants";

const ExerciseCarousel = () => {
  const { theme } = useTheme();
  const [bodyParts, setBodyParts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const bodyPartImages = {
    all: "all",
    back: theme === "light" ? backImage : backImageDark,
    cardio: "cardioImage",
    chest: theme === "light" ? chestImage : chestImageDark,
    "lower arms": theme === "light" ? lowerArmsImage : lowerArmsImageDark,
    "lower legs": theme === "light" ? lowerLegsImage : lowerLegsImageDark,
    neck: theme === "light" ? neckImage : neckImageDark,
    shoulders: theme === "light" ? shouldersImage : shouldersImageDark,
    "upper arms": theme === "light" ? upperArmsImage : upperArmsImageDark,
    "upper legs": theme === "light" ? upperLegsImage : upperLegsImageDark,
    waist: theme === "light" ? waistImage : waistImageDark,
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(bodyPartsURL, exerciseOptions);
      setBodyParts(["all", ...bodyPartsData].sort((a, b) => a - b));
    };

    fetchExerciseData();
  }, []);

  const nextSlide = () => {
    if (startIndex < bodyParts.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center pt-20 pb-10 gap-x-60">
        {bodyParts.slice(startIndex, startIndex + 3).map((bodyPart, index) => (
          <ExerciseBodyPartCard
            key={startIndex + index}
            bodyPartName={bodyPart}
            bodyPartImage={bodyPartImages[bodyPart]}
          />
        ))}
      </div>
      <div className="flex justify-end pt-2">
        <button className="px-4 py-2" onClick={prevSlide}>
          <ArrowLeftIcon className=" text-content size-6" />
        </button>
        <button className="px-4 py-2" onClick={nextSlide}>
          <ArrowRightIcon className=" text-content size-6" />
        </button>
      </div>
    </div>
  );
};

export default ExerciseCarousel;
