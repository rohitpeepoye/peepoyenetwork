'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Link2 from 'next/link'
import PaymentSection from './PaymentSection'
import { Sora } from 'next/font/google'
import style from '@/styles/AcceleratorInd.module.css'
import { BsCheckLg } from 'react-icons/bs'
import { BsCheck } from 'react-icons/bs'
import WhoIsThisFor from './WhoIsThisFor'
import YoutubeneurStruction from './YoutubeneurStruction'
import Testimonials from './Testimonials'
import FAQ from '@/components/FAQ'
import parse from 'html-react-parser';
import url from '@/utils/url'
import AccRibbonBonus from './AccRibbonBonus'
import { FaPlay } from 'react-icons/fa'
import VideoPlayer from './VideoPlayer'
import FunnelFooter from '../../FunnelFooter'
import JourneyScroll from './JourneyScroll'
import SocialMediaDetails from './SocialMediaDetails'
import { useInView } from 'react-intersection-observer'
import Experience from './Experience'
import Matrix from './Matrix'
import Countdown from 'react-countdown'
import aboutcommunitydata from '@/utils/funnels/aboutCommunity'
import AboutCommunity from './AboutCommunity'

const sora = Sora({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
})

export default function AcceleratorInd({ loc, data, bf = false }) {
  const [videoPlayervisible, setVideoPlayervisible] = React.useState(false)
  const { ref: socialMediaRef, inView: socialMediaInView } = useInView();
  const firstSectionData = [
    {
      image: 'https://i.ibb.co/VLzWq14/1.png',
      p1: '19 Modules (Self-Paced)',
      p2: 'to learn everything about youtube',
    },
    {
      image: 'https://i.ibb.co/sQqgGHN/2.png',
      p1: 'A Copy-Paste Method',
      p2: 'to strategize your youtube growth',
    }
    ,
    {
      image: 'https://i.ibb.co/LrjN6fk/Accelerator-Landing-Page.png',
      p1: '10+ extra Bonuses',
      p2: 'to the course to learn and implement ',
    }
    ,
    {
      image: 'https://i.ibb.co/sW1LcLQ/4.png',
      p1: 'Weekly Coffee Chats',
      p2: 'to solve all your doubts on a live call.',
    }
  ]

  const faqData = [
    {
      question: 'What is the course language?',
      answer: 'All our courses are conducted in English, ensuring that learners from around the world can easily access and benefit from the valuable content provided by Youtubeneur Community.',
    },
    {
      question: 'What is the schedule for the Weekly Coffee Chats?',
      answer: `We provide a clear and up-to-date schedule for our weekly coffee chats in the Youtubeneur community. These interactive sessions are designed to foster networking, knowledge sharing, clear doubts and collaboration among members.`,
    },
    {
      question: `What if I can't attend a coffee chat due to an emergency?`,
      answer: `No worries! We understand that life can be unpredictable. In case you miss a live coffee chat, we have you covered. All coffee chat sessions are recorded and archived for the benefit of Youtubeneur Skool members. You can access these archives at your convenience to catch up on any missed sessions.`,
    }
  ]

  return (
    <div className='flex flex-col w-full'>
      <div className="flex flex-col w-full justify-center py-3 items-center bg-neutral-800 overflow-hidden">
        <motion.h1 className={`text-base md:text-2xl text-center px-2 text-white font-light ${sora.className}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
          {data ? parse(data.query.message) : parse("⚠️Do you know that <span className='italic font-medium'>99 out of 100 people</span> start and grow YouTube the wrong way?")}
        </motion.h1>
      </div>
      <section className="relative flex flex-col py-8 px-5 md:px-40">
        <img src="https://i.ibb.co/jJ3gDDP/texture-BG.png" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        {
          data && (
            <div className=" flex flex-col w-10/12 md:w-8/12 justify-center mt-8 h-10 mb-10 bg-stone-300 self-center rounded-full">
              <div className={`relative bg-blue- h-full w-16 rounded-full flex flex-col items-center bg-red-500`} style={{ width: `${data.query.levelPercentage}%` }}>
                <div className="absolute top-0 left-0 flex flex-col rounded-full justify-center items-center h-full animate-percentage bg-red-700/90" />
                <span className="flex z-10 flex-col justify-center items-center h-full text-white text-sm md:text-2xl font-medium">{data.query.levelPercentage}% Completed</span>
              </div>
            </div>
          )
        }
        <div className="flex flex-col z-10 md:gap-10 gap-5">
          <div className="flex flex-col items-center gap-10">
            <motion.h2 className={`text-base ${sora.className} md:text-2xl px-2 md:px-5 py-2 font-light text-white text-center shadow-md rounded-md ${style.bgRed}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 0.5 }}>
              Join the exclusive club of <span className='font-bold'>1% successful YouTubers and Influencers</span> before it&apos;s TOO LATE!
            </motion.h2>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-10">
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
              <motion.div className="flex flex-col justify-center gap-5 md:gap-12 w-full md:w-6/12 order-2 md:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
              >
                <p className={`text-2xl text-center md:text-left md:text-5xl select-none text-white font-bold ${style.headlineLineHeight} ${sora.className}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}>
                  Generate <span className={`${style.textYoutubeRed} font-bold ${style.lineBg}`}>10x</span> Revenue & Reach by hacking the <span className={`${style.textYoutubeRed} font-bold ${style.lineBg}`}>YouTube<span></span></span> Algorithm!
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-stretch flex-wrap gap-8 w-full">
                  {
                    firstSectionData.map((item, index) => (
                      <div key={index} className={`flex flex-row w-10/12 md:w-5/12 items-center gap-2 bg-neutral-800/80 text-white px-3 py-2 rounded-md hover:scale-105 shadow-md drop-shadow-md cursor-pointer select-none ${style.hoverShadow}`}>
                        <div className="flex flex-col gap-1">
                          <img src={item.image} alt={index + 1} className='w-auto h-10' />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className='text-base'>{item.p1}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="flex flex-col gap-2 md:gap-5 w-full md:w-10/12">
                  <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                    <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
                    <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
                  </Link>
                  {
                    data && (
                      <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                        No, I don't want this offer
                      </Link2>
                    )
                  }
                </div>
              </motion.div>
              <motion.div className={`flex order-1 md:order-2 flex-col flex-1 items-center md:items-end`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: 'spring', bounce: 0.5, delay: 1 }}
              >
                <img src='https://i.ibb.co/JRjfHhr/accelerator.png' alt="Foundation accelerator" className='w-10/12' />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col items-center py-10 md:py-20 px-5 md:px-40 gap-5 bg-white/5">
          <div className={`flex flex-col gap-10 items-center`}>
            <div className={`flex flex-col gap-2 ${sora.className}`}>
              <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
                My Sincere Promise to You..
              </h2>
            </div>
            <div className="flex relative flex-col justify-center items-center">
              <img src="https://i.ibb.co/Ttnfmqd/Video-Thumbnail-1-100.png" alt="video thumbnail" className='w-full md:w-10/12 rounded-md shadow-md drop-shadow-md' />
              <div className={`${style.borderPulseAnimation} absolute w-16 h-16 m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center rounded-full`}>
                <div className="flex flex-col w-full h-full justify-center cursor-pointer items-center bg-gradient-to-r from-red-700 to-red-800 rounded-full hover:scale-105" onClick={() => setVideoPlayervisible(true)}>
                  <FaPlay className='text-white text-3xl' />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-8/12">
              <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
                <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
              </Link>
              {
                data && (
                  <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                    No, I don't want this offer
                  </Link2>
                )
              }
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col justify-center items-center py-10 md:py-20 px-5 md:px-40 gap-2 md:gap-14">
          <h2 className={`text-lg ${style.bgRed} py-2 px-5 md:text-3xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
            Here's What You Get In Today's Launch Offer:
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className='flex flex-col w-full md:w-6/12 gap-4'>
              <span className='text-base md:text-2xl md:tracking-wide text-left text-neutral-100'>
                1. Our Flagship Youtube Growth Course for Multiple Revenue Streams
              </span>
              <span className='text-base md:text-2xl md:tracking-wide text-left text-neutral-100'>
                2. Our World-Class Collaboration and Gamification based Community
              </span>
              <span className='text-base md:text-2xl md:tracking-wide text-left text-neutral-100'>
                3. Our unique value offering i.e Access to Weekly Coffee Calls
              </span>
              <span className='text-base md:text-2xl md:tracking-wide text-left text-neutral-100'>
                4. 10 Bonuses
              </span>
              <span className='text-base md:text-2xl md:tracking-wide text-left text-neutral-100'>
                5. Life time Membership Option with Free Video Zoom Consulting Call with Akassh
              </span>
              <div className="flex flex-col gap-5 w-full md:w-8/12 mt-5">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
            </div>
            <div className="flex flex-col gap-5 items-center justify-end flex-1 ">
              <img src="https://i.ibb.co/JRjfHhr/accelerator.png" alt="struction" className="w-8/12" draggable={false} />
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-24 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className} items-center`}>
            <h2 className={`text-lg ${style.bgRed} py-2 px-5 md:text-3xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
              Our Flagship YouTubeneur Accelerator Course Structure
            </h2>
          </div>
          <YoutubeneurStruction />
          <div className="flex flex-col gap-5 self-center w-full md:w-5/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col items-center py-10 md:py-20 px-5 md:px-24 gap-5 md:gap-14">
          <h2 className={`text-lg ${style.bgRed} py-2 px-5 md:text-3xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
            Our World-Class Collaboration and Gamification based Community
          </h2>
          <div className={`flex flex-col md:flex-row gap-8 ${sora.className} items-center`}>
            <div className={`flex flex-col gap-2 md:gap-5 ${sora.className} md:w-6/12`}>
              <h2 className={`text-lg md:text-4xl text-center md:text-left text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
                What is Unique about our Youtubeneur Community?
              </h2>
              <p className={`text-base md:text-xl text-neutral-300 font-normal`}>
                A new-age learning platform that has both classroom and community capabilities combined at one place that promotes collaboration with other members on the go that enables learning in a community format instead of a one-one format powered by Gamification and Rewards that keeps you engaged and motivated at all times
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <img src="https://i.ibb.co/LRptmdY/community-1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg w-full' />
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col justify-center items-center py-10 md:py-20 px-5 md:px-24 gap-2 md:gap-7">
          <h2 className={`text-xl md:text-5xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
          Our Youtubeneur community is simple, engaging & fun to use
          </h2>
          <p className={`text-lg md:text-2xl text-neutral-300 font-normal`}>
            Meet and Collaborate with many others who are on the same journey & make it a fun ride. You are not alone.
          </p>
          <div className="flex flex-col gap-5">
            {
              Object.keys(aboutcommunitydata).map((key, index) => (
                <AboutCommunity key={index} key2={key} data={aboutcommunitydata[key]} backgroundColor={'bg-white/0'} reverse={index % 2 === 0 ? false : true} />
              ))
            }
          </div>
          <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-36 gap-10">
          <div className={`flex flex-col gap-5 ${sora.className}`}>
            <h2 className={`text-lg ${style.bgRed} py-2 px-5 md:text-3xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
              Our Unique Value Offering: Live Weekly Zoom Calls with Youtube Expert
            </h2>
            <h2 className='text-base md:text-2xl text-left md:text-center text-white'>
              <span className='font-bold text-green-700'>BONUS 1: </span>Weekly Live Coffee Chats {bf && '+ Free Access to the archive of all the previously recorded calls'}
            </h2>
          </div>
          <div className="flex md:flex-row flex-col items-center gap-2">
            <div className='flex flex-col flex-1 items-center gap-3'>
              <img src="https://i.ibb.co/QpW4s0y/coffee-chat.png" alt="Akassh Ashok Gupta" className='w-full md:w-10/12' />
              <div>
                <p className="text-sm md:text-2xl font-bold text-center text-red-500">Total Value: {
                  loc === 'ind' ? <span>₹<s>2,499</s></span> : <span>$99</span>
                }/-</p>
                <p className="text-sm md:text-lg font-bold text-center text-white">Included in this Exclusive Offer Absolutely Free!</p>
              </div>
            </div>
            <div className='flex flex-col gap-5 md:gap-6 w-full md:w-5/12'>
              <h3 className={`text-base md:text-xl text-left text-white font-bold ${sora.className}`}>
                Let us resolve all your biggest and smallest &quot;YouTube Growth&quot; Challenges.
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-neutral-300 font-bold'>Wondering how to <span className='text-red-500'>align & hack</span> YouTube algorithm for your <span className='text-red-500'>specific</span> YouTube niche?<br /> <span className='font-light'>Discuss and brainstorm various methods and pickup the best practices and innovative ideas during these calls.</span></span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-neutral-300 font-bold'>Feeling <span className='text-red-500'>alone</span> in this struggle? <br /><span className='font-light'> Stay motivated, Collaborate & Celebrate your wins with the community by participating in these calls.</span></span>
                </div>
                <div className="flex flex-row gap-2">
                  <BsCheckLg className={`${style.textRed} text-2xl w-5 md:text-4xl md:w-10`} />
                  <span className=' flex-1 text-sm md:text-lg text-neutral-300 font-bold'>Not able to stay <span className='text-red-500'>consistent & focused?</span><br /><span className='font-light'> Get your accountability partner and attend these calls to keep progressing towards your goals.</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 items-center px-5 md:px-20 gap-5 bg-white/5">
          <div className={`flex flex-col gap-10 items-center w-full md:w-8/12`}>
            <div className={`flex flex-col gap-2 ${sora.className}`}>
              <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
                Wait, There's More...
              </h2>
            </div>
            <div className="flex flex-col gap-12 w-full">
              <AccRibbonBonus data={['community2', 'donot', 'scriptSecret', 'acc1', 'acc2', 'acc3', 'acc4', 'acc5', 'acc6',]} loc={loc} />
              <div className="flex flex-col self-center gap-2 w-full md:w-8/12">
                <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
                  <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
                  <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
                </Link>
                {
                  data && (
                    <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                      No, I don't want this offer
                    </Link2>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-14">
          <div className={`flex flex-col items-center gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
              Meet Your Coach, Guide, and Mentor - Akassh Ashok Gupta
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
              <img src="https://i.ibb.co/pdXR2sN/1.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1">
              <p className={`text-base md:text-xl text-neutral-300 font-normal`}>
                Hey there, I'm Akassh Ashok Gupta! Thanks for stopping by to learn more about me. With over <span className={``}>19 years of experience</span> in the corporate world and more than <span className={``}>5 years dedicated</span> to mastering the art of YouTube, I bring a unique blend of skills to the table. My background as a business consultant, coupled with my status as an influencer, sets me apart as the ideal mentor for this journey.<br /><br /><span className={``}>Imagine this:</span> in less than a year after leaving a high-profile leadership position, I managed to build an impressive online presence with over 1 million followers across various social media platforms. This success is a result of my distinctive approach to consulting and influence, all fueled by the vast experience I gained from mentoring some of the world's biggest brands.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-32" ref={socialMediaRef}>
            {
              socialMediaInView && <SocialMediaDetails />
            }
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl order-1 md:order-2`}>
              <img src="https://i.ibb.co/RT3XGxt/2.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1 order-2 md:order-1">
              <p className={`text-base md:text-xl text-neutral-300 font-normal`}>
                Even when I was at a leadership position at my job, earning really well, I decided to quit my job and do YouTube full-time. The reason was simple- I realised my Passion. Today, <span className={``}>I breathe passion</span> by doing what I love. Quitting the job was not an easy call but still I took that step because I knew what I was truly meant for and what my passion was. Now, I am on a mission to <span className={``}>enable 1 lac people</span> like me breathe their passion and create multiple revenue streams by doing what they love the most.<br /><br />What sets me apart further are my incredible collaborations with legends like Sonu Nigam and Shruti Haasan. Additionally, I've gained the admiration of top YouTube influencers including Ashish Chanchlani, Harsh Beniwal, MythPat, Sourav Joshi, and many more.
              </p>
            </div>
          </div>
          <Experience />
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
            <div className={`flex flex-col w-full md:w-6/12 rounded-xl`}>
              <img src="https://i.ibb.co/LrvNWBp/3.png" alt="Akassh Ashok Gupta" className='rounded-xl shadow-lg drop-shadow-lg' />
            </div>
            <div className="flex flex-col flex-1">
              <p className={`text-base md:text-xl text-neutral-300 font-normal`}>
                I believe in the power of YouTube, not just as a platform for entertainment, but as a strategic tool for business growth, as well.<br /><br />Let's embark on this exciting journey together, and I'll guide you every step of the way in leveraging YouTube to its fullest potential.<br /><br />Whether you're looking to diversify your <span className={``}>revenue streams or attract valuable business leads</span>, I've got the expertise to make it happen. Let's make your YouTube venture a Resounding SUCCESS!<br /><br />I'm really looking forward to you completing this course, fullfill and live your passion and enjoy every bit of the journey it entails.<br /><br />
              </p>
              <img src="https://i.ibb.co/6vX34KQ/akassh-signature.png" className="w-40 md:w-40 h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
              Who must take this Course?
            </h2>
          </div>
          <div className="flex flex-col">
            <WhoIsThisFor />
          </div>
          <div className="flex flex-col gap-5 self-center w-full md:w-8/12">
            <Link activeClass='activestatus' spy={true} to='paymentPage' smooth={true} duration={1000} offset={-150} className={`flex flex-col items-center cursor-pointer ${style.bgRed} rounded-lg px-2 py-1 md:px-5 md:py-3 hover:scale-105 shadow-sm drop-shadow-sm`}>
              <span className='text-white text-base md:text-2xl font-bold uppercase'>Grab the {bf ? 'black friday' : 'Launch'} offer</span>
              <span className='text-white text-center text-sm md:text-2xl'> at an unbelievable discount!</span>
            </Link>
            {
              data && (
                <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
                  No, I don't want this offer
                </Link2>
              )
            }
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-4xl text-center text-white font-bold`}>
              The YouTubeneur RoadMap
            </h2>
          </div>
          <div className='flex flex-col w-full'>
            <JourneyScroll />
          </div>
        </section>
        <section className="z-10 hidden lg:flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-10">
          <div className={`flex flex-col gap-2 ${sora.className} items-center`}>
            <h2 className={`text-lg ${style.bgRed} py-2 px-5 md:text-3xl text-center text-white font-bold shadow-lg drop-shadow-lg rounded-lg`}>
              Must for all those who share any of the below need..
            </h2>
          </div>
          <div className="flex flex-col w-full">
            <Matrix />
          </div>
        </section>
      </div>
      <section className="relative flex flex-col z-20 py-10 md:py-20 px-5 md:px-40 gap-5 bg-white/5">
        <img src="https://i.ibb.co/jJ3gDDP/texture-BG.png" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className={`z-10 flex flex-col gap-2 ${sora.className}`}>
          <PaymentSection loc={loc} data={data} bf={bf} />
        </div>
      </section>
      <div className={`flex flex-col relative`}>
        <img src="https://i.ibb.co/PWVzSQt/texture-BG3.jpg" alt="texture" className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-10" />
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-10">
          <div className={`flex flex-col gap-10 ${sora.className}`}>
            <h2 className='text-xl md:text-3xl text-center text-red-500/90 font-bold'>
              Featured Testimonials From The Community & Clients
            </h2>
            <div className="flex flex-col">
              <Testimonials />
            </div>
          </div>
        </section>
        <section className="z-10 flex flex-col py-10 md:py-20 px-5 md:px-40 gap-5 md:gap-10 bg-white/5">
          <div className={`flex flex-col gap-2 ${sora.className}`}>
            <h2 className={`text-xl md:text-3xl text-center text-white font-bold`}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className={`flex w-full md:w-8/12 self-center flex-col ${sora.className}`}>
            <FAQ data={faqData} bgcolor={{ question: 'bg-white/5 border-white border-2', answer: 'bg-white/10' }} textSize={{ question: 'text-base md:text-xl text-white', answer: 'text-sm md:text-base text-white' }} />
          </div>
        </section>
      </div>
      <FunnelFooter />
      {
        videoPlayervisible && <VideoPlayer setVideoPlayervisible={setVideoPlayervisible} />
      }
    </div >
  )
}
