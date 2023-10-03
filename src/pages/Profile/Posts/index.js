"use client";

import PropTypes from "prop-types";
import { Post } from "@/components/Post";

export const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 lg:gap-3">
      {posts.map((post) => (
        <Post key={post.code} post={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      comment_count: PropTypes.number,
      display_url: PropTypes.string,
      like_count: PropTypes.number,
      media_type: PropTypes.number,
      post_url: PropTypes.string,
      taken_at: PropTypes.number,
      view_count: PropTypes.number,
    })
  ),
};
