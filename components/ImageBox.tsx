import Image from "next/image";
import React from "react";
type Props = {
  key: number;
  largeImageURL: string;
  tags: string;
  downloads: number;
  likes: number;
  views: number;
  pageURL: string;
};
const ImageBox = ({
  key,
  largeImageURL,
  tags,
  downloads,
  likes,
  views,
  pageURL,
}: Props) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 w-full">
      <div className="flex relative">
        <Image
          src={largeImageURL}
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          layout="fill"
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            {tags.toUpperCase()}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
            Downloads: {downloads}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
            Likes: {likes}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
            Views: {views}
          </h1>
          <h1 className="text-lg font-medium underline">
            <a href={pageURL} target="_blank" rel="noreferrer">
              Visit
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
