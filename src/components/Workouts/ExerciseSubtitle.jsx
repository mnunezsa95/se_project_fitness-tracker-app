import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const ExerciseSubtitle = () => {
  return (
    <div className="flex gap-2 items-center">
      <MonitorHeartIcon sx={{ fontSize: 40, color: "#3B82F6" }} />
      <h3 className="text-xl text-content font-Mona-Sans font-bold ">
        Exercise Library
      </h3>
    </div>
  );
};

export default ExerciseSubtitle;
