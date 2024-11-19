"use client";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeToggle from "../components/ThemeToggle";


const inter = Source_Sans_3({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  useEffect(() => {
    // AOS initialization
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Handle Theme (dark/light mode)
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    // Apply dark mode if necessary
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Cleanup
    return () => {
      AOS.refresh(); // Reset AOS when component unmounts
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="theme-toggle ">
            <ThemeToggle />
          </div>
        {process.env.APP_ENV === "production" && (
          <>
          
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
