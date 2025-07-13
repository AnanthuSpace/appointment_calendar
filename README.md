# Appointment Calendar Frontend

This is a React-based frontend application for managing clinic appointments. It features a calendar view, time slot picker, appointment forms, user login/logout, and persistent storage using `localStorage`.


## Live Demo

[View Live Demo](https://appointment-calendar-azure.vercel.app)


## Features

* **User Authentication:** Simple email/password login (mocked), with persistent login state.
* **Protected Routes:** Access to appointment calendar is restricted to logged-in users.
* **Appointment Calendar:** Select dates and book time slots.
* **Time Slot Picker:** Displays 15-minute intervals, disables past and Sunday slots.
* **Appointment Management:** Add, edit, and delete appointments linked to patients and doctors.
* **Logout:** Securely log out and redirect to login.
* **Theme Toggle:** Switch between light and dark themes.
* **Responsive UI:** Built with Tailwind CSS and ShadCN components for modern design.
* **Toast Notifications:** User feedback on actions like login, save, delete.


## Technologies Used

* React with TypeScript
* React Router v6
* Tailwind CSS
* ShadCN UI Components
* Sonner for Toast Notifications
* LocalStorage for persistence


## Getting Started

### Prerequisites

* Node.js (v16 or higher recommended)
* npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/appointment-calendar-frontend.git
cd appointment-calendar-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.


## Folder Structure

```
src/
 ├─ components/       # Reusable UI components (Calendar, AppointmentForm, etc.)
 ├─ pages/            # Page components (Login, CalendarView)
 ├─ routes/           # React Router setup
 ├─ App.tsx           # Main app component
 ├─ main.tsx          # React app entry point
 └─ styles/           # Tailwind and global styles
```

## Usage

* Login with credentials:

  * Email: `test@gmail.com`
  * Password: `test@123`

* Navigate through the calendar, select dates, pick available time slots, and add appointments.

* Use the **Logout** button to exit the session.

* Toggle theme using the button on the top-right corner.


## Contributing

Feel free to open issues or submit pull requests for bug fixes, features, or improvements.


