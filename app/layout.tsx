import type { Metadata, Viewport } from "next";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ccos.systems"),
  title: "CCOS — Community Connection Operating Systems",
  description:
    "Community Connection Operating Systems develops and operates products, systems, and community infrastructure designed to make useful connections easier to find and act on.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://ccos.systems",
    title: "CCOS — Community Connection Operating Systems",
    description:
      "Building systems that connect people, organizations, and opportunity.",
    siteName: "CCOS",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/identity/ccos-icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/identity/ccos-icon-180.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#101820" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
