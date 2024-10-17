# Parcel Management Website

A full-featured web application that allows users to book parcels, track their delivery status, and manage the entire parcel delivery process. Admins can assign delivery personnel, while delivery persons can update the status of each parcel in real time.

## Features

- **User Dashboard:**
  - Book parcels for delivery.
  - Track parcel status in real-time.
  - View parcel history.
  
- **Admin Dashboard:**
  - Manage users and parcels.
  - Assign delivery personnel to parcels.
  - Monitor parcel status and delivery times.
  
- **Delivery Personnel Dashboard:**
  - View assigned parcels.
  - Update the parcel status (e.g., picked up, in transit, delivered).

- **Parcel Tracking:**
  - Real-time tracking of parcels with status updates.
  - Map-based parcel tracking (using Leaflet for interactive maps).

- **Authentication:**
  - Secure user authentication (e.g., with JWT, Google OAuth).

## Tech Stack

- **Frontend:**
  - React.js (with Vite)
  - Tailwind CSS for styling
  - React Leaflet for map integration

- **Backend:**
  - Node.js with Express.js
  - MongoDB for database
  - Mongoose for data modeling

- **Other Libraries:**
  - `react-rating` for user reviews and ratings
  - JWT for authentication
  - Cloudinary for handling file uploads (if applicable)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Git** for version control

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samio11/DropMate
   cd parcel-management-website

Start the backend:

bash
Copy code
cd server
npm run dev
Start the frontend:

bash
Copy code
cd client
npm run dev

cd server
npm run dev
Start the frontend:

cd client
npm run dev
