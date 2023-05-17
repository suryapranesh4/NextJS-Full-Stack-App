"use client";

import { useEffect, useState } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const MyProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userposts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={`${userName}`}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and inspire others with the power of their imagination`}
      data={userposts}
    />
  );
};

export default MyProfile;
