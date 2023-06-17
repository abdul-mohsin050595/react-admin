import { useState } from "react";

export const useCheckbox = ({ items }) => {
  // const [sorting, setSorting] = useState({ field: "", asc: true })
  const [curItems, setcurItems] = useState(items);

  // const selectedItems = curItems.filter(item => item.isChecked === true).length

  // const sortItems = (field, asc) => {
  //     setSorting({ field: field, asc: asc })
  // }

  console.log(items);
  const checkedHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "selectedAll") {
      // const checkedItem = curItems.map(item => {
      //     return { ...item, isChecked: checked }
      // })
      // console.log(checkedItem)
      // setcurItems(checkedItem)
    } else {
      // const checkedItem = curItems.map(item => item.id === +name ? { ...item, isChecked: checked } : item
      // )
      // setcurItems(checkedItem)
      // console.log(checkedItem)
    }
    console.log(name, checked);
  };
  // useEffect(() => {
  //     const sortedCurrentItems = items.sort((a, b) => {
  //         return a[sorting.field] > b[sorting.field] ? 1 : -1;
  //     });
  //     setcurItems(sorting.asc ? sortedCurrentItems : sortedCurrentItems.reverse())
  // }, [sorting, items])

  return {
    // selectedItems,
    checkedHandler,
    // sortItems,
    // sorting,
    curItems,
  };
};
