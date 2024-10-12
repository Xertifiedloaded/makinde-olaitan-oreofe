"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPostBySlug } from "@/lib/useApiResources";
import { format } from 'date-fns';  

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          setLoading(true);
          const { data } = await getPostBySlug(id);
          setPost(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!post) return <p className="text-center text-gray-500">No post found</p>;

  const formattedDate = post.updatedAt ? format(new Date(post.updatedAt), 'MMMM dd, yyyy') : 'Unknown date';

  return (
    <div className="container mt-8 mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-[40px] font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {formattedDate}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primaryColor text-white text-sm px-3 py-1 rounded-full dark:bg-primaryColorDark"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <figure className="mb-10">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-auto max-h-96 rounded-lg shadow-lg object-cover"
        />
      </figure>

      <article className="prose lg:prose-xl dark:prose-dark max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export default BlogPostPage
