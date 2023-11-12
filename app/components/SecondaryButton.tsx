interface SecondaryButtonProps {
  children: React.ReactNode;
  onClickFunction: () => void;
  width: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClickFunction,
  width,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`${width} h-full grid place-content-center`}
    >
      <p className="desktop:text-base laptop:text-sm relative group">
        {children}
        <span className="w-0 h-[1px] absolute bottom-[1px] left-0 bg-black group-hover:w-full transition-all duration-200" />
      </p>
    </button>
  );
};
export default SecondaryButton;
