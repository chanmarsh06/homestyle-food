# 🍲 Amma's Kitchen - Homestyle Food Delivery Website

A complete, production-ready homestyle food delivery website built with Next.js 16, TypeScript, Tailwind CSS, Ant Design, GSAP, and Framer Motion.

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Fully responsive across all devices
- **Light/Dark Mode**: Seamless theme switching with localStorage persistence
- **Modern UI**: Clean, elegant design with Ant Design components
- **Accessibility**: Semantic HTML, proper alt texts, and keyboard navigation

### 🎬 Animations
- **GSAP ScrollTrigger**: Smooth scroll-based animations
- **Framer Motion**: Subtle transitions and micro-interactions
- **Loading States**: Skeleton loaders and smooth transitions
- **Hover Effects**: Interactive elements with smooth feedback

### 📱 Pages
- **Home** (`/`) - Hero, featured dishes, about, testimonials, CTA
- **Menu** (`/menu`) - Filterable dish catalog with search
- **About** (`/about`) - Chef story and animated timeline
- **Gallery** (`/gallery`) - Image gallery with preview functionality
- **Testimonials** (`/testimonials`) - Customer reviews with carousel
- **Order** (`/order`) - Order form with WhatsApp integration
- **Contact** (`/contact`) - Contact form and location map

### 🛠️ Technical Features
- **Next.js 16 App Router**: Latest routing and server components
- **TypeScript**: Full type safety throughout the application
- **Image Optimization**: Smart ImageManager component with fallbacks
- **Performance**: Optimized loading, lazy loading, and code splitting
- **SEO**: Proper metadata, structured data, and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd homestyle-food
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 16 App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── menu/              # Menu page with filters
│   ├── order/             # Order page
│   ├── testimonials/      # Testimonials page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ImageManager.tsx   # Smart image component
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── ...
├── context/               # React contexts
│   └── ThemeContext.tsx   # Theme provider
├── data/                  # Static data
│   └── dishes.ts          # Menu items
├── hooks/                 # Custom hooks
├── lib/                   # Utilities
├── styles/                # Global styles
├── types/                 # TypeScript types
└── asset/                 # Static assets
    └── bg/                # Background images
```

## 🎨 Styling System

### CSS Variables
The project uses a comprehensive CSS variable system for consistent theming:

```css
:root {
  --color-primary-green: #3B7A57;
  --color-highlight-cta: #FF8C00;
  --color-background: #FFFFFF;
  /* ... more variables */
}

[data-theme="dark"] {
  --color-background: #1a1a1a;
  --color-text-primary: #e5e5e5;
  /* ... dark mode overrides */
}
```

### Tailwind Integration
Custom Tailwind utilities map to CSS variables:

```typescript
// tailwind.config.ts
colors: {
  primary: "var(--color-primary-green)",
  highlight: {
    cta: "var(--color-highlight-cta)",
  },
  // ...
}
```

## 🎬 Animation System

### GSAP ScrollTrigger
```typescript
gsap.fromTo(items, 
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    }
  }
);
```

### Framer Motion
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

## 📦 Key Components

### ImageManager
Smart image component with:
- Next.js Image optimization
- Skeleton loading states
- Error fallbacks
- Static/dynamic image support

### ThemeProvider
Global theme management:
- Light/dark mode switching
- localStorage persistence
- CSS variable updates

### MotionWrapper
Reusable animation wrapper:
- Consistent entrance animations
- Stagger support
- Scroll-based triggers

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

### Customization
1. **Colors**: Update CSS variables in `src/styles/globals.css`
2. **Fonts**: Modify font imports in `src/app/layout.tsx`
3. **Menu Items**: Edit `src/data/dishes.ts`
4. **Contact Info**: Update contact details in components

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License
MIT License - see LICENSE file for details

## 🙏 Acknowledgments
- Next.js team for the amazing framework
- Ant Design for the component library
- GSAP for powerful animations
- Tailwind CSS for utility-first styling

---

**Built with ❤️ for homestyle food lovers**
