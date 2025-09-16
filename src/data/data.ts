import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}



export const experiences: Experience[] = [
  {
    company: "HashPro Academy, Mumbai",
    duration: "Feb 2024 - Present",
    role: "Senior Digital Marketing Specialist & Program Coordinator",
    desc: "Led lead generation strategies increasing conversions by 50%, managed ₹1–1.5L ad budgets, mentored interns, and aligned marketing with sales goals.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Swio Corporate",
    duration: "Jan 2022 - Feb 2024",
    role: "Senior Digital Marketing Executive",
    desc: "Delivered 10+ client projects across education, healthcare, retail, and interiors. Achieved a 45–50% ROAS growth via data-driven campaign optimization.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Amazon",
    duration: "Aug 2020 - Jul 2021",
    role: "Machine Learning Data Associate",
    desc: "Analyzed event videos and performance metrics, contributing to process improvements and operational efficiency.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Seanergy Digital",
    duration: "Jan 2020 - Jul 2020",
    role: "Business Development Executive",
    desc: "Handled client acquisition and lead generation through cold calling, research, and outreach.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "TriOptus LLC",
    duration: "Jun 2019 - Nov 2019",
    role: "Talent Acquisition Specialist",
    desc: "Managed end-to-end recruitment cycles for global clients like Apple, HCL, and MasterCard.",
    dotColor: "bg-[#FD853A]",
  },
];

export const buttons: string[] = [
  "Social Media",
  "SEO",
  "Content Marketing",
  "Email Campaigns",
  "Analytics",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "4.9 Average Rating",
  },
  {
    icon: Award,
    name: "25+ Winning Awards",
  },
  {
    icon: ShieldCheck,
    name: "Certified Product Design",
  },
];

export const skills: string[] = [

  "SEO Strategy",
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "Content Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "Marketing Analytics",
  "Google Analytics",
  "Performance Marketing",
  "Brand Strategy",
  "Marketing Automation",
  "Growth Marketing",
  "A/B Testing",
  "Keyword Research",
  "Campaign Management",
  "Funnel Optimization"
];

