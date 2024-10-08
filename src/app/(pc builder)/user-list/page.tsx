import { getUserAllBuilds } from "@/server-actions/pc";
import React from "react";

export default async function UserListPage() {
  const getAllUserCompletedBuilds = await getUserAllBuilds();

  if (!getAllUserCompletedBuilds.success) {
    return <div>Error: {getAllUserCompletedBuilds.message}</div>;
  }

  const builds = getAllUserCompletedBuilds.builds;

  console.log(builds);

  return <div>UserListPage</div>;
}
