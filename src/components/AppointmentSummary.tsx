import { Button } from "@/components/ui/button";

interface Props {
  date: Date | undefined;
  selectedTime: string | null;
  formatTo12Hour: (time: string) => string;
}

const AppointmentSummary = ({ date, selectedTime, formatTo12Hour }: Props) => {
  return (
    <div className="flex flex-col gap-4 border-t px-6 py-5">
      <div className="text-sm">
        {date && selectedTime ? (
          <>
            Your meeting is booked for{" "}
            <span className="font-medium">
              {date?.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </span>{" "}
            at{" "}
            <span className="font-medium">{formatTo12Hour(selectedTime)}</span>.
          </>
        ) : (
          <>Select a date and time for your meeting.</>
        )}
      </div>
      <Button disabled={!date || !selectedTime} variant="outline">
        Continue
      </Button>
    </div>
  );
};

export default AppointmentSummary;