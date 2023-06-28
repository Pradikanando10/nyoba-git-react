const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>{props.test}</li>
      </ul>
    </div>
  );
};

export default Navbar;
