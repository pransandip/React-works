import PropTypes from "prop-types";

export default function Card({ title = "no title", children }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
