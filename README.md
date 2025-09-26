# Product Comparison App

## Overview
This is a responsive React.js web app that allows users to compare multiple products side-by-side. Users can browse a searchable list of products, view key details like price and features, and select up to three products to compare in a clear, visual layout that highlights their differences. The app includes light/dark mode toggle and persists user preferences across sessions.

## Features
- Display a grid of products with name, brand, image, price, and key features
- Search bar to filter products by name or brand
- Select up to 3 products to compare side-by-side
- Highlight differences in comparison for easy evaluation
- Clear or remove products from comparison
- Light and dark mode toggle with persistence
- Responsive design for desktop and mobile
- Keyboard accessible for better usability
- Persists selection and theme in localStorage

## Getting Started

### Prerequisites
- Node.js (recommended latest stable version)
- npm or yarn package manager

### Installation
1. Clone the repository:
git clone <repository-url>

2. Navigate to the project directory:
cd product-comparison-app

3. Install dependencies:
npm install
or
yarn install

4. Start the development server:
npm start
or
yarn start

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage
- Use the search box to filter products.
- Click on "Add to Compare" buttons to select products for comparison.
- View selected products in the comparison table with differences highlighted.
- Toggle between light and dark mode using the button in the header.
- Clear the comparison list using the provided button.

## Technologies Used
- React.js (Functional Components & Hooks)
- HTML5, CSS3 with CSS variables for theming
- LocalStorage API for persistence

## License
This project is licensed under the MIT License.
