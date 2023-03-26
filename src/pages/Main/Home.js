import React, { useEffect } from "react";
import { MdOutlineFilterAltOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import {
  clearFilters,
  toggleBrand,
  toggleStock,
} from "../../redux/actions/filteractions";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
  const filters = useSelector((state) => state.filter.filters);
  const products = useSelector((state) => state.product.products);
  const searched = useSelector((state) => state.product.search);
  const { userInput, matchedItems } = searched;
  const { brands, stock } = filters;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  let searchItems;

  // * show loaded products in ui and filter it by conditions

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  // * searched items show in ui and filter conditions.
  if (matchedItems.length) {
    searchItems = matchedItems.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (matchedItems.length && (stock || brands.length)) {
    searchItems = matchedItems
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        {stock || brands.length ? (
          <button
            onClick={() => dispatch(clearFilters())}
            className={`border flex justify-center items-center px-3 py-2 rounded-full font-semibold delay-10 focus:bg-red-500 focus:text-white`}
          >
            clear filters <MdOutlineFilterAltOff className="text-2xl" />
          </button>
        ) : null}
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      {userInput.length ? (
        matchedItems.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {searchItems}
          </div>
        ) : (
          <p className="font-semibold text-lg">
            There is <span className="text-red-500">no product</span> related to
            your search, try different search keyword.
          </p>
        )
      ) : products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {content}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
