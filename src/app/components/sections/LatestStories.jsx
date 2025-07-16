"use client";
import exploreImage from "../../assets/images/ExploreArrow.png";
import React, { useEffect, useState } from "react";
import ExploreDeeper from "../common/ExploreDeeper";

function LatestStories() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const articles = blogs.reduce((acc, blog, index) => {
    const groupIndex = Math.floor(index / 2);
    if (!acc[groupIndex]) acc[groupIndex] = { items: [] };

    acc[groupIndex].items.push({
      image: blog.images[0]?.path || "/default.jpg",
      title: blog.title,
      slug: blog.slug,
      description: blog.excerpt,
    });

    return acc;
  }, []);

  return (
    <ExploreDeeper
      title="Latest Stories"
      description="Explore our blogs and recent stories for incredible insights, tips, trends, and inspiration to fuel your growth in the market."
      exploreText="Explore deeper knowledge"
      exploreImage={exploreImage}
      articles={articles}
    />
  );
}

export default LatestStories;
