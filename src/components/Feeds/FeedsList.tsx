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
    <div>
      {builds?.map((build) => (
        <PCBuildFeedItem
          key={build._id}
          build={{
            ...build,
            totalPrice: build.totalPrice.toString(),
            id: build._id,
          }}
        />
      ))}
    </div>
  );
}
