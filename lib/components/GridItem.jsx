import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
  }
}

export const GridItem = (props) => {
  const {
    attribution,
    description,
    img,
    title,
    url,
  } = props
  return <>
    <motion.a
      href={url}
      title={`View ${title}`}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full sm:w-1/3 rounded-lg mb-4 p-4 trans flex flex-col no-underline sm:max-w-1/3 bg-primary text-white hover:bg-highlight-5'
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className='flex flex-col justify-center trans p-2 px-2 h-32 sm:h-64'
      >
        
        <div className='flex items-center justify-between'>
          <div className=' font-bold text-xl sm:text-2xl'>
            {title}
          </div>
          <img
            src={img}
            className='w-10 h-10'
            title={attribution || ''}
          />
        </div>

        <div className='mt-2 no-underline text-gray-600 text-sm sm:text-xl'>
          {description}
        </div>
      </div>
    </motion.a>
  </>
}
