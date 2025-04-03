import React from "react"
import styles from "./newsletterListItemButton.module.scss"

interface Props {
    userCanSubscribe?: boolean
}

export default function NewsletterListItemButton({userCanSubscribe}:Props) {

    return (
        <button 
            className={`${styles.newsletterListItemButton} ${userCanSubscribe ? styles.inscriptionButton : styles.subscriptionButton}`}
        >
            {userCanSubscribe ? "S'inscrire" : "S'abonner"}
        </button>
    )
}

