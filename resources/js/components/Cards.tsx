interface cardsProps {
  children?: React.ReactNode;
  bg?: string;
}

const Cards = ({ children, bg = "bg-gray-100" }: cardsProps) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Cards;
