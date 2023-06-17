import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../Redux/Actions/productAction";
import ProductTable from "./ProductTable";
import "./product.css";
import { searchProduct } from "../../Utils/filterProducts";
import { Error, Pagination, Search } from "../../Components";
import Loading from "../../Components/Loading/Loading";

function Products() {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [itemOffset, setitemOffset] = useState(0);
  const [perPage, setPerPage] = useState(8);
  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });
  const [search, setSearch] = useState(searchParams.get("filter"));

  const filteredProducts = searchProduct(products, search);

  const handleSearch = (query) => {
    setSearch(query);
    setSearchParams({ filter: query });
  };

  const endOffset = itemOffset + +perPage;
  const currentProducts = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / perPage);

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * perPage) % filteredProducts.length;
    setSearchParams(selected !== 0 ? { page: selected } : "");
    setitemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const navigateToCreate = () => {
    navigate("/products/create");
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <section>
      <div>
        <div className="products">
          <div className="products_top">
            <Search
              handleSearch={handleSearch}
              value={search}
              handlePageClick={handlePageClick}
            />
            <button onClick={navigateToCreate}>+ Create</button>
          </div>
          <ProductTable products={currentProducts} />
        </div>
      </div>

      <Pagination
        setSearchParams={setSearchParams}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        perPage={perPage}
        setPerPage={setPerPage}
        currentItems={currentProducts}
      />
    </section>
  );
}

export default Products;
