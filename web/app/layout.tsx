import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, profile } from "@/lib/data";

const TITLE = "Thushar Reddy Vemula | Software Engineer · Backend & AI";
const DESCRIPTION =
  "Thushar Reddy Vemula is a software engineer in Tempe, Arizona, building backend systems, full-stack applications, and applied AI projects. Explore his work and experience.";
const OG_IMAGE = `${SITE_URL}/assets/og-share.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Thushar Reddy Vemula",
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: ["Thushar Reddy Vemula", "Thushar Vemula", "Tushar Reddy Vemula", "software engineer", "backend", "applied AI", "Arizona State University", "Tempe"],
  alternates: { canonical: `${SITE_URL}/` },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }, { url: "/favicon.ico?v=2", sizes: "48x48" }, { url: "/icon-192.png?v=2", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  verification: { google: "2SEVJqTEPHD6s0RPgVpwUwx6wa1NyLZgy7S21W7s-hI" },
  openGraph: {
    type: "profile",
    url: SITE_URL + "/",
    siteName: "Thushar Reddy Vemula",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Thushar Reddy",
    lastName: "Vemula",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Thushar Reddy Vemula, Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

export const viewport: Viewport = { themeColor: "#f7f9ff", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      givenName: "Thushar Reddy",
      familyName: "Vemula",
      alternateName: ["Thushar Vemula", "Tushar Reddy Vemula", "Tushar Reddy", "Thushar Reddy", "Vemula Thushar Reddy"],
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/thushar-portrait.jpg`,
      jobTitle: "Software Engineer",
      description:
        "Software engineer specializing in backend systems, full-stack applications, cloud computing, and applied AI. M.S. Computer Science student at Arizona State University, graduating May 2027.",
      email: `mailto:${profile.email}`,
      telephone: "+1-623-239-9720",
      address: { "@type": "PostalAddress", addressLocality: "Tempe", addressRegion: "AZ", addressCountry: "US" },
      affiliation: { "@type": "CollegeOrUniversity", name: "Arizona State University", url: "https://www.asu.edu/" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIIT Delhi", url: "https://iiitd.ac.in/" },
      worksFor: { "@type": "CollegeOrUniversity", name: "Arizona State University", url: "https://www.asu.edu/" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: ["Python", "TypeScript", "JavaScript", "Java", "Go", "SQL", "React", "Next.js", "Django", "FastAPI", "Flask", "AWS", "Docker", "LangGraph", "LangChain", "PyTorch", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Thushar Reddy Vemula",
      alternateName: ["Thushar Vemula", "Thushar Reddy Vemula Portfolio"],
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: "Thushar Reddy Vemula · Software Engineer",
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: "2026-11-07",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
