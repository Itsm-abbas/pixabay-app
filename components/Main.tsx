import Head from "next/head";
import React from "react";
import ImageBox from "./ImageBox";
type Props = {
  data: any[];
  search: string;
};
const Main = ({ data, search }: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>DreamPixa - {search} images</title>
      </Head>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {search.charAt(0).toUpperCase() + search.slice(1)} Images
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.map(
            (item: {
              id: number;
              largeImageURL: string;
              tags: string;
              downloads: number;
              likes: number;
              views: number;
              pageURL: string;
            }) => {
              return (
                <ImageBox
                  key={item.id}
                  largeImageURL={item?.largeImageURL}
                  tags={item.tags}
                  downloads={item.downloads}
                  likes={item.likes}
                  views={item.views}
                  pageURL={item.pageURL}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Main;
