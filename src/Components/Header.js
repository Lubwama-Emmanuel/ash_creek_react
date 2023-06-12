import styles from "./Header.module.css"


const data = [
    {
        id: 1,
        item: "Home",
        link: "index.html"
    },
    {
        id: 2,
        item: "Investments",
        link: "shop.html"
    },
    {
        id: 3,
        item: "Who we are",
        link: "blog.html"
    },
    {
        id: 4,
        item: "Contact Us",
        link: "contact.html"
    },
]


const List = ({item, link}) => {
    return <li className={styles.listItem}> <a href={link} className={styles.listLink}>{item}</a></li>
}

const Header = () => {
    return (
    <section className={styles.header}>
      <div>
          <ul className={styles.navbar}>
            {
                data.map(el => <List item={el.item} link={el.link}/>)
            }
          </ul>
      </div>
  </section>)
}

export default Header