import styles from "./TextTable.module.css";

interface TableContent {
    heading: string;
    text: string;
    id: number;
}
interface TableText {
    title?: string;
    tableContent: TableContent[];
    numOfCols: number;
    colorful: boolean;
}

export default function QuoteSection({ title, tableContent, numOfCols, colorful }: TableText) {

    const tableContentObjects = tableContent.map((content: TableContent) => 
        <div key={content.id} className={(tableContent.length <= 2) ? styles.centerAlign : styles.leftAlign}>
            <p className={`${styles.heading} ${colorful ? styles.colorful : ''}`}>{content.heading}</p>
            <p className={styles.text}>{content.text}</p>
        </div>
    )

    return (
    <section className={styles.tableSection}>
        <h3 className={styles.tableTitle}>
            { title }
        </h3>
        <div className={styles[`tableCol${numOfCols}`]}>
            {
                tableContentObjects
            }
        </div>
    </section>
    )
}