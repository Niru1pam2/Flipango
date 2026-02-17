import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props {
  disabled?: boolean;
}

export default function SearchInput({ disabled }: Props) {
  return (
    <div className="flex items-center w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute -translate-y-1/2 top-1/2 text-neutral-500 size-4 ml-2" />
        <Input
          className="pl-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      {/* ADD categories view all buttont */}
    </div>
  );
}
