import "../App.css";
import { Menu } from "./data";
import { IoMdStar } from "react-icons/io";

function ListingItems({ title, description, img, price, discount, rating }) {
    return (
        <>
            <div className="lists-items-container">
                <div className="item-img">
                    <img src={img} alt={title} className="img" />
                    <button className="discount">{discount}%</button>
                    <button className="rating">
                        <span className="star">
                            <IoMdStar />
                        </span>
                        <span className="rating-text">{rating.toFixed(2)}</span>
                    </button>
                </div>
                <div className="item-descrition">
                    <h1 className="title">{title}</h1>
                    <p className="description">{description}</p>
                    <p className="price">${price.toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}

function Listing() {
    return (
        <>
            <div className="listing">
                {Menu.map((data, idx) => {
                    return (
                        <ListingItems
                            key={idx}
                            title={data.title}
                            description={data.description}
                            img={data.img}
                            price={data.price}
                            discount={data.discount}
                            rating={data.rating}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Listing;
