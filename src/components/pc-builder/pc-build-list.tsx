// import { getPCBuilds } from "@/lib/pc-builds";
import { PCBuildCard } from "./pc-build-card";
import { getUserAllBuilds } from "@/server-actions/pc";

export async function PCBuildList() {
  const buildsResponse: any = await getUserAllBuilds();

  if (
    buildsResponse.success === false ||
    (buildsResponse.success === true && buildsResponse.builds?.length === 0)
  ) {
    return <p>No PC builds found.</p>;
  }

  const builds = buildsResponse.builds;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {builds?.map((build: any) => (
        <PCBuildCard
          key={build._id}
          build={{ ...build, totalPrice: build.totalPrice.toString() }}
        />
      ))}
    </div>
  );
}
