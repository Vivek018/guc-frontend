import { ListTitle } from '@/components/list/ListTitle'
import React from 'react'

export const UserProjectListHeader = () => {
  return (
    <ListTitle 
      title="Your Donations"
      titleClassName="capitalize"
      className="w-[770px]"
      description={<UserProjectListDescription carbonAmount={100} carbonCredits={100} />}
    />
  );
};

const UserProjectListDescription = ({carbonAmount, carbonCredits}) => {
  return (
    <div className='flex flex-col justify-center items-center text-3xl text-gray mt-5 font-normal'>
      <p>
        Till date you have offsetted 
        <span className='font-bold text-dark-green mx-2'>{carbonAmount}</span> 
        tons of CO2
      </p>
      <p className='capitalize mt-2.5'>
        Total Carbon credits: 
        <span className='font-bold mx-2'>{carbonCredits}</span>
      </p>
    </div>
  );
};