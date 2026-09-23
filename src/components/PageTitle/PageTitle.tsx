import styles from './PageTitle.module.css';

type PageTitleProps = {
  children: string;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PageTitle;
