import { FeedItemType } from "@/types/feed";

export async function getFeedItems(): Promise<FeedItemType[]> {
  // In a real application, you would fetch this data from an API
  // For this example, we'll return mock data
  return [
    {
      id: "1",
      title: "High-Performance Gaming PC Build",
      description:
        "Check out this amazing gaming PC build featuring the latest RTX 4090!",
      image: "/images/gaming-pc.jpg",
      author: "John Doe",
      date: "2023-05-15",
    },
    {
      id: "2",
      title: "Budget-Friendly Workstation",
      description: "A great PC build for productivity on a budget.",
      image: "/images/workstation.jpg",
      author: "Jane Smith",
      date: "2023-05-14",
    },
    // Add more mock items as needed
  ];
}
