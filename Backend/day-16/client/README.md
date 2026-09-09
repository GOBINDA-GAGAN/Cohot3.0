cloudvault/
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-dashboard.png
│   │   ├── hero-mobile.png
│   │   ├── cloud-bg.svg
│   │   └── avatars/
│   │       ├── user-1.png
│   │       ├── user-2.png
│   │       └── user-3.png
│   │
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── cloud.svg
│   │   │   ├── storage.svg
│   │   │   ├── security.svg
│   │   │   ├── collaboration.svg
│   │   │   └── analytics.svg
│   │   │
│   │   └── images/
│   │
│   ├── components/
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Avatar.jsx
│   │   │   └── ProgressBar.jsx
│   │   │
│   │   ├── landing/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── DashboardPreview.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   ├── StorageChart.jsx
│   │   │   ├── RecentFiles.jsx
│   │   │   ├── FileRow.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   └── ActivityFeed.jsx
│   │   │
│   │   └── layout/
│   │       ├── PageContainer.jsx
│   │       ├── Section.jsx
│   │       └── DashboardLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Pricing.jsx
│   │   ├── Features.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   │
│   │   └── dashboard/
│   │       ├── Dashboard.jsx
│   │       ├── Files.jsx
│   │       ├── Shared.jsx
│   │       ├── Starred.jsx
│   │       ├── Trash.jsx
│   │       ├── Recent.jsx
│   │       └── Settings.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFiles.js
│   │   ├── useStorage.js
│   │   └── useModal.js
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── FileContext.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── fileService.js
│   │
│   ├── data/
│   │   ├── features.js
│   │   ├── pricing.js
│   │   ├── testimonials.js
│   │   └── mockFiles.js
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── lib/
│   │   ├── utils.js
│   │   └── constants.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md