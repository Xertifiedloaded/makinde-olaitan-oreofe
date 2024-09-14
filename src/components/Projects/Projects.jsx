import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Items from './Items';
import List from './List';

import { useResource } from '@/lib/useApiResources';

const Projects = () => {
  const API_URL = "/api/project/project";
  const { data: project } = useResource(API_URL);

  const [projectItems, setMenuItems] = useState([]);
  const [navList, setCategories] = useState(['fullstack']);

  useEffect(() => {
    if (project && project.length > 0) {
      const allNavList = [ ...new Set(project.map((proj) => proj.category))];
      setCategories(allNavList); 
      setMenuItems(project);    
    }
  }, [project]);

  const filterItems = (category) => {
    if (category === 'fullstack') {
      setMenuItems(project);
      return;
    }
    const newProjectItems = project.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  return (
    <section
      className='portfolio  section pb-[50px] bg-gradient-0 from-bgColor to-bgColor  dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorDark px-[5%] sm:px-[2%] 2xl:px-[17%]'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Projects
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        My
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Cases
        </span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className=''>
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
