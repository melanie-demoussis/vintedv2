import { Link } from "react-router-dom";

const OfferCard = ({ offerInfos }) => {
  return (
    <Link to={`/offer/${offerInfos._id}`}>
      <article className="offer">
        <h1>{offerInfos.product_name}</h1>
        <p>{offerInfos.product_price}</p>
        <img
          className="article"
          src={offerInfos.product_image.secure_url}
          alt="robe"
        />
      </article>
    </Link>
  );
};
export default OfferCard;
