# 🌟 Sneha Gupta - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing the work and skills of Sneha Gupta, an aspiring Full-Stack Developer and B.Tech Computer Science student at GLA University.

![Portfolio Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Sneha+Gupta+Portfolio)

## 🚀 Live Demo

- **Live Site**: [Deploy on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/sneha-gupta00/portfolio)
- **GitHub Repository**: [https://github.com/sneha-gupta00/portfolio](https://github.com/sneha-gupta00/portfolio)

## ✨ Features

### 🎨 Design & UX
- **Modern Floating Navigation**: Glassmorphism-inspired navbar with smooth scrolling
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle fade-in and slide-up animations
- **Professional Typography**: Using Poppins and Inter fonts

### 📱 Sections
- **Hero Section**: Professional introduction with social links
- **About**: Detailed background, education, and career goals
- **Projects**: Filterable showcase of technical projects
- **Skills**: Visual representation with proficiency levels
- **Experience**: Professional internship details
- **Certifications**: Industry certifications and achievements
- **Contact**: Working contact form with resume download

### 🛠️ Technical Features
- **Next.js 14**: Latest App Router with server-side rendering
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom design system
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images, lazy loading, and code splitting

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/sneha-gupta00/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Fill in your environment variables (see [Environment Variables](#environment-variables) section)

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required Variables
\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_URL=https://github.com/xyz01
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/xyz8753
NEXT_PUBLIC_EMAIL=xyz@gmail.com
\`\`\`

#### Resend (Server-side)
\`\`\`env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=sneha-gupta-cs22@pia.ac.in
\`\`\`


## 📁 Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills display
│   ├── experience.tsx    # Experience section
│   ├── certifications.tsx # Certifications
│   ├── contact.tsx       # Contact form
│   ├── navigation.tsx    # Navigation bar
│   ├── footer.tsx        # Footer
│   └── theme-provider.tsx # Theme context
├── public/               # Static assets
│   ├── resume.pdf        # Downloadable resume
│   └── images/           # Project images
├── lib/                  # Utility functions
├── .env.example          # Environment variables template
├── .env.local            # Your environment variables
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
\`\`\`

## 🎨 Customization

### Updating Personal Information

1. **Personal Details**: Edit the content in each component file
2. **Projects**: Update the projects array in `components/projects.tsx`
3. **Skills**: Modify the skills data in `components/skills.tsx`
4. **Resume**: Replace `public/resume.pdf` with your resume
5. **Images**: Add your photos to `public/images/`

### Styling Customization

1. **Colors**: Update the color palette in `tailwind.config.ts`
2. **Fonts**: Change fonts in `app/layout.tsx`
3. **Components**: Modify individual component styles
4. **Global Styles**: Edit `app/globals.css`

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `components/navigation.tsx`

## 📧 Contact Form Setup



###  Resend (Server-side)
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Update the API route in `app/api/contact/route.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Deploy to Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO**: Structured data and meta tags
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About Sneha Gupta

- **Education**: B.Tech Computer Science, GLA University (Expected 2026)
- **Specialization**: Full-Stack Development, Java, React.js
- **Email**: [sneha-gupta-cs22@pia.ac.in](mailto:sneha-gupta-cs22@pia.ac.in)
- **LinkedIn**: [Sneha Gupta](https://www.linkedin.com/in/sneha-gupta-843812753)
- **GitHub**: [@sneha-gupta00](https://github.com/sneha-gupta00)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Lucide](https://lucide.dev/) for the icons
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ by Sneha Gupta**

If you found this portfolio helpful, please consider giving it a ⭐ on GitHub!
