<h1 align="center">StayCationBnB-A Full Stack Airbnb Clone Application</h1> 



<br />
<p align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=blue" alt="Nextjs" />
    <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Reactjs" />
    <img src="https://img.shields.io/badge/MongoDB-339933?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongodb" />
    <img src="https://img.shields.io/badge/Prisma-5A67D8?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/Leaflet-green?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary-css&logoColor=white" alt="Cloudinary" />
</p>


  
  <h3 align="center"><a href="https://staycation-xi.vercel.app/"><strong>« Demo Application »</strong></a></h3>

<p align="center"> 
    Airbnb is an American company operating an online marketplace for short-and-long-term homestays and experiences in various countries and regions. This project is a comprehensive Airbnb clone application built with Next.js 13 App Router, featuring full authentication, real-time booking system, and advanced search functionality.
</p>



##  Tech Stack

🔹Frontend: Next.js 13, React, Tailwind CSS

🔹Backend: Next.js API Routes, Prisma ORM

🔹Database: MongoDB

🔹Authentication: NextAuth.js

🔹Image Hosting: Cloudinary CDN

🔹Form Handling: React Hook Form

🔹Date Management: React Date Range

🔹Notifications: React Hot Toast

## Key Features

🔹Authentication & User Management

        1.Multi-provider authentication (Credentials, Google, GitHub)
        
        2.Protected routes and API endpoints
        
        3.User profile management

🔹Property Management

        1.Property listing creation and deletion
        
        2.Image upload with Cloudinary integration
        
        3.Advanced pricing calculation system
        
        4.Property categorization

🔹Booking System

        1.Real-time availability checking
        
        2.Booking creation and management
        
        3.Guest/Owner reservation cancellation
        
        4.Date range selection with conflicts prevention

🔹Search & Filters

        1.Category-based filtering
        
        2.Location-based search
        
        3.Date range availability filtering
        
        4.Guest/room/bathroom quantity filters
        
        5.Shareable URL filters for search results

🔹UI/UX Features

        1.Responsive design with Tailwind
        
        2.Loading states and animations
        
        3.Empty state handling
        
        4.Toast notifications for user feedback
        
        5.Favorites system


## Project Structure

        ├── app/
        │   ├── api/          # API routes
        │   ├── components/   # React components
        │   ├── hooks/        # Custom hooks
        │   ├── libs/         # Utility functions
        │   ├── providers/    # Context providers
        │   └── types/        # TypeScript types
        ├── prisma/
        │   └── schema.prisma # Database schema
        └── public/           # Static assets


## API Routes

🔹Authentication

`POST /api/register` - User registration

`POST /api/login` - User login

`GET /api/auth/[...nextauth]` - NextAuth endpoints

🔹Properties

`GET /api/properties` - List properties

`POST /api/properties` - Create property

`DELETE /api/properties/:id` - Delete property

🔹Reservations

`POST /api/reservations` - Create reservation

`DELETE /api/reservations/:id` - Cancel reservation

🔹Favorites

`POST /api/favorites/:id` - Add to favorites

`DELETE /api/favorites/:id` - Remove from favorites

## Prerequisites

🔹Node.js 14.x or higher

🔹npm or yarn

🔹MongoDB instance

🔹Cloudinary account

🔹Google OAuth credentials

🔹GitHub OAuth credentials

## Getting Started

1. Clone the repository:

        git clone https://github.com/Maliha-Tasnim/staycation-bnb
        
        cd airbnb-clone

2. Install dependencies:

        npm install


3. Configure environment variables - Create a .env file in the root directory with the following variables:

        # Database
   
        DATABASE_URL="your_mongodb_url"

        # Authentication
   
        GOOGLE_CLIENT_ID="your_google_client_id"
        GOOGLE_CLIENT_SECRET="your_google_client_secret"
        GITHUB_ID="your_github_id"
        GITHUB_SECRET="your_github_secret"
        NEXTAUTH_SECRET="your_nextauth_secret"

        # Cloudinary
   
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_name"


5. Initialize Prisma:

        npx prisma generate
   
        npx prisma db push


6. Start development server:

        npm run dev
