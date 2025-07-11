import Link from "next/link";
import React from "react";

const Development = () => {
  return (
    <div className=" w-[200px] rounded-md">
      <ul className="space-y-4">
        <li>
          <Link href="/development#cloudeweb" className="text-md">
            Cloud and Web Development
          </Link>
        </li>
        <li>
          <Link href="/development#mobiledevelopment" className="text-md">
            Mobile Development
          </Link>
        </li>
        <li>
          <Link href="/development#softwaredevelopment" className="text-md">
            Software Development
          </Link>
        </li>
        <li>
          <Link href="/development#mvpdevelopment" className="text-md">
            MVP Development
          </Link>
        </li>
        <li>
          <Link href="/development#saasdevelopment" className="text-md">
            SaaS Development
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Development;
