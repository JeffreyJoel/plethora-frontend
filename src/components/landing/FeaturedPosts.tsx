"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostCard from "../posts/PostsCard";
import { usePostController } from "@/hooks/usePostController";
import { Post } from "@/interfaces/Post";

const FeaturedPosts = () => {
  const { getPosts } = usePostController();
  // const [posts, setPosts] = useState<Post[]>();
  const fetched_posts = getPosts()

  function fetchPosts() {

  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="bg-[#171717] ">
      <div className="w-full px-4 py-12 sm:w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-4xl font-semibold text-white">Featured Posts</h2>
        <div className="flex flex-col md:flex-row mt-8 mx-auto gap-3 lg:gap-8">
          {(fetched_posts &&
            fetched_posts?.slice(0, 3).map((post) => <PostCard key={post.id} post={post} />)) || (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
