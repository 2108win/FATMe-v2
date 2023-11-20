type HeadingTextProps = {
  smallTitle?: string;
  bigTitle: string;
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
        <h5 className="text-primary text-sm font-medium uppercase mb-4 tracking-[5px]">
          {smallTitle}
        </h5>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-xl">{bigTitle}</h2>
      {description && <p className="mb-4 text-md max-w-2xl">{description}</p>}
    </div>
  );
};

export default HeadingText;
