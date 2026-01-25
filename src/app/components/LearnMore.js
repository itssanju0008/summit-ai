import Link from "next/link";
import React from "react";

export default function LearnMore() {
  return (
    <div className=" bg-white">
      <Link href="#about">
        <div className="bg-slate-50  border-2 border-gray-200">
          <img
            src="/images/learn-more.png"
            alt="Learn More"
            className="w-full h-auto rounded border border-gray-300"
          />
        </div>
      </Link>
    </div>
  );
}
