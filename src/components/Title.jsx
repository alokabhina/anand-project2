import React from 'react'

const Title = ({ text1, text2, align = 'start', showLine = true }) => {
  return (
    <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-start'} items-center gap-2 mb-4`}>
      <p className='text-gray-500 text-base sm:text-lg'>
        {text1} <span className='text-gray-700 font-semibold'>{text2}</span>
      </p>
      {showLine && <div className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></div>}
    </div>
  )
}

export default Title
