import Header from "./Header/Header";
import ExerciseLibrary from "./Workouts/ExerciseLibrary";
import ExerciseTitle from "./Workouts/ExerciseTitle";
import ExerciseSubtitle from "./Workouts/ExerciseSubtitle";
import Divider from "./General/Divider";
import ExerciseSearchbar from "./Workouts/ExerciseSearchbar";
import ExerciseCarousel from "./Workouts/ExerciseCarousel";
import { useState } from "react";

const Workouts = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <Header />
      <ExerciseTitle />
      <div className="flex items-center justify-between pt-5">
        <ExerciseSubtitle />
        <ExerciseSearchbar exercises={exercises} setExercises={setExercises} />
      </div>
      <Divider />
      <ExerciseCarousel bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Divider />
      <ExerciseLibrary
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Workouts;
