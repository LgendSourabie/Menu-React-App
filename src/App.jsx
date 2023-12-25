import { useState } from "react";
import Title from "./Title";
import menu from "./data";
const App = () => {
  const [categoryListe, setCategoryListe] = useState(menu);

  const filterMenu = (cat) => {
    const newMenu = menu.filter((m) => m.category === cat);
    setCategoryListe(newMenu);
  };

  return (
    <section className="menu">
      <Title />
      <main>
        <div className="btn-container">
          <button className="btn" onClick={() => setCategoryListe(menu)}>
            All
          </button>
          <button className="btn" onClick={() => filterMenu("breakfast")}>
            Breakfast
          </button>
          <button className="btn" onClick={() => filterMenu("lunch")}>
            Lunch
          </button>
          <button className="btn" onClick={() => filterMenu("shakes")}>
            Shakes
          </button>
        </div>
        <ul className="section-center">
          {categoryListe.map((m) => {
            const { id, img, price, title, desc, category } = m;
            return (
              <li key={id} className="menu-item">
                <img className="img" src={img} alt={title} />
                <div className="item-info">
                  <header>
                    <h5>{title}</h5>{" "}
                    <span className="item-price">$ {price}</span>{" "}
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
export default App;
