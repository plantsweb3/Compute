import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$COMPUTE — The Most Valuable Resource",
  description:
    "Compute is the new oil. The world runs on processing power — $COMPUTE is the memecoin for the age of AI.",
  openGraph: {
    title: "$COMPUTE — The Most Valuable Resource",
    description:
      "Compute is the new oil. The world runs on processing power — $COMPUTE is the memecoin for the age of AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$COMPUTE — The Most Valuable Resource",
    description:
      "Compute is the new oil. The world runs on processing power.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
