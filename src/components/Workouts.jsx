import Header from "./Header/Header";
import ExerciseLibrary from "./Workouts/ExerciseLibrary";
import ExerciseTitle from "./Workouts/ExerciseTitle";
import ExerciseSubtitle from "./Workouts/ExerciseSubtitle";
import Divider from "./General/Divider";
import ExerciseSearchbar from "./Workouts/ExerciseSearchbar";
import ExerciseCarousel from "./Workouts/ExerciseCarousel";

const Workouts = () => {
  return (
    <>
      <Header />
      <ExerciseTitle />
      <div className="flex items-center justify-between pt-5">
        <ExerciseSubtitle />
        <ExerciseSearchbar />
      </div>
      <Divider />
      <ExerciseLibrary />
      <ExerciseCarousel />
    </>
  );
};

export default Workouts;
