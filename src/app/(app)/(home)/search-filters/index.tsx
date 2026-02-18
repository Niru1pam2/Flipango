import { CustomCategory } from "../types";
import Categories from "./categories";
import SearchInput from "./search-input";

interface Props {
  data: CustomCategory[];
}

export default function SearchFilters({ data }: Props) {
  console.log(data);

  return (
    <div className="px-4 lg:px-12 py-8 border-b flex-col gap-4 w-full">
      <SearchInput data={data} />
      <div className="hidden sm:block mt-2">
        <Categories data={data} />
      </div>
    </div>
  );
}
