"use client";

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Icon } from "../Icon";
import { numberFormat } from "@/utils/helpers";

export const Post = ({ post }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      key={post.code}
      href={`https://www.instagram.com/p/${post.code}`}
      className="relative pb-[100%]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={post.post_url}
        alt={post.code}
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div className="absolute flex items-center gap-2 bottom-1 right-2">
        <Icon type="eye" className="w-6 h-6" />
        <span className="text-sm text-white">
          {numberFormat(post.view_count)}
        </span>
      </div>

      {isHover && (
        <div className="absolute inset-0 items-center justify-center hidden lg:flex bg-black/30 ">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Icon type="heart" className="w-6 h-6" />
              <span className="text-sm text-white">
                {numberFormat(post.like_count)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon type="message" className="w-6 h-6" />
              <span className="text-sm text-white">
                {numberFormat(post.comment_count)}
              </span>
            </div>
          </div>
        </div>
      )}
    </a>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    code: PropTypes.string,
    comment_count: PropTypes.number,
    display_url: PropTypes.string,
    like_count: PropTypes.number,
    media_type: PropTypes.number,
    post_url: PropTypes.string,
    taken_at: PropTypes.number,
    view_count: PropTypes.number,
  }),
};
