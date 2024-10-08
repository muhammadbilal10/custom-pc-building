"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MoreVertical, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PCBuild } from "@/types/pc-build";
import { formatPrice } from "@/utils/priceUtils";
import { deleteUserBuild } from "@/server-actions/pc";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface PCBuildCardProps {
  build: PCBuild;
}

export function PCBuildCard({ build }: PCBuildCardProps) {
  const [state, formAction] = useFormState(deleteUserBuild, null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      setIsAlertOpen(false);
      router.refresh();
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {build?.name || "No Name"}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your PC build and remove the data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <form action={formAction}>
                    <input type="hidden" name="id" value={build._id} />
                    <SubmitButton text="Delete" pendingText="Deleting..." />
                  </form>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        {Object.entries(build.components).map(([category, component]) => (
          <CardDescription key={category} className="line-clamp-1">
            {category}: {component.name}
          </CardDescription>
        ))}
        <p className="mt-2 font-semibold">
          Total Price: {formatPrice(Number(build.totalPrice))}
        </p>
      </CardContent>
    </Card>
  );
}

// Submit Button
function SubmitButton({
  text,
  pendingText,
}: {
  text: string;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? pendingText : text}
    </Button>
  );
}
