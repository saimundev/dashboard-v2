type TableHeaderProps = {
  name?: string;
};

const TableHeader = ({ name }: TableHeaderProps) => {
  return (
    <div className="font-semibold text-sm uppercase text-black">{name}</div>
  );
};

export default TableHeader;
