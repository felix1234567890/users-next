import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import UsersList from "@/components/UsersList/UsersList";

export default function Home() {
  return (
    <>
      <Filter />
      <UsersList />
      <Pagination pageCount={6} pageNumber={1} />
    </>
  );
}
