type PillProps = {
  name: string;
};

const Pill = ({ name }: PillProps) => {
  return (
    <span className="bg-pale-blue border border-light-blue text-blue rounded-full px-3 py-1 text-xs font-mono">
      {name}
    </span>
  );
};

export default Pill;
