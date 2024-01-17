import React from 'react'

const SectionHeading = ({subTitle,title}) => {
  return (
    <div className=' text-center space-y-2'>
        <h6 className=' font-bold uppercase text-sm text-gray-400 tracking-widest'>{subTitle}</h6>
        <h3 className=' text-5xl font-bold'>{title}</h3>
    </div>
  )
}

export default SectionHeading