import { useGetInventory } from "../api/orval/split/__generated__/petstore/endpoints/store/store.ts";

export function Example() {
  const result = useGetInventory();


  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isError || result.data === undefined) {
    return <div>Error :( </div>;
  }

  console.log(result.data);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            result.refetch();
          }}
        >
          Refetch
        </button>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}
