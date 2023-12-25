import Title from "./Title";
import menu from "./data";
const App = () => {
  console.log(menu[0]);

  return (
    <section>
      <Title />
      <main>
        <div>
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Shakes</button>
        </div>
        <ul>
          {menu.map((m) => {
            const { id, img, price, title, desc, category } = m;
            return (
              <li key={id}>
                <img src={img} alt={title} />
                <div>
                  <h5>{title}</h5> <span>{price}</span>{" "}
                </div>
                <p>{desc}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
export default App;
