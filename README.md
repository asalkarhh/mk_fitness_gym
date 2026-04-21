# M. K. Fitness Club Website

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Features

- **Home Page**: Overview of all branches and services (no membership plans)
- **Branch Pages**: Dedicated pages for Marunji and Punawale branches with:
  - Branch-specific membership plans
  - Trainer profiles with photos and certifications
  - Manager contact information
  - Photo galleries
  - Location maps
- **Franchise Page**: Comprehensive franchise opportunity page with:
  - Franchise benefits and requirements
  - Investment breakdown
  - Application form
  - Branch location maps
- **Branch Locations**: Interactive maps showing all gym locations on home page
- **Contact Forms**: Different recipients based on page context
- **Responsive Design**: Mobile-first approach with improved CSS
- **Dark Theme**: Premium fitness aesthetic with enhanced styling
- **Animations**: Smooth scroll animations with AOS

## Navigation

- **Home**: Overview and general information
- **Franchise**: Dedicated franchise opportunity page
- **Branch Pages**: `/branch/marunji` and `/branch/punawale`

## Adding Images

To replace placeholder images with your actual gym photos:

1. Add high-quality images to `src/assets/images/`
2. Update the `images` array in `BranchPage.jsx` for each branch
3. Update trainer images in the `trainers` array for each branch
4. Recommended image sizes: 900x600px for gallery images, 400x400px for trainer photos

Example structure:
```
src/assets/images/
├── marunji/
│   ├── gym-interior-1.jpg
│   ├── equipment-1.jpg
│   ├── locker-room.jpg
│   └── cardio-area.jpg
├── punawale/
│   ├── main-gym.jpg
│   ├── weight-room.jpg
│   ├── reception.jpg
│   └── outdoor-area.jpg
└── trainers/
    ├── amit-singh.jpg
    ├── kavita-patel.jpg
    ├── rahul-mehta.jpg
    ├── vikram-joshi.jpg
    ├── sneha-gupta.jpg
    └── arjun-reddy.jpg
```

## CSS Improvements

- Enhanced responsive design for all screen sizes
- Improved card styling with better shadows and borders
- Custom scrollbar styling
- Better form focus states
- Enhanced button hover effects
- Improved navbar and floating action buttons
- Franchise page specific styling
- Branch location map integration

## Branch URLs

- Marunji Branch: `/branch/marunji`
- Punawale Branch: `/branch/punawale`

## Contact Form Behavior

- **Home Page**: Sends to owner@mkfitness.com
- **Branch Pages**: Sends to respective branch manager's email
