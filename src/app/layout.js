// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WorkoutsProvider } from "@/components/context/WorkoutContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train hard, log honest.",
};
// className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ToastContainer position="top-right" autoClose={3000} />
        <WorkoutsProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </WorkoutsProvider>
      </body>
    </html>
  );
}