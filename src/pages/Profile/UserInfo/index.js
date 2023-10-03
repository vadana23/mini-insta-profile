"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { numberFormat } from "@/utils/helpers";
import { Icon } from "@/components/Icon";
import styles from "./styles.module.css";
import { Button } from "@/components/Button";

const UserData = ({ user }) => {
  return (
    <div className="flex items-start justify-between gap-10">
      <p className="text-sm text-center">
        <span className="block font-semibold lg:inline-block">
          {numberFormat(user.posts_count)}
        </span>{" "}
        posts
      </p>
      <p className="text-sm text-center">
        <span className="block font-semibold lg:inline-block">
          {numberFormat(user.follower_count)}
        </span>{" "}
        followers
      </p>
      <p className="text-sm text-center">
        <span className="block font-semibold lg:inline-block">
          {numberFormat(user.follow_count)}
        </span>{" "}
        following
      </p>
    </div>
  );
};

export const UserInfo = ({ user, profileData }) => {
  return (
    <div>
      <div className={styles.userProfile}>
        <div className="relative w-20 h-20 lg:w-40 lg:h-40 [grid-area:avatar] bg-clip-padding border-1 before:block before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-amber-400 before:to-pink-600 before:z-[-1] before:-m-1">
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image src={user.profile_pic_url} alt={user.username} fill />
          </div>
        </div>

        <div className="[grid-area:username] md:flex md:items-end md:gap-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl">{user.username}</h2>
            <Icon type="verified" />
          </div>

          <div className="grid grid-cols-2 gap-1 mt-3 md:inline-grid md:gap-2">
            <Button>Follow</Button>
            <Button variant="secondary">Message</Button>
          </div>
        </div>

        <div className="[grid-area:bio]">
          <div className="hidden lg:block">
            <UserData user={user} />
          </div>

          <h3 className="mt-4 text-sm">{user.full_name}</h3>
          <div className="mt-3 text-sm">
            <p className="text-gray-400 ">Personal blog</p>
            <p className="whitespace-pre">{user.biography}</p>
          </div>
        </div>
      </div>

      <div className="py-3 mt-10 border-t border-gray-500 border-solid lg:mt-16 lg:pt-12 lg:hidden">
        <UserData user={user} />
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    biography: PropTypes.string,
    username: PropTypes.string,
    full_name: PropTypes.string,
    profile_pic_url: PropTypes.string,
    posts_count: PropTypes.number,
    follow_count: PropTypes.number,
    follower_count: PropTypes.number,
  }),
};