export const blogs: Blog[] = [
  {
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80",
    button: "Read More",
    name: "Emma Rodriguez",
    date: "8 Oct, 2024",
    title: "SEO Strategies That Actually Work in 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    button: "Explore",
    name: "Michael Chen",
    date: "22 Sep, 2024",
    title: "Social Media Algorithms: Staying Ahead of the Curve",
  },
  {
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
    button: "Check Now",
    name: "Priya Sharma",
    date: "15 Oct, 2024",
    title: "Content Marketing: Quality vs. Quantity Debate",
  },
];
export const portfolioData: PortfolioItem[] = [
  {
    image: "/google1.jpg", // Replace with actual image path
    title: "Dr. Jaydev Dental - Google Business Profile Optimization",
    href: "/project-google-business",
    desc: "Complete optimization of Google Business Profile for microscopic dentistry practice, resulting in 215% increase in profile views and 178% growth in direction requests. Implemented strategic review management system that improved rating from 4.2 to 4.8 stars within 3 months.",
  },
  {
    image: "/google2.jpg", // Replace with actual image path
    title: "Google Analytics Implementation for Dental Website",
    href: "/project-analytics",
    desc: "Deployed enhanced Google Analytics 4 tracking for digital dentistry services, creating custom conversion funnels and patient journey mapping. Identified critical drop-off points in appointment booking flow, leading to UX improvements that increased conversion rate by 43%.",
  },
  {
    image: "/google3.jpg", // Replace with actual image path
    title: "Technical SEO Audit via Google Search Console",
    href: "/project-search-console",
    desc: "Conducted comprehensive technical SEO audit using Google Search Console for microscopic dentistry practice. Resolved mobile usability issues, fixed structured data implementation, and optimized Core Web Vitals, resulting in 67% increase in organic search visibility.",
  },
  {
    image: "/google4.jpg", // Replace with actual image path
    title: "Google Ads Campaign for Digital Dentistry Services",
    href: "/project-paid-campaigns",
    desc: "Designed and managed targeted Google Ads campaigns for premium digital dentistry procedures. Implemented advanced audience segmentation and developed compelling ad creatives, achieving 32% lower cost-per-lead and 189% ROAS (Return on Ad Spend).",
  },
  {
    image: "/google5.jpg", // Replace with actual image path
    title: "Keyword Ranking Improvement Strategy",
    href: "/project-keyword-ranking",
    desc: "Developed comprehensive keyword strategy targeting microscopic dentistry terms. Improved rankings for 28 high-value keywords from beyond page 3 to page 1, with 7 keywords reaching top 3 positions. Organic traffic increased by 124% year-over-year.",
  },
  {
    image: "/google6.jpg", // Replace with actual image path
    title: "Local SEO Optimization for Multiple Practice Locations",
    href: "/project-local-seo",
    desc: "Implemented location-based SEO strategy for dental practice with 3 locations. Created location-specific landing pages with proper schema markup, optimized citation profiles, and built local backlinks. Achieved top 3 Map Pack positions for all locations.",
  },
  {
    image: "/google7.jpg", // Replace with actual image path
    title: "Educational Content Strategy for Digital Dentistry",
    href: "/project-content-strategy",
    desc: "Created patient-focused content strategy showcasing advanced microscopic and digital dentistry techniques. Developed 24 educational blog posts, 6 patient case studies, and 4 video testimonials, resulting in 86% increase in organic traffic and 35% improvement in lead quality.",
  },
];
// export const portfolioData: PortfolioItem[] = [
//   {
//     image: "/Frame 26.svg",
//     title: "Lirante 1",
//     href: "/project-1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
//   {
//     image: "/Frame 26.svg",
//     title: "Lirante 2",
//     href: "/project-2",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
//   {
//     image: "/Frame 26.svg",
//     title: "Lirante 3",
//     href: "/project-3",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
//   {
//     image: "/Frame 26.svg",
//     title: "Lirante 4",
//     href: "/project-4",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
// ];
export const reviews: Review[] = [
  {
    name: "Dr. Jaydev",
    role: "Dental Clinic Owner",
    rating: 5,
    text: "Outstanding social media growth strategy! Our patient appointments increased by 40% within three months. The digital branding perfectly captured our clinic's values and expertise.",
  },
  {
    name: "Rohan Kapoor",
    role: "Toni & Guy Branch Manager",
    rating: 5,
    text: "The ROI-focused paid campaigns delivered exceptional results. Our salon bookings went up significantly, and the lead generation strategy helped us tap into new customer segments.",
  },
  {
    name: "Vikram Singh",
    role: "Buddha Tattoo Studio Founder",
    rating: 4,
    text: "The Instagram strategy transformed our online presence. Our follower count tripled in just 2 months, and the local SEO work has clients finding us easily. Exactly what our studio needed!",
  },
  {
    name: "Dr. Nisha Sharma",
    role: "Director at Tricorder Diagnostics",
    rating: 5,
    text: "The healthcare marketing campaigns were perfectly targeted to our audience. We saw a significant increase in diagnostic appointments and received positive feedback on our digital presence.",
  },
  {
    name: "Ambica & Anurag",
    role: "Event Hosts",
    rating: 5,
    text: "Our wedding events received tremendous visibility through the digital campaigns. The creative content and awareness strategy helped make our celebration truly special and well-attended.",
  },
  {
    name: "Priya Malhotra",
    role: "Founder, Shushu Babies Naturals",
    rating: 4,
    text: "The SEO and social media strategy helped position our brand in a competitive market. Our organic traffic increased by 75%, and social engagement metrics have consistently grown month-over-month.",
  },
  {
    name: "Ajay Mehta",
    role: "CEO, Gear Head Motors",
    rating: 5,
    text: "The automobile marketing campaigns were spot-on for our target demographic. We've seen increased showroom visits and actual sales conversions. The digital strategy delivered tangible business results.",
  },
  {
    name: "Rajesh Vadikari",
    role: "Founder, Vadikari Realtors",
    rating: 5,
    text: "The SEO work and targeted ads transformed our property listings' visibility. Lead quality improved dramatically, and conversion rates increased by over 30%. Exceptional digital marketing expertise!",
  }
];
// export const reviews: Review[] = [
//   {
//     name: "Mahesh Pokale",
//     role: "Web Designer",
//     rating: 5,
//     text: "Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
//   },
//   {
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     rating: 4,
//     text: "Excellent work! Very professional and meets deadlines consistently. Highly recommended for design and development projects.",
//   },
//   {
//     name: "John Doe",
//     role: "UI/UX Lead",
//     rating: 5,
//     text: "Top quality design and coding. Strong attention to detail and highly collaborative throughout the project lifecycle.",
//   },
//   {
//     name: "Aryan Sharma",
//     role: "Software Engineer",
//     rating: 4,
//     text: "Innovative approach, clean design, and prompt delivery. Will work together again for sure!",
//   },
// ];

// export const cardData: CardData[] = [
//   { title: "Digital Marketing Strategy & Execution", imageSrc: "/Rectangle 7.svg" },
//   { title: "Performance Marketing ", imageSrc: "/Rectangle 7.svg" },
//   { title: "Lead Generation & Conversion Optimization", imageSrc: "/Rectangle 7.svg" },
//   { title: "Social Media Marketing", imageSrc: "/Rectangle 7.svg" },
//   { title: "SEO & Content Marketing", imageSrc: "/Rectangle 7.svg" },
//   { title: "Brand Building & Growth Marketing", imageSrc: "/Rectangle 7.svg" },
// ];

export const cardData: CardData[] = [
  {
    title: "Digital Marketing Strategy & Execution",
    imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?fit=crop&w=600&q=80", 
    // Futuristic dashboard, strategy/teamwork aesthetic
  },
  {
    title: "Performance Marketing",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=80",
    // Vibrant chart/analytics background
  },
  {
    title: "Lead Generation & Conversion Optimization",
    imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?fit=crop&w=600&q=80",
    // Funnel, leads merging into growth visuals
  },
  {
    title: "Social Media Marketing",
   imageSrc: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format",
    // Phones, social interactions, neon colors
  },
  {
    title: "SEO & Content Marketing",
    imageSrc: "https://images.unsplash.com/photo-1505238680356-667803448bb6?fit=crop&w=600&q=80",
    // Search trends, keyboards, content vibe
  },
  {
    title: "Brand Building & Growth Marketing",
   imageSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format",
    // Rocket launch, growth feeling
  },
];