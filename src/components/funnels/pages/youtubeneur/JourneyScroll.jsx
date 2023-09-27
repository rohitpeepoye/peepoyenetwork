import React, { Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import JourneyScrollElements from './JourneyScrollElements'
import style from '@/styles/JourneyScroll.module.css'

// const style = {
//     bgImage: {
        
//         &:before: {
//     },
//     bgImagebefore: {
//         content: 'Start',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: '#fff',
//         fontSize: '3rem',
//         fontWeight: 'bold',
//         textShadow: '0 0 10px #fff',
//     }, 
// }

export default function JourneyScroll() {
    let data = [
        {
            title: 'The 3-Days Challenge',
            description: `Complete the 3-Days Foundational Accelerator course on YouTube and do all the tasks which will lay down the foundation of your YouTube journey.`,
            image: {
                src: 'https://i.ibb.co/QYMnCmc/accelerator.webp',
                alt: 'accelerator',
            },
        },
        {
            title: 'The 35-Days Jump Challenge',
            description: `Set up every system, tool, and process with step-by-step instructions as part of becoming a YouTubeneur.`,
            image: {
                src: 'https://i.ibb.co/BrZHYbt/green.webp',
                alt: 'jump',
            },
        },
        {
            title: `The 100 Videos Challenge`,
            description: `Create 100 videos for your YouTube channel and implement all the strategies you learned and grow in the process. `,
            image: {
                src: 'https://i.ibb.co/TB8cBHn/video-challenge.webp',
                alt: 'videos',
            },
        },
        {
            title: `Community Building Challenge`,
            description: `Build your own loyal community of like-minded individuals. Collaborate and build your personal brand. `,
            image: {
                src: 'https://i.ibb.co/8PtTDky/community.webp',
                alt: 'community',
            },
        },
        {
            title: `Product Roll-Out Challenge`,
            description: `Launch your product in the market and start generating sales out of it by using strategies taught in the youtubeneur journey.`,
            image: {
                src: 'https://i.ibb.co/yfRqGJq/product.webp',
                alt: 'product',
            },
        },
        {
            title: `Collaborate with Akassh`,
            description: `Once you have 100 members in your community and have generated 10 sales of your first product, you get an opportunity to collaborate with Akassh- The first "YouTubeneur" himself!`,
            image: {
                src: 'https://i.ibb.co/sqDV87D/audit-call.webp',
                alt: 'collaborate',
            },
        }
    ]

    return (
        <div className={`flex flex-col relative items-center justify-center w-full h-full gap-8 md:gap-32 ${style.bgImage}`}>
            {
                data.map((item, index) => (
                    <Fragment key={index}>
                        <JourneyScrollElements details={item} index={index} />
                    </Fragment>
                ))
            }
        </div>
    )
}
