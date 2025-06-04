import { useState, useMemo, useRef } from "react";


export function useSearchBar({ list, placeholderText, onSelect,  }: {
  list: string[],
  placeholderText: string,
  onSelect: (value: string) => void,
  
}) {
  const [value, setValue] = useState("");
  const [listVisible, setListVisible] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);



  const preview = useMemo(() => {
    return list.filter(item =>
      item.replace(/\s+/g, '').toLowerCase().includes(value.replace(/\s+/g, '').toLowerCase())
    );
  }, [list, value]);

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSearchBtn();
  }

  function handleSearchBtn() {
    if (!preview[0]) {
      alert("Name not found");
    }
    else if (value.replace(/\s+/g, '') === "") {
      onSelect("")}
       else {
      onSelect(preview[0]);
    }
    setValue("");
  }

  function handleListClick(listValue: string) {
    onSelect(listValue);
    setValue("");
  }

  function handleChange(e: React.ChangeEvent) {
    setValue((e.target as HTMLInputElement).value);
  }

  function visibleCheck(e: React.FocusEvent<HTMLInputElement>) {
    if (
      listRef.current &&
      (listRef.current as HTMLElement).contains(e.relatedTarget as Node)
    ) {
      return;
    }
    setListVisible(false);
  }

  return {
    value,
    setValue,
    listVisible,
    setListVisible,
    inputRef,
    listRef,
    preview,
    handleKey,
    handleSearchBtn,
    handleListClick,
    handleChange,
    visibleCheck,
    placeholder: placeholderText,
  };
}