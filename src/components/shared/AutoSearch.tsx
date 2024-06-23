import { ISelectData } from "@/app/coupon/add-coupon/page";
import CloseIcon from "@/components/icons/CloseIcon";
import { Input } from "@/components/ui/input";
import {
  Dispatch,
  SetStateAction,
  useState,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";

type AutoSearchProps = {
  selectItem: ISelectData[];
  setSelectItem: Dispatch<SetStateAction<ISelectData[]>>;
  query: string;
};

const AutoSearch = ({ query, selectItem, setSelectItem }: AutoSearchProps) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedList, setSuggestedList] = useState<any>(new Set());
  const [currentIndex, setCurrentIndex] = useState(-1);
  const listRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (searchTerm.trim() == "") {
      return setData([]);
    }

    fetch(`${query}?q=${searchTerm}`)
      .then((res) => res.json())
      .then((result) => setData(result.users));
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSelect = (item: ISelectData) => {
    setSelectItem((prev) => [...prev, item]);
    setSuggestedList(new Set([...suggestedList, item.value]));
    setSearchTerm("");
  };

  const handleDelete = (id: string) => {
    const removeItem = selectItem.filter((item: any) => item.id !== id);
    setSelectItem(removeItem);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setCurrentIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
        break;
      case "Enter":
        e.preventDefault();
        if (currentIndex >= 0 && currentIndex < data.length) {
          handleSelect(data[currentIndex]);
        }
        break;
      case "Backspace":
        if (e.target.value === "" && selectItem.length > 0) {
          const lastUser = [...selectItem];
          lastUser.pop();
          setSelectItem(lastUser);
        }
        break;
      default:
        break;
    }
  };

  const heightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((item, index) =>
          item.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index} className="text-orange-500">
              {item}
            </b>
          ) : (
            item
          )
        )}
      </span>
    );
  };

  useEffect(() => {
    if (currentIndex >= 0 && listRef.current) {
      const selectedItem = listRef.current.children[
        currentIndex
      ] as HTMLElement;
      selectedItem?.scrollIntoView({ block: "nearest" });
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="w-full rounded border border-gray-200 flex gap-2">
        {selectItem.length > 0 &&
          selectItem.map((item: any) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-500 px-4 py-2 relative"
            >
              {item.firstName}
              <span
                onClick={() => handleDelete(item.id)}
                className="absolute -top-2 -right-2 bg-white cursor-pointer border border-black rounded-full"
              >
                <CloseIcon className="w-4 h-4" />
              </span>
            </div>
          ))}
        <Input
          placeholder="Search product"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onKeyDown={handleKeyDown}
        />
      </div>

      {data.length > 0 && (
        <div
          ref={listRef}
          className="absolute top-[100%] h-80 overflow-y-auto left-0 bg-white w-full shadow pt-2"
        >
          {data.length > 0 ? (
            data.map((item: any, index) => {
              if (suggestedList.has(item.email)) return null;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`w-full text-sm font-medium p-2 rounded hover:bg-gray-200 ${
                    index === currentIndex ? "bg-gray-200" : ""
                  }`}
                >
                  {heightText(item.firstName, searchTerm)}
                </div>
              );
            })
          ) : (
            <span className="text-center text-xl p-2">No item found</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoSearch;
