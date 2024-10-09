import { getAllBuilds } from "@/server-actions/pc";
import React from "react";
import { PCBuildFeedItem } from "./PCBuildFeedItem";

export default async function FeedsList() {
  const allBuilds = await getAllBuilds();
  console.log(allBuilds);

  if (!allBuilds.success) {
    return <div>Error fetching builds</div>;
  }

  if (allBuilds.success === true && allBuilds.builds?.length === 0) {
    return <div>No builds found</div>;
  }

  const builds = allBuilds.builds;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {builds?.map((build) => (
        <PCBuildFeedItem
          key={build._id}
          build={{
            ...build,
            totalPrice: Number(build.totalPrice),
            id: build._id,
          }}
        />
      ))}
    </div>
  );
}
