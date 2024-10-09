import { Suspense } from "react";
import FeedsList from "@/components/Feeds/FeedsList";
import { FeedsPageSkeleton } from "@/components/Feeds/FeedsPageSkeleton";

export const metadata = {
  title: "PC Builder Feeds",
  description: "View the latest PC builds from the community",
};

export default function FeedsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PC Builder Feeds</h1>
      <Suspense fallback={<FeedsPageSkeleton />}>
        <FeedsList />
      </Suspense>
    </div>
  );
}
