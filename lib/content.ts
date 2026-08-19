export const site = {
  name: "Taalo Marketing Company",
  shortName: "Taalo",
  founder: "Sacad Sheekh Muuse",
  founderShort: "Sacad S. Muuse",
  title: "Founder & CEO",
  email: "info@taalomarketing.com",
  phone: "+252 63 777 7910",
  phoneHref: "tel:+252637777910",
  whatsapp: "https://wa.me/252637777910",
  address: "Hargeisa, Somaliland",
  hours: "Mon - Sat: 8.00 AM - 6.00 PM",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: site.whatsapp, label: "Contact" },
] as const;

export const socials = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "YouTube", href: "https://youtube.com" },
] as const;

export const photos = {
  hero: "/hero-background.jpg",
  heroMobile: "/mobile-background.png",
  founderPortrait: "/about-2.jpg",
  founderDesk: "/commitment.jpg",
};

export const trustedBy = [
  "Government",
  "Companies",
  "Universities",
  "NGOs",
] as const;

export const heroStats = [
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export const values = [
  {
    title: "Our Mission",
    body: "Deliver creative work that makes complex ideas simple, visible, and trusted.",
  },
  {
    title: "Our Vision",
    body: "Be the communication partner organizations in Somaliland and beyond rely on for impact.",
  },
  {
    title: "Our Values",
    body: "Integrity, craft, collaboration, and results that serve the people we speak to.",
  },
] as const;

export const services = [
  {
    title: "Branding & Identity",
    body: "Build a strong brand that connects and stands out.",
  },
  {
    title: "Digital Marketing",
    body: "Reach the right audience with smart digital strategies.",
  },
  {
    title: "Website Design",
    body: "Modern, responsive websites that represent your brand.",
  },
  {
    title: "Mobile App Development",
    body: "Custom mobile apps for iOS and Android.",
  },
  {
    title: "Documentary Production",
    body: "Powerful documentaries that tell real stories.",
  },
  {
    title: "Commercial Videos",
    body: "High-quality videos that promote your brand.",
  },
  {
    title: "Photography",
    body: "Professional photography for every occasion.",
  },
  {
    title: "Graphic Design",
    body: "Creative designs that communicate your message.",
  },
  {
    title: "Social Media Management",
    body: "Manage your social presence and grow your audience.",
  },
  {
    title: "Awareness Campaigns",
    body: "Impactful campaigns that create real change.",
  },
  {
    title: "Government Communication",
    body: "Strategic communication for public institutions.",
  },
  {
    title: "NGO Communication",
    body: "Helping NGOs share their impact with the world.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We listen and understand your goals.",
  },
  {
    step: "02",
    title: "Strategy",
    body: "We create the best strategy for your brand.",
  },
  {
    step: "03",
    title: "Creative Design",
    body: "Our team brings ideas to life.",
  },
  {
    step: "04",
    title: "Production",
    body: "We produce with precision and quality.",
  },
  {
    step: "05",
    title: "Delivery",
    body: "We deliver on time, every time.",
  },
  {
    step: "06",
    title: "Support",
    body: "We support you for long-term growth.",
  },
] as const;

export const industries = [
  "Government",
  "NGOs",
  "Businesses",
  "Startups",
  "Healthcare",
  "Education",
  "Real Estate",
  "Retail",
  "Hospitality",
  "Technology",
  "Finance",
  "And More",
] as const;

export const footerServices = [
  "Branding & Identity",
  "Digital Marketing",
  "Website Design",
  "App Development",
  "Documentary Production",
  "And More",
] as const;
