import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className=" w-[200px]  rounded-md">
      <ul className="space-y-4">
        <li>
          <Link href="/it-services#devops" className="text-md">
            DevOps Services
          </Link>
        </li>
        <li>
          <Link href="/it-services#qa" className="text-md">
            QA Testing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
