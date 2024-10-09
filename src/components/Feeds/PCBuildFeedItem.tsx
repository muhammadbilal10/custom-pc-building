import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PCBuild } from "@/types/pc";
import { formatPrice } from "@/utils/priceUtils";

interface PCBuildFeedItemProps {
  build: PCBuild;
}

export function PCBuildFeedItem({ build }: PCBuildFeedItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{build.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Created by: {build.userId}</p>
          <p className="text-sm text-gray-500">
            Total Price: {formatPrice(build.totalPrice)}
          </p>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold">Components:</h3>
            {Object.entries(build.components).map(([category, component]) => (
              <p key={category} className="text-xs text-gray-600">
                {category}: {component?.name || "Not selected"}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
