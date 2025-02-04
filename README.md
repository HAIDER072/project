# Cargo Shipment Tracker

A modern web application for tracking cargo shipments in real-time. Built with React, Redux, and Leaflet maps integration.

## Features

- 📦 Real-time shipment tracking
- 🗺️ Interactive map visualization using Leaflet
- 📊 Comprehensive shipment dashboard
- ✨ Modern, responsive UI with Tailwind CSS
- 🔄 Real-time status updates
- 📱 Mobile-friendly design

## Live Demo

Visit the live application: [Cargo Shipment Tracker](https://friendly-nasturtium-3bb5c9.netlify.app)

## Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Maps**: React Leaflet
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cargo-tracker-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
VITE_API_URL=<your-api-url>
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
cargo-tracker-frontend/
├── src/
│   ├── components/         # React components
│   ├── store/             # Redux store and slices
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── package.json         # Project dependencies and scripts
```

## Features in Detail

### Shipment Dashboard
- View all shipments in a sortable table
- Filter shipments by status
- Real-time updates of shipment locations
- Detailed view of individual shipments

### Interactive Map
- Visual representation of shipment routes
- Current location tracking
- Route history visualization
- Interactive markers with shipment information

### Shipment Management
- Create new shipments
- Update shipment locations
- Track delivery status
- Monitor ETAs

## Environment Variables

| Variable | Description | Required |
|----------|-------------|-----------|
| VITE_API_URL | Backend API URL | Yes |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Leaflet](https://react-leaflet.js.org/) for map integration
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
