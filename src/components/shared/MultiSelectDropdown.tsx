import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import CloseIcon from "../icons/CloseIcon";
import { cn } from "@/lib/utils";
import CheckIcon from "../icons/CheckIcon";

type DataProps = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DataProps[];
  onChange: Dispatch<SetStateAction<DataProps[]>>;
  value: DataProps[];
};

const MultiSelectDropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  const [data, setData] = useState<DataProps[]>(options ?? []);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DataProps[]>(value);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= 0 && listRef.current) {
      const selectedItem = listRef.current.children[
        currentIndex
      ] as HTMLElement;
      selectedItem?.scrollIntoView({ block: "nearest" });
    }
  }, [currentIndex]);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem, onChange]);

  const handleSelectedItem = (item: DataProps) => {
    setSelectedItem((prev) => {
      const findItem = prev.find((prevItem) => prevItem.value === item.value);
      if (findItem) {
        return prev.filter((filterItem) => filterItem.value !== item.value);
      } else {
        return [...prev, item];
      }
    });
  };

  const activeItem = (activeItem: DataProps) => {
    return selectedItem.some((active) => active.value === activeItem.value);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value;
    const filterData = options.filter((item) =>
      item.value.toUpperCase().includes(searchKey.toUpperCase())
    );
    setData(filterData);
  };

  const handleRemove = (item: DataProps) => {
    const remove = selectedItem.filter(
      (selected) => selected.value !== item.value
    );
    setSelectedItem(remove);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!openDropdown) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setCurrentIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : data.length - 1
        );
        break;
      case "Enter":
        event.preventDefault();
        if (currentIndex >= 0 && currentIndex < data.length) {
          handleSelectedItem(data[currentIndex]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <div
        tabIndex={0}
        className="border border-gray-200 rounded p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black flex gap-2"
        onKeyDown={handleKeyDown}
      >
        {selectedItem.map((item) => (
          <div
            key={item.value}
            className="flex gap-2 bg-gray-200 rounded-full items-center px-2"
          >
            <span className="">{item.label}</span>
            <span onClick={() => handleRemove(item)}>
              <CloseIcon className="w-4 h-4" />
            </span>
          </div>
        ))}

        <div
          className="flex-auto"
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          <span className="text-gray-500 text-sm">Select Category...</span>
        </div>
      </div>

      {openDropdown && (
        <div
          ref={dropdownRef}
          className="w-full shadow mt-2 p-1 border border-gray-200 rounded absolute top-[100%] bg-white"
        >
          <input
            type="search"
            onChange={handleSearch}
            className="w-full p-2 rounded border-b placeholder:font-normal border-gray-200 text-sm outline-none font-semibold"
            name=""
            id=""
            placeholder="Search Category..."
          />

          <div
            ref={listRef}
            className="px-2 pt-2 space-y-1 max-h-[250px] overflow-y-auto"
          >
            {data.map((item, index) => (
              <div
                key={item.value}
                onClick={() => handleSelectedItem(item)}
                className={cn(
                  "text-sm font-semibold p-2 hover:bg-gray-200 cursor-pointer rounded flex justify-between",
                  activeItem(item) ? " text-gray-400" : null,
                  currentIndex === index ? " bg-gray-300" : null
                )}
              >
                {item.label}
                {activeItem(item) && (
                  <CheckIcon className="w-4 h-4 stroke-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
