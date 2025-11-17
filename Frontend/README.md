# Oexa Dental Clinic - Frontend

This is the frontend structure for the Oexa Dental Clinic website.

## Folder Structure

```
Frontend/
├── html/          # HTML files
│   ├── index.html      # Home page
│   ├── about.html      # About Us page
│   ├── services.html   # Services page
│   └── contact.html    # Contact page
├── css/           # CSS stylesheets
│   └── styles.css      # Main stylesheet
├── js/            # JavaScript files
│   ├── navbar.js       # Navbar component
│   ├── footer.js       # Footer component
│   ├── main.js         # Main JavaScript file
│   └── contact.js      # Contact form handler
└── assets/        # Images and other assets (to be added)
    └── images/
```

## Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive design
- **Modern UI**: Clean and professional design suitable for a dental clinic
- **Navigation**: Dynamic navbar that highlights the current page
- **Contact Form**: Functional contact form with validation
- **Footer**: Consistent footer across all pages

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5.3.0 (via CDN)

## Usage

1. Open any HTML file in a web browser
2. The navbar and footer are dynamically loaded via JavaScript
3. All pages are linked together through the navigation menu

## Pages

- **Home (index.html)**: Landing page with hero section and services overview
- **About Us (about.html)**: Information about the clinic, mission, and team
- **Services (services.html)**: Detailed list of dental services offered
- **Contact (contact.html)**: Contact form and clinic information

## Notes

- Bootstrap is loaded via CDN, so an internet connection is required
- Image placeholders are referenced but actual images need to be added to the `assets/images/` folder
- The contact form currently shows an alert on submission - backend integration needed for actual functionality

