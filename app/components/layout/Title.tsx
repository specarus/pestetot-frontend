const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="desktop:text-2xl laptop:text-xl border-l-4 border-primary pl-2 uppercase">
      {title}
    </h1>
  );
};

export default Title;
