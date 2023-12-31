import React from 'react'
import { DM_Sans } from 'next/font/google'
import data from '@/utils/resources/resources_section'
import Link from 'next/link'
import parse from 'html-react-parser';

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function page() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center mt-16 ${dmSans.className} overflow-x-hidden`}>
      <section className="flex flex-col md:flex-row w-full bg-neutral-200 items-center justify-center px-2 py-12 md:py-24 md:px-20 border-b-4 border-dotted border-neutral-700">
        <div className="flex flex-col justify-center items-center flex-1 gap-2 md:gap-5">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Explore our Resource Hub</h1>
          <h2 className="text-sm md:text-lg font-thin text-center md:text-left text-neutral-500">Maximize your potential and overcome challenges with our diverse resource collection</h2>
        </div>
      </section>
      <section className="flex flex-col w-full bg-white items-center justify-center gap-10 px-5 py-10 md:py-16 md:px-28 border-b-4 border-dotted border-neutral-700">
        <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Tools</h1>
        <div className="flex flex-col md:flex-row flex-1 gap-10 md:gap-16">
          {
            data.tools.map((tool, index) => (
              <div key={index} className="flex flex-col flex-1 gap-3 rounded-lg max-w-sm shadow-lg drop-shadow-lg bg-stone-100">
                <div className="flex flex-col w-full justify-center items-center rounded-t-lg">
                  <img src={tool.image.src} alt={tool.image.alt} className="w-full h-auto rounded-t-lg" draggable={false} />
                </div>
                <h1 className="px-5 md:px-4 text-base md:text-lg font-bold text-left text-neutral-700">{tool.headline}</h1>
                <p className="px-5 md:px-5 text-sm md:text-base font-normal text-left flex-1 text-neutral-700">{parse(tool.description)}</p>
                <div className="flex w-full mt-3">
                  <Link href={tool.button.link} className={`flex rounded-b-lg p-3 text-lf md:text-xl text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800`}>
                    {tool.button.text}
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col w-full bg-white items-center justify-center gap-10 px-5 py-10 md:py-16 md:px-28">
        <h1 className="text-xl md:text-5xl font-bold text-center md:text-left text-neutral-700">Guide</h1>
        <div className="flex flex-col md:flex-row flex-1 gap-10 md:gap-16 justify-center align-center">
          {
            data.guides.map((tool, index) => (
              <div key={index} className="flex flex-col flex-1 gap-3 rounded-lg max-w-sm shadow-lg drop-shadow-lg bg-stone-100">
                <div className="flex flex-col w-full justify-center items-center rounded-t-lg">
                  <img src={tool.image.src} alt={tool.image.alt} className="w-full h-auto rounded-t-lg" draggable={false} />
                </div>
                <h1 className="px-5 md:px-4 text-base md:text-lg font-bold text-left text-neutral-700">{tool.headline}</h1>
                <p className="px-5 md:px-5 text-sm md:text-base font-normal text-left flex-1 text-neutral-700">{parse(tool.description)}</p>
                <div className="flex w-full mt-3">
                  <Link href={tool.button.link} className={`flex rounded-b-lg p-3 text-lf md:text-xl text-white flex-row items-center justify-center gap-2 w-full bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800`}>
                    {tool.button.text}
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}
