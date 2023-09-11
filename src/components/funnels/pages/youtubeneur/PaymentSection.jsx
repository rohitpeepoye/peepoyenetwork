import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillCaretRightFill } from 'react-icons/bs'
import parse from 'html-react-parser'
import Link2 from 'next/link'
import url from '@/utils/url'
import style from '@/styles/AcceleratorInd.module.css'

export default function PaymentSection({ loc, data }) {
  const dataP = {
    ind: {
      monthly: {
        selectortext: 'Monthly',
        recommended: false,
        price: 15,
        currency: '$',
        buttonText: {
          main: 'Book Now at $15/month',
          sub: 'Able to cancel anytime'
        },
        link: 'https://www.skool.com/youtubeneur',
      },
      yearly: {
        selectortext: 'Yearly',
        recommended: false,
        price: 99,
        currency: '$',
        buttonText: {
          main: 'Book Now at $99/year',
          sub: 'Able to cancel anytime'
        },
        link: 'https://www.skool.com/youtubeneur',
      },
      lifetime: {
        selectortext: 'Lifetime',
        recommended: true,
        price: 4999,
        currency: '₹',
        buttonText: {
          main: 'Book Now at ₹4999/- only',
          sub: 'Limited Time Offer'
        },
        link: 'https://akassh.co/accelerator-pre-book',
      },
    },
    int: {
      monthly: {
        selectortext: 'Monthly',
        recommended: false,
        price: 15,
        currency: '$',
        buttonText: {
          main: 'Book Now at $15/month',
          sub: 'Able to cancel anytime'
        },
        link: 'https://www.skool.com/youtubeneur',
      },
      yearly: {
        selectortext: 'Yearly',
        recommended: false,
        price: 99,
        currency: '$',
        buttonText: {
          main: 'Book Now at $99/year',
          sub: 'Able to cancel anytime'
        },
        link: 'https://www.skool.com/youtubeneur',
      },
      lifetime: {
        selectortext: 'Lifetime',
        recommended: true,
        price: 199,
        currency: '$',
        buttonText: {
          main: 'Book Now at $199/- only',
          sub: 'Limited Time Offer'
        },
        link: 'https://akassh.co/accelerator-pre-book',
      },
    }
  }
  const [currentPlan, setCurrentPlan] = useState('lifetime')
  const items = [
    '<span className="font-normal text-neutral-100">Lifetime access to Youtubeneur Foundation Accelerator </span> our flagship Course to Build Online Authority',
    '<span className="font-normal text-neutral-100">Instant access</span> to our Private Youtubeneur Community to collaborate while learning',
    `<span className="font-normal text-neutral-100">Bonus #1:</span> Donot Do This On Youtube`,
    `<span className="font-normal text-neutral-100">Bonus #2:</span> Scripting Secret Course`,
    `<span className="font-normal text-neutral-100">Bonus #3:</span> Thumbnail Designing Hack`,
    `<span className="font-normal text-neutral-100">Bonus #4:</span> Video Editing Checklist`,
    `<span className="font-normal text-neutral-100">Bonus #5:</span> Video Optimization Doc`,
    `<span className="font-normal text-neutral-100">Bonus #6:</span> Revenue Prediction Tool`,
  ]

  const handlePayment = () => {
    if (!data) {
      window.open(dataP[loc][currentPlan].link, '_blank')
    }
    else {
      window.open(data.paymentLink[currentPlan][loc], '_blank')
    }
  }
  return (
    <div className="flex flex-col items-center gap-10" id="paymentPage">
      <div className={`${style.redShadow} flex flex-col gap-5 w-full md:w-6/12 bg-white/5 border-2 border-white shadow-md rounded-xl p-2 md:p-5 drop-shadow-md`}>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-4xl text-center font-bold text-red-600">Are you ready to become a Youtubeneur?</h2>
          <h3 className='text-xl md:text-2xl text-center text-white font-medium'>Here is what you get</h3>
        </div>
        <div className="flex flex-col gap-5">
          {
            items.map((item, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <BsFillCaretRightFill className={`text-2xl ${style.textRed} w-6 mt-px`} />
                <p className="text-white font-thin text-base md:text-lg flex-1">{parse(item)}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-row justify-center items-end gap-1 md:gap-5 w-full">
          {
            Object.keys(dataP[loc]).map((key, index) => (
              <div className="flex flex-col flex-1" key={index}>
                {
                  dataP[loc][key].recommended && (
                    <p className={`${style.bgRed} text-white text-center font-bold px-2 py-1 rounded-t-md`}>Recommended</p>
                  )
                }
                <button className={` px-2 py-1 md:px-5 md:py-2 ${dataP[loc][key].recommended ? 'rounded-b-md' : 'rounded-md'} ${currentPlan === key ? 'bg-white text-red-600' : 'bg-white/10 text-white'}`} onClick={() => setCurrentPlan(key)}>{dataP[loc][key].selectortext}</button>
              </div>
            ))
          }
        </div>
        <button className={`text-lg md:text-2xl ${style.bgRed} text-white px-3 py-2 rounded-md  hover:scale-105 active:scale-95 transition duration-300 ease-in-out shadow-md`} onClick={() => handlePayment()}>
          {
            dataP[loc][currentPlan].buttonText.main
          }
          <p className="text-sm text-white">{dataP[loc][currentPlan].buttonText.sub}</p>
        </button>
        {
          data && (
            <Link2 className='self-center text-xl text-white hover:underline' href={`${url}/${data.no.query}?product=${data.no.product}`} >
              No, I don't want this offer
            </Link2>
          )
        }
      </div>
    </div>
  )
}