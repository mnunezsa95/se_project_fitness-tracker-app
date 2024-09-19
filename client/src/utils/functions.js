import { useEffect } from "react";

/* ---------------------------------------- CALCULATE BMI --------------------------------------- */

export const calculateBMI = (weight, weightUnit, height, heightUnit) => {
  let weightInKg;
  let heightInCm;

  if (weightUnit === "lb") {
    weightInKg = weight * 0.453592;
  } else {
    weightInKg = weight;
  }

  if (heightUnit === "ft") {
    const heightParts = height.split("'");
    const feet = Number(heightParts[0]);
    const inches = Number(heightParts[1] || 0);
    const totalInches = feet * 12 + inches;
    heightInCm = totalInches * 2.54;
  } else {
    heightInCm = Number(height);
  }

  if (heightInCm > 0) {
    const heightInMeters = heightInCm / 100;
    return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
  } else {
    return null;
  }
};

/* ---------------------------------------- CLASSIFY BMI ---------------------------------------- */

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

/* ------------------------------------- CALORIE CALCULATOR ------------------------------------- */

export const calculateCalorieConsumption = (age, gender, weight, weightUnit, height, heightUnit, activity) => {
  const WEIGHT_CONSTANT = 10;
  const HEIGHT_CONSTANT = 6.25;
  const AGE_CONSTANT = 5;

  let weightInKg;
  let heightInCm;
  gender = gender.toLowerCase();

  if (weightUnit === "lb") {
    weightInKg = weight * 0.453592;
  } else {
    weightInKg = weight;
  }

  if (heightUnit === "ft") {
    const heightParts = height.split("'");
    const feet = Number(heightParts[0]);
    const inches = Number(heightParts[1] || 0);
    const totalInches = feet * 12 + inches;
    heightInCm = totalInches * 2.54;
  } else {
    heightInCm = height;
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

/* ----------------------------------- WATER INTAKE CALCULATOR ---------------------------------- */
export const calculateWaterIntake = (weight, weightUnit, activity) => {
  const WEIGHT_CONSTANT = 0.0245;
  let weightInKg;

  if (weightUnit === "lb") {
    weightInKg = weight * 0.453592;
  } else {
    weightInKg = weight;
  }

  const activityMultiplier = {
    sedentary: 0,
    lightly_active: 0.35,
    moderately_active: 0.67,
    very_active: 1.05,
    extra_active: 1.37,
  };

  const waterIntakeValue = weightInKg * WEIGHT_CONSTANT + activityMultiplier[activity];

  return +waterIntakeValue.toFixed(2);
};

/* ---------------------------------------- FORMAT WORDS ---------------------------------------- */

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

/* --------------------------------------- ESCAPE HANDLER --------------------------------------- */

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
