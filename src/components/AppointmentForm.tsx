import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { patients, doctors } from "@/constants/data";
import { toast } from "sonner";

interface Props {
  selectedTime: string | null;
  selectedDate: Date | undefined;
}


const AppointmentForm = ({ selectedTime, selectedDate }: Props) => {
  const [appointment, setAppointment] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(patients[0].id);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].id);

  const dateKey = selectedDate
    ? `appointments-${selectedDate.toISOString().split("T")[0]}`
    : "";

  useEffect(() => {
    if (!selectedDate || !selectedTime) return;

    const existing = JSON.parse(localStorage.getItem(dateKey) || "[]");
    const found = existing.find((item: any) => item.time === selectedTime);

    setAppointment(found || null);

    if (found) {
      setSelectedPatient(found.patientId);
      setSelectedDoctor(found.doctorId);
    } else {
      setSelectedPatient(patients[0].id);
      setSelectedDoctor(doctors[0].id);
    }
  }, [selectedDate, selectedTime]);

  if (!selectedDate || !selectedTime) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const newAppointment = {
      time: selectedTime,
      doctorId: selectedDoctor,
      patientId: selectedPatient,
    };

    let existing = JSON.parse(localStorage.getItem(dateKey) || "[]");
    existing = existing.filter((a: any) => a.time !== selectedTime);
    const updated = [...existing, newAppointment];

    localStorage.setItem(dateKey, JSON.stringify(updated));
    setAppointment(newAppointment);
    setOpen(false);
    toast.success("Appointment saved!");
  };

  const handleDelete = () => {
    if (!selectedDate || !selectedTime) return;

    let existing = JSON.parse(localStorage.getItem(dateKey) || "[]");
    existing = existing.filter((a: any) => a.time !== selectedTime);

    localStorage.setItem(dateKey, JSON.stringify(existing));
    setAppointment(null);
    toast.success("Appointment deleted.");
  };

  return (
    <div className="md:w-1/3 p-6">
      <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>

      {appointment ? (
        <div className="space-y-2 text-sm">
          <p>
            <strong>Patient:</strong> {patients.find((p) => p.id === appointment.patientId)?.name}
          </p>
          <p>
            <strong>Doctor:</strong> {doctors.find((d) => d.id === appointment.doctorId)?.name}
          </p>
          <p>
            <strong>Time:</strong> {selectedTime}
          </p>

          <div className="flex gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Appointment</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm">Patient</label>
                    <select
                      className="w-full border rounded p-2 text-sm"
                      value={selectedPatient}
                      onChange={(e) => setSelectedPatient(e.target.value)}
                    >
                      {patients.map((p) => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">Doctor</label>
                    <select
                      className="w-full border rounded p-2 text-sm"
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                    >
                      {doctors.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Save Changes</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground space-y-4">
          <p>No appointment scheduled at this time.</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="default">Add Appointment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Appointment</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm">Patient</label>
                  <select
                    className="w-full border rounded p-2 text-sm"
                    value={selectedPatient}
                    onChange={(e) => setSelectedPatient(e.target.value)}
                  >
                    {patients.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm">Doctor</label>
                  <select
                    className="w-full border rounded p-2 text-sm"
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                  >
                    {doctors.map((d) => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" className="w-full">Save Appointment</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
