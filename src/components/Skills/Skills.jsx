import React from 'react';
import { skill } from '../../../Data';


const Skills = () => {
  return (
    <section
      className='pb-[220px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]'

    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Professional Skills
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Talent
        </span>
      </p>

      <div className='sm:grid-cols-2 lg:grid-cols-3 gap-y-[70px] grid gap-[24px]'>
        {skill.map(({ name, percentage, description }, index) => {
          return (
            <div
              className='skills_item border-2 border-titleColor py-6 lg:px-4 mx-8 rounded-2xl bg-bgColorAlt dark:border-2 dark:border-titleColorDark dark:bg-bgColorAltDark '
              key={index}
            >
              <div className='flex justify-between items-center mb-[15px] px-[30px]'>
                <h3 className='text-larger text-titleColor font-[700] dark:text-titleColorDark'>
                  {name}
                </h3>
                <span className='text-titleColor dark:text-titleColorDark font-[700] text-large'>
                  {percentage} <span className='text-primaryColor'>%</span>
                </span>
              </div>
              <p className='mb-[30px] px-[30px] text-titleColor dark:text-titleColorDark text-small'>
                {description}
              </p>

              <div className='h-[2px] dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] mx-12 sm:mx-4'>
                <span
                  className='relative h-[2px] block bg-primaryColor'
                  style={{
                    width: `${percentage}%`,
                  }}
                >
                  <span className='bg-containerColor border-[2px] border-solid border-borderColor w-[25px] h-[25px] rounded-[50%] absolute right-0 top-[-12px]'></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
