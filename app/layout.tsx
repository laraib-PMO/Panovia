import "./globals.css";

export const metadata = {
  title: "Panovia | Reliable Knowledge for AEC Teams — by Attimo",
  description:
    "Turn scattered project information into reliable knowledge and traceable action. Panovia helps AEC teams find the right context, connect decisions and move work forward — without forcing a new system on the team.",
  openGraph: {
    title: "Panovia | Reliable Knowledge for AEC Teams — by Attimo",
    description:
      "Turn scattered project information into reliable knowledge and traceable action. Cited answers. Traceable decisions. Role-based context. No forced migration.",
    type: "website",
    url: "https://panovia.com/",
    siteName: "Panovia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panovia | Reliable Knowledge for AEC Teams",
    description:
      "Turn scattered AEC project information into reliable knowledge and traceable action. Every answer cites its source.",
  },
  alternates: { canonical: "https://panovia.com/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
                  description:
                    "Attimo builds focused products for teams where coordination, knowledge and reliability matter.",
                  brand: { "@type": "Brand", name: "Panovia" },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Panovia",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "AEC project knowledge and decision traceability platform. Connects scattered project information into cited answers, verified revisions and traceable action.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/ComingSoon",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Does Panovia replace our current tools?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Panovia sits on top of the tools your team already uses — including Google Drive, OneDrive, WhatsApp, Gmail, Microsoft Teams and Google Meet.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does Panovia handle AI outputs?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Every answer or recommendation Panovia generates includes a cited source. Teams can verify what the output is based on — there is no black box.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can Panovia work with WhatsApp and email?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Channel Capture ingests messages, emails and voice notes without changing how teams communicate.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does human verification work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Human-to-Agent-to-Human governance. Every external action requires explicit human approval before any external action.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can Panovia work with messy project data?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Panovia is built to work with fragmented, real-world inputs — not idealised clean data environments.",
                      },
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://panovia.com/",
                    },
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
