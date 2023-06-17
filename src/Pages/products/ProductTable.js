import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Chevrin } from "../../Components";

const tableHead = [
  { field: "id", name: "ProductId" },
  { field: "title", name: "Name" },
  { field: "stock", name: "Stock" },
  { field: "price", name: "Price" },
  { field: "category", name: "Category" },
];

function ProductTable({ products }) {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState({ field: "", direction: "asc" });
  const [curProducts, setCurProducts] = useState(products);

  const selected = curProducts.filter(
    (prod) => prod?.isChecked === true
  ).length;

  console.log(selected);

  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "selectedAll") {
      const checkedProducts = curProducts.map((prod) => {
        return { ...prod, isChecked: checked };
      });
      setCurProducts(checkedProducts);
    } else {
      const checkedProducts = curProducts.map((prod) =>
        prod.id === +name ? { ...prod, isChecked: checked } : prod
      );
      setCurProducts(checkedProducts);
    }
  };

  const deleteAllhandler = () => {
    console.log("deleteAll");
  };

  const navigateProductPage = (id) => {
    navigate(`/products/${id}`);
  };

  const sortProducts = (head) => {
    setSorting({
      field: head.field,
      direction:
        head.field === sorting.field
          ? sorting.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  useEffect(() => {
    const sortedCurrentProducts = products.sort((a, b) => {
      return a[sorting.field] > b[sorting.field] ? -1 : 1;
    });
    setCurProducts(
      sorting.direction === "asc"
        ? sortedCurrentProducts
        : sortedCurrentProducts.reverse()
    );
  }, [sorting, products]);

  if (products.length === 0) {
    return <h1>Not Found</h1>;
  }
  return (
    <>
      <div className={`selectedContainer ${selected ? " show" : "hide"}`}>
        <span>
          <strong>Selected Items:</strong>
          {selected}
        </span>
        <button className="delete_all_btn" onClick={deleteAllhandler}>
          Delete All
        </button>
      </div>
      <table className="products_table" cellSpacing={0}>
        <thead>
          <tr>
            <td>
              <input
                type="checkbox"
                name="selectedAll"
                checked={curProducts?.every((prod) => prod.isChecked === true)}
                onChange={checkedHandler}
              />
            </td>
            {tableHead.map((head, idx) => {
              return (
                <td key={idx}>
                  <Link
                    className="head_contaner"
                    onClick={() => sortProducts(head)}
                  >
                    {head.name}
                    {head.field === sorting.field && (
                      <Chevrin
                        className={
                          sorting.field === head.field
                            ? sorting.direction
                            : "asc"
                        }
                      />
                    )}
                  </Link>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr
                key={product.id}
                onClick={() => navigateProductPage(product.id)}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    name={product.id}
                    checked={
                      curProducts?.find((prod) => prod.id === product.id)
                        ?.isChecked === true || false
                    }
                    onChange={checkedHandler}
                  />
                </td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;
