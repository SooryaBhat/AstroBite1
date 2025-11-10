# AstroBite Design Guidelines

## Design Concept
**Theme:** Space restaurant on Mars — viewing a futuristic UI inside a Mars dome at night  
**Style:** Glassmorphism with blurred translucent panels, glowing Mars red accents, large futuristic typography

## Color Palette
- Deep Black: `#0d0d0d` (primary background)
- Mars Red: `#b11226` (primary accent, glowing effects)
- Neon Orange: `#ff5c39` (secondary accent)
- Silver: `#e6e6e6` (text, borders)

## Typography
- **Headings:** Orbitron (Google Fonts) — large, futuristic, bold
- **Body Text:** Exo 2 (Google Fonts) — clean, readable
- Use generous letter-spacing for headings to enhance futuristic feel

## Layout System
- **Mobile-first:** Optimized for max-width ~480px
- **Spacing:** Consistent padding using units of 4 (16px, 24px, 32px)
- **Shared Elements:** All pages share same Mars background image and navigation

## Images
- **Background:** Full-screen Mars landscape/dome interior (`mars-bg.jpg`) — fixed attachment, covers entire viewport
- **Logo:** AstroBite logo (`astrobite-logo.png`) — centered on home page, navbar size elsewhere
- **Menu Items:** 4-5 dish photos in Recommended Menu section
- **Gallery:** 6-8 space/restaurant photos in grid layout
- No large hero image; background serves as ambient environment

## Core Components

### Navigation
- **Top-left:** Light/Dark mode toggle (🌙/☀️ icons)
- **Top-right:** Hamburger menu icon (☰)
- **Slide-out Menu:** Slides from right, contains links to Home, Menu, About, Gallery, Contact

### Glassmorphic Panels
- Blurred translucent backgrounds (backdrop-filter: blur)
- Subtle borders with silver/Mars red
- Semi-transparent backgrounds (rgba with 0.1-0.3 alpha)
- Rounded corners (12-16px radius)

### Buttons
- Primary: Mars red background with glow effect
- Hover/tap: Increased glow intensity
- Smooth transitions on all states
- If placed over images, use blurred backgrounds

## Page Structures

### Home Page
- Centered large logo "AstroBite" + tagline "Taste Beyond Earth"
- 3 glassmorphic statistic boxes below:
  - "25+ Unique Dishes"
  - "1000+ Happy Customers"  
  - "Serving Since 2087"

### Menu Page
- Sticky search bar at top with filter button
- "Recommended Menu" section: 4-5 cards (image, title, price) in glassmorphic containers
- "Full Menu" section: Scrollable dish list

### About Page
- Title "About AstroBite" in large Orbitron
- Glassmorphic panel with Mars restaurant origin story
- Mission statement paragraph

### Gallery/Experience Page
- Grid of 6-8 photos (2 columns on mobile)
- Customer feedback cards below: name, review text, 5-star icons

### Contact/Reserve Page
- Contact details in glassmorphic panel (phone, email, Mars base address)
- Reservation form: Name, Email, Date, Time, Guests
- "Reserve Now" button with prominent glow

## Interactions & Animations
- **Buttons/Cards:** Subtle glow on hover/tap
- **Page Transitions:** Smooth fade or slide between sections
- **Scroll Animations:** Fade-in for sections as they enter viewport
- **Theme Toggle:** Smooth transition between dark/light modes, saved to localStorage
- **Menu Toggle:** Smooth slide-in/out animation

## Theme Modes
**Dark Mode (default):**
- Background: deep black with Mars red glows
- Text: silver/white
- Panels: very dark with subtle transparency

**Light Mode:**
- Background: lighter with adjusted opacity
- Text: darker shades
- Panels: lighter glassmorphic effect
- Maintain Mars red/neon orange accents

## Responsive Behavior
- Mobile-first: 100% width up to 480px
- Stack elements vertically on small screens
- Maintain legibility with appropriate font scaling
- Touch-friendly button/tap targets (min 44px)

## Accessibility
- Sufficient contrast ratios despite glassmorphism
- Focus states visible on interactive elements
- Form labels clearly associated with inputs
- Alt text for all images