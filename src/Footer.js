const Footer = (props) => {
  const today = new Date();

  return (
    <footer>
      <p>
        Copyright &copy; {today.getFullYear()}
        {props.length} List {props.length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
