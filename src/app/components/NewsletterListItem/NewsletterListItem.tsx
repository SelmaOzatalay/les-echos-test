import React from "react"
import Image from "next/image"
import {Newsletter} from '../../types'
import NewsletterListItemButton from "../NewsletterListItemButton/NewsletterListItemButton"
import styles from "./newsletterListItem.module.scss"

interface Props {
    item: Newsletter
    userCanSubscribe?: boolean
}

export default function NewsletterListItem({item, userCanSubscribe}:Props) {

    return (
        <article className={styles.newsletterListItem} data-testid="newsletter-item">
            <div className={styles.newsletterListItemTopContainer}>
                <header>
                    <figure>
                        <Image
                            src={item.image}
                            width={200}
                            height={200}
                            alt={item.title}
                        />
                    </figure>
                    <h3>{item.title}</h3>
                </header>
                <p>{item.description}</p>
            </div>
            <footer>
                <NewsletterListItemButton userCanSubscribe={userCanSubscribe} />
            </footer>
        </article>
    )
}

