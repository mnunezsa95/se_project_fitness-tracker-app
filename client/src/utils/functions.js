import { useEffect } from "react";

export const calculateBMI = (weight, weightUnit, heightFeet, heightInches, heightMeters, heightUnit) => {
  let weightInKg;
  let heightInMeters;

  if (weightUnit === "lbs") weightInKg = weight * 0.453592;
  else weightInKg = weight;

  if (heightUnit === "ft") {
    const heightInInches = parseFloat(heightFeet) * 12 + parseFloat(heightInches);
    heightInMeters = heightInInches * 0.0254;
  } else {
    heightInMeters = heightMeters;
  }

  if (heightInMeters > 0) {
    return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
  } else {
    return null;
  }
};

export const classifyBMI = (bmiScore) => {
  let bmiClassification;

  if (bmiScore < 18.5) {
    bmiClassification = "Underweight";
  } else if (bmiScore >= 18.5 && bmiScore <= 24.99) {
    bmiClassification = "Normal";
  } else if (bmiScore >= 25 && bmiScore <= 29.99) {
    bmiClassification = "Overweight";
  } else if (bmiScore >= 30) {
    bmiClassification = "Obese";
  } else {
    return "Could not calculate a valid BMI Score; Please check your inputs";
  }

  return bmiClassification;
};

export const formatWords = (sentence) => {
  if (!sentence) return "";
  const commonWords = new Set(["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "is", "with"]);

  return sentence
    .split(" ")
    .map((word, index) => {
      if (index === 0 || index === sentence.split(" ").length - 1 || !commonWords.has(word.toLowerCase())) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
};

export const useEscapeKeyHandler = (modals) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        Object.keys(modals).forEach((modalKey) => {
          if (modals[modalKey].isOpen) {
            modals[modalKey].handleCloseModal();
          }
        });
      }
    };

    const handleClickOutside = (evt) => {
      Object.keys(modals).forEach((modalKey) => {
        const modalElement = modals[modalKey].modalRef?.current;
        if (modals[modalKey].isOpen && modalElement && !modalElement.contains(evt.target)) {
          modals[modalKey].handleCloseModal();
        }
      });
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modals]);
};
