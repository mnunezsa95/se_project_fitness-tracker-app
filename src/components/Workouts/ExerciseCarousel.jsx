import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
  cardioImage,
  cardioImageDark,
  allImage,
  allImageDark,
} from "../utils/constants";

const ExerciseCarousel = ({ bodyPart, setBodyPart }) => {
  const { theme } = useTheme();
  const [bodyParts, setBodyParts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const bodyPartImages = {
    all: theme === "light" ? allImage : allImageDark,
    back: theme === "light" ? backImage : backImageDark,
    cardio: theme === "light" ? cardioImage : cardioImageDark,
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
      setBodyParts(["all", ...bodyPartsData].sort());
    };

    fetchExerciseData();
  }, []);

  const nextSlide = () => {
    if (startIndex < bodyParts.length - 3) {
      setStartIndex(startIndex + 3);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pt-20 pb-10 gap-x-60 max-h-[250px]">
        {bodyParts.slice(startIndex, startIndex + 3).map((part) => (
          <ExerciseBodyPartCard
            key={part}
            bodyPartName={part}
            bodyPartImage={bodyPartImages[part]}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        ))}
      </div>
      <div className="flex justify-end pt-2">
        <button className="px-4 py-2" onClick={prevSlide}>
          <ArrowLeftIcon className="text-content size-6" />
        </button>
        <button className="px-4 py-2" onClick={nextSlide}>
          <ArrowRightIcon className="text-content size-6" />
        </button>
      </div>
    </div>
  );
};

ExerciseCarousel.propTypes = {
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func,
};

export default ExerciseCarousel;
