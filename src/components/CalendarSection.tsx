import { Calendar } from "@/components/ui/calendar";

interface CalendarSectionProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  bookedDates: Date[];
}

const CalendarSection = ({ date, setDate }: CalendarSectionProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDisabled = (current: Date) => {
    const isSunday = current.getDay() === 0;
    const selectedDate = new Date(current);
    selectedDate.setHours(0, 0, 0, 0);
    const isPast = selectedDate < today;
    return isSunday || isPast;
  };

  return (
    <div className="md:w-1/3 p-6 border-r">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={date}
        disabled={isDisabled}
        showOutsideDays={false}
        className="bg-transparent p-0 w-full"
        modifiers={{
          disabled: isDisabled,
        }}
        modifiersClassNames={{
          disabled: "line-through opacity-50 text-gray-400",
        }}
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleString("en-US", { weekday: "short" }),
        }}
      />
    </div>
  );
};

export default CalendarSection;
