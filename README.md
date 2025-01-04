# Manufacturing Dashboard

## Overview

The Manufacturing Dashboard is a React-based web application designed to provide interactive tools and real-time analytics for manufacturing performance. It includes calculators for key performance metrics such as Overall Equipment Effectiveness (OEE), Revenue Loss, and Cost per Piece, alongside widgets displaying important KPIs like user statistics and sales data.

---

## Dependencies

To run this project, ensure you have the following installed:

1. **Node.js** (v16 or higher)
2. **npm** (v8 or higher) or **yarn**
3. A modern web browser (Google Chrome, Firefox, or Edge recommended)

### Project-Specific Dependencies:
- **react-router-dom**: For routing between pages.
- **lucide-react**: For using SVG icons.
- **tailwindcss**: For styling the UI.

Install all dependencies with:
npm install

---

## Assumptions

1. **Environment**: It is assumed that the application will be run in a development environment during testing and locally hosted using the development server.
2. **Routing**: The routes `/dashboard`  will handle the respective views for the dashboard page.
3. **Data Source**: Metrics and analytics data are hardcoded in the current implementation, and integration with live data sources is not part of this version. Future updates will integrate with real-time data sources, such as APIs or a database.
4. **Styling**: Tailwind CSS has been preconfigured and should not require additional setup.
5. **Browser Compatibility**: The application has been developed and tested on modern browsers; older versions may not be fully supported.

---

## Setup and Installation

1. Clone the repository:
   git clone https://github.com/harshitaa-p/manufacturing-dashboard.git

2. Navigate to the project directory:
   cd manufacturing-dashboard


3. Install dependencies:
   npm install

4. Run the development server:
   npm start

5. Open the application in your browser at `http://localhost:5173`.

---

## Project Structure

- **App.js**: Main entry point for routing and layout setup.
- **pages/**:
  - `Dashboard.js`: Displays the main dashboard view with calculators and KPIs.
- **components/**:
  - `Sidebar.js`: Contains navigation links.
  - `common/Header.js`: Renders the page header.
  - `OEEcalculator.js`, `RevenueLossCal.js`, `CostPerPieceCal.js`: Tools for metric calculations.

---

## How to Use

1. **Navigate Between Pages**: Use the sidebar to switch to `/dashboard`.
2. **View Metrics**: On the dashboard, view KPIs such as "Today's Users" and "Today's Sales".
3. **Use Calculators**:
   - Select a machine and date.
   - Enter relevant inputs to calculate OEE, revenue loss, or cost per piece.

---

## Future Enhancements

- Integration with live data sources via API.
- Enhanced responsiveness for mobile and tablet devices.
- Customizable themes (dark/light modes).
- Localization and multi-language support.

---


## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/).
- Styling powered by [Tailwind CSS](https://tailwindcss.com/).


