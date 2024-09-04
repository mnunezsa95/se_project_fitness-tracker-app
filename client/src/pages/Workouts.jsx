import { useState } from "react";
import Header from "../components/Header/Header";
import ExerciseLibrary from "../components/Workouts/ExerciseLibrary";
import ExerciseTitle from "../components/Workouts/ExerciseTitle";
import ExerciseSubtitle from "../components/Workouts/ExerciseSubtitle";
import Divider from "../components/General/Divider";
import ExerciseSearchbar from "../components/Workouts/ExerciseSearchbar";
import ExerciseCarousel from "../components/Workouts/ExerciseCarousel";

const Workouts = () => {
  const [bodyPart, setBodyPart] = useState("");
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
