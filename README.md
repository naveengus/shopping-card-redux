# Shopping Cart Project

This project is a React-based shopping cart application enhanced with Redux for state management. It allows users to browse products, adjust quantities, and see the updated subtotals, total count of items, and total amount. The application is designed to provide a smooth and responsive user experience.

## Features

- **Product Display:** Shows a list of products with images, descriptions, prices, and categories.
- **Quantity Adjustment:** Allows users to adjust the quantity of each product directly within the UI. The total number of items is also updated dynamically.
- **Subtotal Calculation:** Automatically calculates and displays the subtotal for each product based on the selected quantity.
- **Total Count and Amount Calculation:** Tracks and displays the total number of items in the cart and the overall total amount.
- **Product Removal:** Enables users to remove items from the cart.
- **Responsive Design:** Optimized for both desktop and mobile devices using CSS.

## Technologies Used

- **React.js:** For building the user interface.
- **Redux:** For managing global state, including product data, quantities, subtotals, and total counts.
- **CSS:** For styling components and ensuring a responsive layout.

## Setting Up the Project

1.Install dependencies:

```bash
npm install
```

2.To install Redux and the Redux Toolkit in your project, use the following commands:

```bash
npm install @reduxjs/toolkit react-redux
```

.Build the project for production:

```bash
npm run build
```

## Project Structure

```plaintext
shopping-cart/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Total.jsx
│   ├── redux/
│   │   ├── BlogSlice.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
├── package.json
└── README.md
```

## Code Explanation

### Card Component

The Card component is responsible for displaying each product and allowing users to adjust the quantity. It also calculates the subtotal for each product and updates the global state using Redux actions.

### Total Component

The Total component calculates and displays the overall total of all product subtotals.

### BlogSlice.js

This file contains the Redux slice that manages the state of the shopping cart, including products, quantities, subtotals, total counts, and total amounts.

# website

- [preview](https://react-axios-blogs.netlify.app/)
