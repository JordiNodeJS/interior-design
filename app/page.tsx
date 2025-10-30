import Topbar from "./components/Topbar";import Image from "next/image";

import Navbar from "./components/Navbar";

import UnderNav from "./components/home/UnderNav";export default function Home() {

import HeroCarousel from "./components/home/HeroCarousel";  return (

import AboutSection from "./components/home/AboutSection";    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

import ServicesSection from "./components/home/ServicesSection";      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

import FeaturesSection from "./components/home/FeaturesSection";        <Image

import ProjectsSection from "./components/home/ProjectsSection";          className="dark:invert"

import TeamSection from "./components/home/TeamSection";          src="/next.svg"

import TestimonialSection from "./components/home/TestimonialSection";          alt="Next.js logo"

import BlogSection from "./components/home/BlogSection";          width={100}

import Footer from "./components/Footer";          height={20}

import BackToTop from "./components/BackToTop";          priority

        />

export default function Home() {        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

  return (          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">

    <>            To get started, edit the page.tsx file.

      <Topbar />          </h1>

      <Navbar />          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

      <UnderNav />            Looking for a starting point or more instructions? Head over to{" "}

      <HeroCarousel />            <a

      <AboutSection />              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

      <ServicesSection />              className="font-medium text-zinc-950 dark:text-zinc-50"

      <FeaturesSection />            >

      <ProjectsSection />              Templates

      <TeamSection />            </a>{" "}

      <TestimonialSection />            or the{" "}

      <BlogSection />            <a

      <Footer />              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

      <BackToTop />              className="font-medium text-zinc-950 dark:text-zinc-50"

    </>            >

  );              Learning

}            </a>{" "}

            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
