import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useResource } from "@/lib/useApiResources";
import { format } from 'date-fns';

const Blog = () => {
  const API_URL = "/api/blog/blog";
  const { data: post } = useResource(API_URL);

  return (
    <section className="portfolio section pb-[220px] bg-gradient-0 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorDark px-[5%] sm:px-[2%] 2xl:px-[17%]">
      <h2 className="uppercase tracking-wide text-h1Size font-bold text-titleColor dark:text-titleColorDark text-center mb-6">
        Latest Blog
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        My
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
          Articles and Advice
        </span>
      </p>

      <Swiper
        pagination={{ clickable: true }}
        breakpoints={{
          540: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {post.reverse().map(({ _id, updatedAt, img, title, tags, description }) => {
          const formattedDate = updatedAt ? format(new Date(updatedAt), 'MMMM dd, yyyy') : 'Unknown date';

          return (
            <SwiperSlide
              key={_id}
              className="flex flex-col bg-containerColor border-2 border-bgColorDark dark:bg-containerColorDark dark:border-textColorDark py-8 px-6 rounded-xl overflow-hidden text-left"
            >
              <div className="relative mb-6 flex-shrink-0">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 md:h-60 rounded-xl object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-titleColor dark:text-titleColorDark mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {formattedDate}
                </p>
                <p className="text-textColor truncate dark:text-textColorDark mb-4 flex-grow">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap  gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primaryColor font-bold  text-white text-[10px] px-3 py-1 rounded-full dark:bg-primaryColorDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${_id}`}
                className="flex items-center justify-center text-titleColor dark:text-titleColorDark text-xs gap-2 border-2 border-solid border-borderColor dark:border-borderColorDark py-2 px-4 rounded-full bg-white dark:bg-titleColor relative overflow-hidden group"
              >
                <span className="z-10 font-jost font-bold">
                  Read&nbsp;<span className="text-primaryColor">More</span>
                </span>
                <FaArrowRight className="z-20" />
                <span className="absolute inset-0 bg-primaryColor rounded-full scale-75 blur-sm opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:blur-none group-hover:opacity-100"></span>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Blog;
