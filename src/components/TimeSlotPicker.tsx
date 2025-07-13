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

  const isSunday = selectedDate ? new Date(selectedDate).getDay() === 0 : false;

  const nowPlus1Hour = new Date(now.getTime() + 60 * 60 * 1000); 
  const currentMinutes = nowPlus1Hour.getHours() * 60 + nowPlus1Hour.getMinutes();

  return (
    <div className="md:w-1/3 max-h-96 overflow-y-auto p-6 border-r">
      <div className="grid gap-2">
        {timeSlots.map((time) => {
          const [hourStr, minuteStr] = time.split(":");
          const minutes = parseInt(hourStr) * 60 + parseInt(minuteStr);
          const isPast = isToday && minutes < currentMinutes;

          const disabled = isSunday || isPast;

          return (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              onClick={() => !disabled && setSelectedTime(time)}
              className={`w-full shadow-none ${
                disabled ? "opacity-50 line-through pointer-events-none" : ""
              }`}
              disabled={disabled}
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
