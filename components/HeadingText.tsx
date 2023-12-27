type HeadingTextProps = {
  smallTitle?: string;
  bigTitle?: string;
  description?: string;
  className?: string;
};

const HeadingText: React.FC<HeadingTextProps> = ({
  smallTitle,
  bigTitle,
  description,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className ? className : ""}`}>
      {smallTitle && (
        <h5 className="mb-4 text-sm font-medium uppercase tracking-[5px] text-primary">
          {smallTitle}
        </h5>
      )}
      <h2 className="mb-6 max-w-xl text-3xl font-bold md:text-4xl">
        {bigTitle}
      </h2>
      {description && (
        <p className="text-md mb-4 max-w-2xl text-balance">{description}</p>
      )}
    </div>
  );
};

export default HeadingText;
