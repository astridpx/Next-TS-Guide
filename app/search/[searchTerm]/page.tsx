import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: {
    position: number;
    title: string;
    link: string;
    displayed_link: string;
    snippet: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );

  const data: SearchResult = await res.json();
  return data;
};

export default async function SearchTermPage({
  params: { searchTerm },
}: PageProps) {
  const searchResults = await search(searchTerm);
  // console.log(searchResults.organic_results.title);
  console.log(searchResults);

  return (
    <div>
      <p className="text-gray-500 text-sm ">You search for: {searchTerm}</p>

      <ol className="space=y-5 p-5">
        {/* {searchResults.organic_results.map((result) => {
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>;
        })} */}
      </ol>
    </div>
  );
}
