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

export const calculateCalorieConsumption = (age, gender, weight, weightUnit, height, heightUnit, activity) => {
  const WEIGHT_CONSTANT = 10;
  const HEIGHT_CONSTANT = 6.25;
  const AGE_CONSTANT = 5;

  let weightInKg;
  let heightInCm;
  gender = gender.toLowerCase();

  if (weightUnit === "lbs") {
    weightInKg = weight * 0.453592;
  } else {
    weightInKg = weight;
  }

  if (heightUnit === "ft") {
    const heightParts = height.match(/(\d+)'(\d*)"/);
    const feet = parseFloat(heightParts[1]);
    const inches = parseFloat(heightParts[2] || 0);
    const totalInches = feet * 12 + inches;
    heightInCm = totalInches * 2.54;
  } else {
    heightInCm = height * 100;
  }

  let bmr;
  if (gender === "male") {
    bmr = WEIGHT_CONSTANT * weightInKg + HEIGHT_CONSTANT * heightInCm - AGE_CONSTANT * age + 5;
  } else {
    bmr = WEIGHT_CONSTANT * weightInKg + HEIGHT_CONSTANT * heightInCm - AGE_CONSTANT * age - 161;
  }

  const activityMultiplier = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extra_active: 1.9,
  };

  const totalCalories = bmr * (activityMultiplier[activity] || 1);
  return Math.round(totalCalories);
};

/* ---------------------------------------- Format Words ---------------------------------------- */

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
