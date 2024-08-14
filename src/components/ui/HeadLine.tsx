type TProps = {
  title: string;
  description?: string;
};

const HeadLine = ({title , description}:TProps) => {
  return <div className="flex flex-col gap-1">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-gray-500 text-sm font-semibold">{description}</p>
  </div>
};

export default HeadLine;
