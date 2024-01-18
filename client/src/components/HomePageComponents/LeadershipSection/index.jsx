import React from 'react'
import LeaderCard from './LeaderCard';
import SectionHeading from '../../CommonComponents/SectionHeading';


const LeadershipSection = () => {
  return (
    <div className=' section py-16'>
          <SectionHeading
            subTitle='TEAM'
            title='Leadership'
          />

        <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 py-16'>
           <LeaderCard/>
           <LeaderCard/>
           <LeaderCard/>
        </div>
    </div>
  )
}

export default LeadershipSection