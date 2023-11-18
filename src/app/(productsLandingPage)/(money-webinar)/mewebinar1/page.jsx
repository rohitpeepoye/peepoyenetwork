import React from 'react'
import { DM_Sans } from 'next/font/google';
import { FiCheckCircle } from 'react-icons/fi';
import parse from 'html-react-parser'
import Experience from '@/components/funnels/pages/youtubeneur/Experience';
import { BsCheck } from 'react-icons/bs';
import SocialMediaDetails from '@/components/webinar/SocialMediaDetails';
import Testimonials from '@/components/funnels/pages/youtubeneur/Testimonials';
import Link from 'next/link';
import FunnelFooter from '@/components/funnels/FunnelFooter';
import Form from '@/components/webinar/Form';

const dmSans = DM_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: `The Money Engine Webinar`,
  description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
  images: [
    {
      url: 'https://i.ibb.co/FY333K1/Final.webp',
      width: 600,
      height: 500,
      alt: `The Money Engine Webinar`,
    },
  ],
  url: 'https://peepoye.com/money-webinarYTY2B',
  type: 'website',
  keywords: [],
  openGraph: {
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/FY333K1/Final.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    url: 'https://peepoye.com/money-webinarYTY2B',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Money Engine Webinar`,
    description: `Learn How I Attracted 1MN+ People and Built a Powerful Money Engine for Continuous Passive Income and Business Leads from Home!`,
    images: [
      {
        url: 'https://i.ibb.co/FY333K1/Final.webp',
        width: 600,
        height: 500,
        alt: `The Money Engine Webinar`,
      }
    ],
    creator: '@peepoye',
  },
}

export default function page() {
  const whatLearn = [{
    question: `1 - Which area is most profitable and can turn you into <strong className='red-text font-black'>money-making machine?</strong>`,
    answer: `Identify your Super Niche`
  },
  {
    question: `2 - Which platform is most suitable to create <strong className='red-text font-black'>passive income and business leads</strong> organically?`,
    answer: `Identify BEST platform`
  },
  {
    question: `3 - What is the secret to <strong className='red-text font-black'>influence building and brand value creation</strong> in today's digital world?`,
    answer: `Hacking the Algorithm of the most powerful social media platform`,
  },
  {
    question: `4 - How to create <strong className='red-text font-black'>digital info products that you can own</strong> in 24 hours?`,
    answer: `Design eBooks, Courses, Coaching, Consulting and Membership models.`,
  },
  {
    question: `5 - How to setup <strong className='red-text font-black'>digital systems to avoid investing</strong> in your money engine?`,
    answer: `Launch with simple tools and scale as you progress.`,
  },
  {
    question: `6 - How to get continuous flow of <strong className='red-text font-black'>converting leads</strong> for your business?`,
    answer: `Use organic mareketing without investing in ads to attract the right customers 24/7 for your business`
  },
  {
    question: `7 - How to create <strong className='red-text font-black'>multiple revenue streams and digital products</strong> based on your passion and expertise?`,
    answer: `Live your life on your own terms doing what you love instead of being stuck with uncertainty`
  }
  ]

  const benifits = [
    {
      img: 'https://i.ibb.co/jJJTqsV/timeclock.png',
      h1: 'Have More Time',
      p: 'Take charge of your TIME and work from anywhere in the world'
    },
    {
      img: 'https://i.ibb.co/r3T6Nh0/coins.png',
      h1: 'Create More Wealth',
      p: 'Unlimited potential to generate massive wealth online'
    },
    {
      img: 'https://i.ibb.co/X2wJstK/quite-happy-1.png',
      h1: 'Get Debt-Free',
      p: `You don't need an office or employees to launch this model`
    },
    {
      img: 'https://i.ibb.co/NKLgxNd/planets.png',
      h1: 'Travel The World',
      p: 'Live a life without boundaries. Build a business from your laptop'
    },
    {
      img: 'https://i.ibb.co/rvsH4tS/love.png',
      h1: 'More Family Time',
      p: 'Play more with your kids and give quality time for your family'
    },
    {
      img: 'https://i.ibb.co/2kXC15J/bulb.png',
      h1: 'Help More People',
      p: 'Give people the knowledge you have and create an impact'
    },
  ]

  const clarity = [`How to build a dynamic online presence and authority`, `How to build a long-term asset i.e. a go to brand`, `How to future proof yourself by digitising your business`, `How to monetise through content, influence, and digital info products`, `How to attract quality leads without investing for your business`, `How to convert your leads into sales on total autopilot`, `How to automate your digital systems and tools`, `How to build loyal digital communities`, `LIVE demonstration of tools & success stories`]


  return (
    <main className={`flex flex-col items-center justify-center w-full ${dmSans.className}`}>
      <section className='flex flex-col items-center justify-center w-full webinar-background'>
        <div className='flex flex-col md:flex-row items-center justify-center bg-black/70 gap-5 md:gap-10 w-full flex-1 px-5 py-10 md:px-24'>
          <div className='flex flex-col items-center justify-center w-full gap-2 md:gap-4 flex-1'>
            <h1 className='text-xl md:text-5xl font-bold text-center md:text-left text-white md:leading-[55px]'>Learn How To Build Your <span className='red-text'>Own Money Engine</span> Using Youtube Within 3 Days</h1>
            <p className='text-sm md:text-lg font-normal text-center md:text-left text-white'>
              Akassh Ashok Gupta talks about the secret method that he has created that will decode the Secrets and Essence of how to leverage Youtube and add Multiple Revnue Streams that will flood the growth in ad revenue, product sales and business leads owing to his 2 decade long business consulting experience working with 200+ Compnies & Brands and training 1000+ people at various levels and 5+ years as a content creator and influencer collaborating with mulitple esteemed influencers and celebrities
            </p>
            <div className='flex flex-col md:self-start w-full md:w-10/12 gap-2'>
              <span className='text-xl md:text-2xl font-bold text-center red-text'>Date <span className='text-white'>|</span> Saturday <span className='text-white'>|</span> 9PM to 10PM IST</span>
              <Form text="Signup for LIVE Webinar" />
              <div className="flex flex-col w-full p-2 gap-1 md:gap-2 rounded-lg bg-neutral-100 border-[4px] moving-border border-red-600 border-dashed">
                <span className="flex-1 text-base md:text-xl text-left red-text font-bold">Bonsu/LM/Reward: <span className="font-normal text-neutral-900">Plus, Get my Free Influencer Guide on how to Become a Top Influencer Fast</span></span>
                <span className="flex-1 text-base md:text-xl text-left red-text font-bold">FOMO: <span className="font-normal text-neutral-900">No Recordings. No Replays. Only Live Access</span></span>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full md:w-6/12'>
            <img src='https://i.ibb.co/FY333K1/Final.webp' alt='What You Will Learn In The Webinar' className='w-full rounded-lg' draggable={false} />
          </div>
        </div>
      </section>
      <FunnelFooter />
    </main>
  )
}