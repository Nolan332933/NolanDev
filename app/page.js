import MobileNavbar from "./componets/MobileNavbar";
import Sidebar from "./componets/Sidebar";
import HomePage from "./componets/home/HomePage";
import Footer from "./componets/parts/Footer";
import ScrollUpButton from "./utlis/ScrollUpButton";


export const metadata = {
  title: "Kaung Myat Kywal - Home",
  description: "Home Page of kaung myat kywal portfolio",
  generator: "Next.js",
  applicationName: "Kaung Myat Kywal's Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "kaungmyatkywal",
    "web developer",
    "myanmar",
    "programmer",
    "Yangon Technology University",
  ],
  creator: "Kaung Myat Kywal",
  publisher: "Kaung Myat Kywal",
  openGraph: {
    title: "Kaung Myat Kywal",
    description:
      "Experienced full stack web developer with three years of expertise in front-end and back-end technologies. Skilled in JavaScript frameworks like React, Laravel and Node.js, with a focus on building robust and interactive web applications. Passionate about continuous learning and staying updated with the latest trends in web development.",
    url: "https://kaungmyatkywal.com",
    siteName: "Kaung Myat Kywal",
    images: [
      {
        url: process.env.APP_URL + "/image/profile.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen relative">
          
        <div className="md:w-2/6 lg:w-1/6 bg-violet-700 hidden md:block z-100">
          <Sidebar />
        </div>
        <div className="w-full content md:w-4/6 lg:w-5/6 bg-slate-200 overflow-hidden">
          {/* Mobile Navbar  */}
          <MobileNavbar />
          <HomePage />
          <ScrollUpButton />
          <Footer />
        </div>
      </div>
    </div>
  );
}
