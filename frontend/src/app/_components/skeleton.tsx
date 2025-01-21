import { Skeleton } from "./ui/skeleton";

export const Loading = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-5" />
      <Skeleton className="w-1/2 h-5" />
    </div>
  );
};
