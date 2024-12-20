import PropTypes from "prop-types";

/**
 * # defaultProps
 * defaultProps is a React component property that allows you to set default values
 * for the props argument. If the prop property is passed, it will be changed.
 *
 * # PropTypes
 * PropTypes are simply a mechanism that ensures that the passed value is of
 * the correct datatype. This makes sure that we don’t receive an error.
 * */

export function DefaultPropsBasics({ name, age, address }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}

DefaultPropsBasics.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

// Support for defaultProps will be removed from function components in a
// future major release. Use JavaScript default parameters instead.

DefaultPropsBasics.defaultProps = {
  name: "Sandy",
  age: 29,
  address: "Kolkata, 700040",
};
