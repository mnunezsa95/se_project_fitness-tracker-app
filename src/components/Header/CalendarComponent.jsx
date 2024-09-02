import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const handleDateClick = (arg) => {
    alert("Date clicked: " + arg.dateStr);
  };

  return (
    <div className="p-2 dark:bg-backgroundAccent bg:white rounded-lg w-[420px] max-w-[420px]">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={[
          { title: "Event 1", date: "2024-09-01" },
          { title: "Event 2", date: "2024-09-10" },
        ]}
        className="calendar-container"
      />
    </div>
  );
};

export default CalendarComponent;
