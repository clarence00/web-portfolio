import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import PageTransition from "./ui/PageTransition";
import StairTransition from "./ui/StairTransition";
import Footer from "./components/Footer";

const typeface = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Clarence's Web Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-grid-pattern ${typeface.className}`}>
        <HeaderNav />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
