import { Button } from "@/components/ui/button";

interface Props {
  timeSlots: string[];
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
  formatTo12Hour: (time: string) => string;
  selectedDate: Date | undefined;
}

const TimeSlotPicker = ({
  timeSlots,
  selectedTime,
  setSelectedTime,
  formatTo12Hour,
  selectedDate,
}: Props) => {
  const now = new Date();
  const isToday =
    selectedDate &&
    now.toDateString() === new Date(selectedDate).toDateString();

  const nowPlus1Hour = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour ahead
  const currentMinutes = nowPlus1Hour.getHours() * 60 + nowPlus1Hour.getMinutes();

  return (
    <div className="md:w-1/3 max-h-96 overflow-y-auto p-6 border-r">
      <div className="grid gap-2">
        {timeSlots.map((time) => {
          const [hourStr, minuteStr] = time.split(":");
          const minutes = parseInt(hourStr) * 60 + parseInt(minuteStr);
          const isPast = isToday && minutes < currentMinutes;

          return (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              onClick={() => !isPast && setSelectedTime(time)}
              className={`w-full shadow-none ${
                isPast ? "opacity-50 line-through pointer-events-none" : ""
              }`}
            >
              {formatTo12Hour(time)}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlotPicker;
