import { Categories, NewArrivals } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <img
            className="hero__image"
            src="/assets/art-of-play.jpg"
            alt="Premium playing cards"
          />
          <h1 className="hero__text mx-2">Premium Playing Cards</h1>
        </section>

        <Categories />
        <NewArrivals />
      </main>
    </div>
  );
};

export { Home };
