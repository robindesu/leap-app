import styles from "./header.module.css";

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return <header className={styles.header}>{text}</header>;
}

export default Header;
