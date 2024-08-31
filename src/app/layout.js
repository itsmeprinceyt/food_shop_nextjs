import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All Food Stop - Mohd Uvaish",
  description: "Discover a delicious variety of burgers, sandwiches, and more at [Your Food Shop's Name]. From classic favorites to unique creations, our menu has something to satisfy every craving. Explore our wide range of food products and find your new go-to meal today!",
  icons: {
    icon: "/icons/burger.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
