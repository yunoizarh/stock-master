const Cards = () => {
  const cards = [
    { title: "Total Sales", amount: 300000, bg: "#FEAE96" },
    { title: "Total Revenue", amount: 300000, bg: "#9BBBFC" },
    { title: "Low Stock Items", amount: 200, bg: "#FE979C" },
  ];
  return (
    <>
      <div className="flex gap-4 md:gap-6 bg-gray-300 md:max-w-[40%] p-4 rounded-md my-3">
        <button className=" text-xl ">Today</button>
        <button className=" text-xl ">This Week</button>
        <button className=" text-xl ">This Month</button>
      </div>
      <section className="md:flex gap-2 my-6 max-w-full space-y-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full rounded-2xl p-4 text-lg border-2 shadow-sm"
            // style={{ backgroundColor: card.bg }}
          >
            <div className="flex justify-between">
              <div>
                <p>{card.title}</p>
                <h3>{card.amount}</h3>
              </div>
              <p className="text-green-700 ">12.5%</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Cards;
