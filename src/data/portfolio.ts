import type { LucideIcon } from 'lucide-react'
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers3,
  Rocket,
  Server,
  Wrench,
} from 'lucide-react'

export type NavItem = { label: string; href: string }

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export type ReadySystem = {
  title: string
  description: string
  icon: LucideIcon
  demoUrl?: string
}

export type TechCategory = {
  title: string
  icon: LucideIcon
  items: string[]
}

export type SocialLink = {
  label: string
  url: string
  icon: LucideIcon
}

export const portfolio = {
  brand: {
    name: 'Commission Dev',
  },
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Ready-Made', href: '#ready-made' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  hero: {
    title: '🚀 OPEN FOR COMMISSIONS',
    subtitle: 'Looking for a reliable developer for your system needs?',
    description: 'We offer custom-built solutions tailored to your requirements.',
    cta: { label: 'Get a Quote', href: '#contact', icon: Rocket },
  },

  services: [
    {
      title: 'System Development from Scratch',
      description:
        'From idea to deployment — clean architecture, solid UX, and maintainable code.',
      icon: Code2,
    },
    {
      title: 'Capstone & Business Projects',
      description:
        'School and business-ready systems with proper documentation and support.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'Web & Software Solutions',
      description:
        'Web apps, desktop tools, and custom solutions tailored to your workflow.',
      icon: Globe,
    },
  ] satisfies Service[],

  readyMade: [
    {
      title: 'Dental Clinic Management System',
      description: 'Appointments, patients, billing, and records in one place.',
      icon: Building2,
    },
    {
      title: 'Clinic Management System',
      description: 'Staff workflows, schedules, patient profiles, and reporting.',
      icon: Building2,
    },
    {
      title: 'Mini POS (Point of Sale) System',
      description: 'Fast checkout, inventory basics, sales logs, and receipts.',
      icon: Layers3,
    },
    {
      title: 'Website Directory System',
      description: 'Category listings, search, moderation, and link management.',
      icon: Globe,
    },
    {
      title: 'Travel Booking System',
      description: 'Packages, booking requests, and customer inquiries.',
      icon: Globe,
    },
    {
      title: 'Coffee Ordering System',
      description: 'Menu, ordering flow, and lightweight admin controls.',
      icon: Layers3,
    },
    {
      title: 'Automated Plant Watering System (Arduino Uno)',
      description: 'Sensor-based automation with configurable thresholds.',
      icon: Cpu,
    },
  ] satisfies ReadySystem[],

  techStack: [
    {
      title: 'Backend',
      icon: Server,
      items: [
        'Laravel',
        'PHP (Vanilla)',
        'Django (Python)',
        'Express.js (Node.js)',
        'Java (Spring Boot)',
        'C',
        'C++',
        'C#',
        'Visual Basic',
        'Ruby on Rails',
      ],
    },
    {
      title: 'Database',
      icon: Database,
      items: ['MySQL', 'PostgreSQL', 'Firebase'],
    },
    {
      title: 'Frontend',
      icon: Globe,
      items: ['React', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      items: [
        'React Native',
        'Inertia.js',
        'Vite',
        'AJAX',
        'Alpine.js',
        'Bootstrap',
        'Tailwind CSS',
        'jQuery',
      ],
    },
    {
      title: 'Deployment / Hosting',
      icon: Server,
      items: ['Hostinger', 'Vercel', 'Pusher'],
    },
  ] satisfies TechCategory[],

  closing: {
    tagline: '💡 Clean code. Scalable systems. Reliable solutions.',
    contactTitle: 'Let’s build your system.',
    contactSubtitle:
      'Send a message with your requirements and timeline — I’ll reply with a clear quote and next steps.',
    email: 'villaramastan@gmail.com ',
    socials: [
      { label: 'GitHub', url: 'https://github.com/your-handle', icon: Code2 },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/your-handle',
        icon: BriefcaseBusiness,
      },
      {
        label: 'Facebook',
        url: 'https://facebook.com/your-handle',
        icon: BriefcaseBusiness,
      },
    ] satisfies SocialLink[],
  },
} as const

