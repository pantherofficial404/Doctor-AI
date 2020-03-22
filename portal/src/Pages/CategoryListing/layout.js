import React, { useEffect } from "react";

import { Listing } from "Components";
import { fetchCategory } from "Store/action";
import { selectCategories } from "Store/selectors";
import { useSelector } from "react-redux";

const Layout = () => {
  const categoryListing = useSelector(selectCategories);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Listing
      data={categoryListing}
      keys={{
        title: "Category Name",
        description: "Description"
      }}
    />
  );
};

export default Layout;
