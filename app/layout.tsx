import "./globals.css";

export const metadata = {
  title: "Panovia | AEC Project Knowledge & Decision Traceability",
  description: "Panovia helps AEC teams connect drawings, RFIs, approvals, emails, WhatsApp updates and project documents into cited answers, verified revisions and traceable action.",
  openGraph: {
    title: "Panovia | AEC Project Knowledge & Decision Traceability",
    description: "Panovia helps AEC teams connect drawings, RFIs, approvals, emails, WhatsApp updates and project documents into cited answers, verified revisions and traceable action.",
    type: "website",
    url: "https://panovia-3.vercel.app/",
    siteName: "Panovia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panovia | AEC Project Knowledge & Decision Traceability",
    description: "Turn scattered AEC project information into reliable knowledge and traceable action.",
  },
  alternates: { canonical: "https://panovia-3.vercel.app/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Attimo",
                  url: "https://attimo.com",
                  brand: { "@type": "Brand", name: "Panovia" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Panovia",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description: "AEC project knowledge and decision traceability platform. Connects scattered project information into cited answers, verified revisions and traceable action.",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/ComingSoon" },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    { "@type": "Question", name: "Does Panovia replace our current tools?", acceptedAnswer: { "@type": "Answer", text: "No. Panovia sits on top of the tools your team already uses." } },
                    { "@type": "Question", name: "How does Panovia cite its answers?", acceptedAnswer: { "@type": "Answer", text: "Every answer includes the document name, page, section and revision state." } },
                    { "@type": "Question", name: "Can Panovia work with WhatsApp and email?", acceptedAnswer: { "@type": "Answer", text: "Yes. Channel Capture ingests messages, emails and voice notes without changing how teams communicate." } },
                    { "@type": "Question", name: "How does human verification work?", acceptedAnswer: { "@type": "Answer", text: "Critical actions are routed to the right person for explicit approval before any external action." } },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://panovia-3.vercel.app/" },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
