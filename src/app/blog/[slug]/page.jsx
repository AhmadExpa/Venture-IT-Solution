import React from "react";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";

export const dynamic = "force-dynamic";

export default async function BlogPage({ params }) {
  const slug = (await params).slug;

  await dbConnect();
  const blog = await BlogPost.findOne({ slug }).lean();

  if (!blog)
    return <div className="pt-28 text-center text-2xl">Blog not found</div>;

  const landingImage = blog.images?.[0];
  const otherImages = blog.images?.slice(1) || [];
  const contentHtml = marked(blog.content || "");

  return (
    <div className="md:px-12 px-5 pt-28">
      <Link href="/insights">
        <div className="flex items-center gap-3">
          <MdOutlineArrowBack size={24} className="text-gray-600" />
          <span className="text-gray-600">Insights & Ideas</span>
        </div>
      </Link>

      <div className="md:flex justify-between lg:pt-20 md:pt-10 pt-5 gap-8">
        <div className="md:w-[40vw]">
          <h1 className="lg:text-[55px] text-3xl font-semibold md:tracking-wide lg:leading-[65px] md:leading-[40px]">
            {blog.title}
          </h1>
        </div>

        <div className="flex flex-col md:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg lg:text-end">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
          <p className="md:text-lg lg:pt-0 pt-3 text-gray-600 lg:text-justify">
            {blog.excerpt}
          </p>
        </div>
      </div>

      {landingImage && (
        <div className="lg:pt-20 pt-10">
          <Image
            src={landingImage.path}
            alt={landingImage.name}
            width={1200}
            height={700}
            className="w-full lg:h-[100vh] object-cover"
          />
        </div>
      )}

      <div className="flex md:flex-row flex-col justify-between lg:pt-28 pt-10 gap-10">
        <div className="border border-gray-300 rounded-2xl p-10 lg:w-[28vw] md:h-fit md:sticky md:top-20">
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-3xl text-2xl font-semibold">{blog.title}</h1>
            <h2 className="font-semibold text-gray-600 lg:text-justify">
              {blog.excerpt}
            </h2>
          </div>

          <div className="mt-6 flex gap-4 items-center">
            <span className="font-semibold text-gray-600">Learn More</span>
            <IoMdArrowForward size={24} className="text-gray-600" />
          </div>
        </div>

        <div className="md:w-[59vw] p-3">
          <div
            className="prose-custom prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {otherImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherImages.map((img, i) => (
                  <Image
                    key={i}
                    src={img.path}
                    alt={img.name}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
