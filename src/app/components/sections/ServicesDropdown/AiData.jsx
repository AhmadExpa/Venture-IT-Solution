import Link from "next/link";
import React from "react";

const AiData = () => {
  return (
    <div className=" w-[200px]  rounded-md">
      <ul className="space-y-4">
        <li>
          <Link href="/AiandData#aisoftware" className="text-md">
            AI-Powered Software
          </Link>
        </li>
        <li>
          <Link href="/AiandData#generativeai" className="text-md">
            Generative AI Apps
          </Link>
        </li>
        <li>
          <Link href="/AiandData#mldata" className="text-md">
            ML & Data Engineering
          </Link>
        </li>
        <li>
          <Link href="/AiandData#bi" className="text-md">
            Business Intelligence
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AiData;