import { Link } from "react-router-dom";
import accessoriesCategoryImg from "../../assets/accessories-category-square.jpg";
import heroImg from "../../assets/art-of-play.jpg";
import cardistryTrainersCategoryImg from "../../assets/cardistry-trainers.jpg";
import cardsCategoryImg from "../../assets/category-cards-square.jpg";
import magicTricksCategoryImg from "../../assets/magic-trick-category-square.webp";
import summerBlueNocsImg from "../../assets/summer-nocs-blue.jpg";
import summerOrangeNocsImg from "../../assets/summer-nocs-orange.jpg";
import uncutSheetsCategoryImg from "../../assets/uncut-sheet-180.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <main>
        <section className="hero">
          <img
            className="hero__image"
            src={heroImg}
            alt="Premium playing cards"
          />
          <h1 className="hero__text mx-2">Premium Playing Cards</h1>
        </section>

        <section className="my-8 section--categories">
          <div className="container">
            <Link to="/products">
              <div className="category">
                <img
                  className="category__image"
                  src={cardsCategoryImg}
                  alt="Cards"
                />
                <p className="category__text">Cards</p>
              </div>
            </Link>
            <Link to="/products">
              <div className="category">
                <img
                  className="category__image"
                  src={uncutSheetsCategoryImg}
                  alt="Uncut Sheets"
                />
                <p className="category__text">Uncut Sheets</p>
              </div>
            </Link>
            <Link to="/products">
              <div className="category">
                <img
                  className="category__image"
                  src={cardistryTrainersCategoryImg}
                  alt="Cardistry Trainers"
                />
                <p className="category__text">Cardistry Trainers</p>
              </div>
            </Link>
            <Link to="/products">
              <div className="category">
                <img
                  className="category__image"
                  src={magicTricksCategoryImg}
                  alt="Magic Tricks"
                />
                <p className="category__text">Magic Tricks</p>
              </div>
            </Link>
            <Link to="/products">
              <div className="category">
                <img
                  className="category__image"
                  src={accessoriesCategoryImg}
                  alt="Accessories"
                />
                <p className="category__text">Accessories</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section--new-arrivals my-8">
          <div className="container">
            <div className="card card--horizontal p-4">
              <img
                className="card__image"
                src={summerBlueNocsImg}
                alt="first playing cards"
              />
              <div className="card__content">
                <p>NEW ARRIVAL</p>
                <h3 className="h3 mt-auto">Summer NOCs blue</h3>
                <p className="text-base m-0">
                  Printed to perfection. Bicycle Premium Stock with THIN CRUSH
                  Finish.
                </p>
              </div>
            </div>

            <div className="card card--horizontal p-4">
              <img
                className="card__image"
                src={summerOrangeNocsImg}
                alt="first playing cards"
              />
              <div className="card__content">
                <p>NEW ARRIVAL</p>
                <h3 className="h3 mt-auto">Summer NOCs orange</h3>
                <p className="text-base m-0">
                  The NOC's have proven to be a top choice for card collectors,
                  and card enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export { Home };
