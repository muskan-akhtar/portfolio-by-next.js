"use client";
import Link from "next/link";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && (
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={link} target="_blank" className="text-blue-500 hover:underline">
          View Project
        </Link>
      </div>
    </div>
  );
}
