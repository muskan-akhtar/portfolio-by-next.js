"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      {image && (
        <Image
          src={image}
          alt={`${title} image`}
          width={500}
          height={300}
          layout="responsive"
          className="object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

