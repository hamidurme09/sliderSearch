import React, { useState, useEffect } from "react";

const arr = [
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
  {
    title: "Working with the Ghost Dashboard",
    description:
      "Manage Shares, folders, People, and your dashboard user account, online from your Dashboard.",
  },
  {
    title: "VPS Cold Staking Setup",
    description:
      "Here you will find information about how you can create a cold staking VPS (virtual private machine) for the Ghost…",
  },
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
  {
    title: " Getting Started",
    description:
      " Egestas morbi diam aliquam condimentum velit aliquam purus euismod dui. Mauris adipiscing eu.",
  },
  {
    title: "Working with the Ghost desktop app ",
    description:
      "Get to know the basics of using the Ghost desktop app for stacking, transerfingg and sharing user flow diagrams.",
  },
];

const Search = () => {
  const data = arr;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const allData = [...data];
    const regex = new RegExp(searchTerm, "gi");
    const searchResults = allData.reduce((acc, data) => {
      if (data.title && data.title.match(regex) || data.description.match(regex)) {
        acc.push(data);
      }
      return acc;
    }, []);

    setSearchResults(searchResults);
  }, [searchTerm]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
    setSearchLoading(true);
  };
  console.log("searchTerm", searchResults);

  return (
    <div>
      <input placeholder="search" onChange={handleChange} />
      <div style={{ paddingTop: 50 }}>
        {searchResults ? (
          <div>
            {searchResults.map((d, i) => (
              <div key={i}>
                <h4>{d.title}</h4>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {data.map((d, i) => (
              <div key={i}>
                <h4>{d.title}</h4>
                <p>{d.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
