import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.headerLogo}
        src="https://cdn-icons-png.flaticon.com/512/6988/6988878.png"
        alt="img"
      />
    </header>
  );
};
export default Header;
