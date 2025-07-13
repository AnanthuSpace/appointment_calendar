import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import CalendarSection from "@/components/CalendarSection";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import AppointmentForm from "@/components/AppointmentForm";

const CalendarView = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const formatTo12Hour = (time: string) => {
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr;
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-6">
        Frontend Assignment: Appointment Calendar for Clinic Staff
      </h1>

      <Card className="gap-0 p-0">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <CalendarSection date={date} setDate={setDate} bookedDates={[]} />
            <TimeSlotPicker
              timeSlots={timeSlots}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              formatTo12Hour={formatTo12Hour}
              selectedDate={date}
            />
            <AppointmentForm
              selectedDate={date}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CalendarView;
