import Link from "next/link";
import React from "react";

const Solution = () => {
  return (
    <div className=" w-[200px]   rounded-md">
      <ul className="space-y-4">
        <li>
          <Link href="/solutions#technology" className="text-md">
            Technology Solutions
          </Link>
        </li>
        <li>
          <Link href="/solutions#enterprise" className="text-md">
            Enterprise Software
          </Link>
        </li>
        <li>
          <Link href="/solutions#iot" className="text-md">
            IoT Solutions
          </Link>
        </li>
        <li>
          <Link href="/solutions#realtime" className="text-md">
            Real-time Solutions
          </Link>
        </li>
        <li>
          <Link href="/solutions#workflow" className="text-md">
            Workflow Automation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Solution;
