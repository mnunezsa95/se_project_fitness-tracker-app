import Header from "./Header/Header";
import ExerciseLibrary from "./Workouts/ExerciseLibrary";
import ExerciseTitle from "./Workouts/ExerciseTitle";
import Divider from "./General/Divider";
import ExerciseSearchbar from "./Workouts/ExerciseSearchbar";

const Workouts = () => {
  return (
    <>
      <Header />
      <ExerciseTitle />
      <ExerciseSearchbar />
      <Divider />
      <ExerciseLibrary />
    </>
  );
};

export default Workouts;
