import React from "react"
import {Newsletter} from '../../types'
import styles from "./newsletterListItem.module.scss"

interface Props {
    item: Newsletter
    userCanSubscribe?: boolean
}

export default async function NewsletterListItem({item, userCanSubscribe}:Props) {


    return (
        <article className={styles.newsletterListItem} data-testid="newsletter-item">
            <div className={styles.newsletterListItemTopContainer}>
                <header>
                    <figure>
                        <img src={item.image} alt={item.title} />
                        {/* <Image
                            src={item.image}
                            width={200}
                            height={200}
                            alt={item.title}
                        /> */}
                    </figure>
                    <h3>{item.title}</h3>
                </header>
                <p>{item.description}</p>
            </div>
            <footer>
                <button 
                    className={`${userCanSubscribe ? styles.inscriptionButton : styles.subscriptionButton}`}
                >
                    {userCanSubscribe ? "S'inscrire" : "S'abonner"}
                </button>
            </footer>
        </article>
    )
}

