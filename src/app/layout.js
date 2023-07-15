import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sojourn Cabins",
  description: "Book a cabin with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
