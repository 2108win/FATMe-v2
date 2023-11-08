type HeadingTextProps = {
  smallTitle?: string;
  bigTitle: string;
  description: string;
};

const HeadingText: React.FC<HeadingTextProps> = ({ smallTitle, bigTitle, description }) => {
  return (
    <div className="flex flex-col">
      {smallTitle && (
        <h5 className="text-primary text-sm font-normal uppercase mb-4">{smallTitle}</h5>
      )}
      <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">{bigTitle}</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default HeadingText;
