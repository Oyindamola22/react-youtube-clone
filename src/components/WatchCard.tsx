import React from "react";
import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex gap-3 md:gap-5 lg:gap-6">
      <div className="relative min-w-fit">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="h-24 w-40 md:h-32 md:w-56 lg:h-48 lg:w-80"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm md:text-base lg:text-lg">
          <Link to={`/watch/${data.videoId}`} className="line-clamp-2 hover:text-white">
            {data.videoTitle}
          </Link>
        </h4>
        <div className="text-xs md:text-sm text-gray-400">
          <div>
            <Link to="#" className="hover:text-white">
              {data.channelInfo.name}
            </Link>
          </div>
          <div>
            <span className="after:content-['•'] after:mx-1">
              {data.videoViews} views
            </span>
            <span>{data.videoAge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
