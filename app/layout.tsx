import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE_METADATA, PERSONAL_INFO } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = SITE_METADATA.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [
    "Farhan Wahyudi",
    "full-stack developer",
    "Laravel developer",
    "PHP developer",
    "GIS developer",
    "web developer Indonesia",
    "Jambi developer",
    "Information Systems",
    "frontend developer",
    "C# developer",
    "Next.js portfolio",
    "AI productivity",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: siteUrl,
    siteName: SITE_METADATA.siteName,
    locale: SITE_METADATA.locale,
    type: "website",
    images: [
      {
        url: `${siteUrl}${SITE_METADATA.image}`,
        width: 1200,
        height: 630,
        alt: SITE_METADATA.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    creator: "@frhnwahyudi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "", // Add your Google Search Console verification code here
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.name,
  jobTitle: "Information Systems Graduate",
  url: siteUrl,
  email: PERSONAL_INFO.email,
  image: `${siteUrl}/images/farhan.jpeg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSONAL_INFO.location,
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: PERSONAL_INFO.university,
  },
  knowsAbout: [
    "Laravel",
    "PHP",
    "C#",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Geographic Information Systems",
    "AI for Productivity",
    "Full-Stack Development",
    "MySQL",
  ],
  sameAs: [
    "https://github.com/frhnwahyudii",
    "https://linkedin.com/in/frhnwahyudi",
    "https://instagram.com/frhnwahyudi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}