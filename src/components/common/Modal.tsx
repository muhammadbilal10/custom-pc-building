import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";
import { handleAdd } from "@/server-actions/pc";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        "Add"
      ) : (
        <>
          <Loader2 className="animate-spin h-4 w-4" />
          <span className="ml-2">Adding in...</span>
        </>
      )}
    </Button>
  );
}

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new PC</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new PC to the list.
          </DialogDescription>
        </DialogHeader>
        <form action={handleAdd}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start space-y-4">
              <Label htmlFor="username" className="text-right col-span-1">
                Pc Type
              </Label>
              <div className="w-full">
                <Select defaultValue="desktop" name="pcType">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="PC Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gaming">Gaming PC</SelectItem>
                    <SelectItem value="desktop">Desktop PC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Label htmlFor="name" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder="50"
                type="number"
                required
              />
            </div>
          </div>
          <div className="max-w-32 ml-auto mt-4">
            <SubmitButton />
          </div>
        </form>
        {/* <DialogFooter>
          <Button type="submit">
            <Link href="/list">Add</Link>
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
