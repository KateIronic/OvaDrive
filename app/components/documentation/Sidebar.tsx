import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const setSearchTerm = useState(" ")[1];
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const items = [
    "Overview",
    "Introduction",
    "Getting Started",
    "Installation",
    "Configuration",
    "Usage",
    "API Reference",
    "Examples",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
    "Overview",
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredItems([]);
    } else {
      const results = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(results);
    }
  };
  return (
    <div className="h-screen w-[50%] text-white p-4 flex flex-col border-[#808080] border-t-[1px] border-r-[1px] rounded-tr-3xl mt-[2%] relative">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          className="w-full p-2 rounded-xl text-white focus:outline-none bg-[#212121] border-white border-2"
        />
      </div>
      <div className="flex flex-col space-y-2 overflow-y-scroll">
        <ul>
          {(filteredItems.length > 0 ? filteredItems : items).map(
            (item, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-gray-700 rounded">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
