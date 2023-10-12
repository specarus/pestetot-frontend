const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-2xl border-l-4 border-primary pl-2 uppercase">
      {title}
    </h1>
  );
};

export default Title;
