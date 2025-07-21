"use client";

import exploreImage from "../../assets/images/ExploreArrow.png";
import React from "react";
import ExploreDeeper from "../common/ExploreDeeper";
import useBlogs from "@/hooks/useBlogs";

function LatestStories() {
  const { blogs, isLoading } = useBlogs();

  const articles = blogs.map((blog) => ({
    image: blog.images?.[0]?.path || "/default.jpg",
    title: blog.title,
    slug: blog.slug,
    description: blog.excerpt,
  }));

  return (
    <ExploreDeeper
      title="Latest Stories"
      description="Explore our blogs and recent stories for incredible insights, tips, trends, and inspiration to fuel your growth in the market."
      exploreText="Explore deeper knowledge"
      exploreImage={exploreImage}
      articles={isLoading ? [] : articles}
    />
  );
}

export default LatestStories;
