import "../standerd.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./home.css";

function BestSeller({ handleAdd, addWishlist, products }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 3, dots: true },
      },
      {
        breakpoint: 920,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const bestSellerItems = products.filter((item) => item.bestseller);

  if (!bestSellerItems.length) {
    return <h2>No Items</h2>;
  }

  return (
    <div className="best-seller" id="bestseller">
      <h2>BEST SELLER</h2>
      <Slider {...settings}>
        {bestSellerItems.map((item) => (
          <div key={item._id} className="item">
            <div className="shine">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="discription">
              <div className="type">{item.category}</div>
              <div>
                <i
                  className={`fa-solid fa-heart ${item.inWishlist ? "on" : ""}`}
                  onClick={() => addWishlist(item)}
                ></i>
                <i
                  className={`fa-solid fa-cart-shopping ${
                    item.inCart ? "on" : ""
                  }`}
                  onClick={() => handleAdd(item)}
                ></i>
              </div>
            </div>
            <div className="price">$ {item.price}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestSeller;
