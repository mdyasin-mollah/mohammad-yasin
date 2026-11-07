import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import MotionExperience from "@/components/motion-experience";
export const metadata: Metadata = { title: "Mohammad Yasin — Developer & Creative Technologist", description: "Mohammad Yasin is a full-stack web developer, founder of SAEED IT / NEXTit-BD, and a BBA Accounting student from Dhaka, Bangladesh.", keywords: ["Mohammad Yasin","Full-stack developer","NEXTit-BD","SAEED IT","Portfolio"], openGraph: { title: "Mohammad Yasin — Building digital experiences", description: "Full-stack developer, entrepreneur, and lifelong learner.", type: "website" } };
export const viewport: Viewport = { themeColor: "#090a0f", colorScheme: "dark" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><MotionExperience /><SmoothScroll>{children}</SmoothScroll></body></html>; }