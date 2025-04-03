import React,{Fragment} from 'react';
import {NEWSLETTER_ITEMS} from '@/app/mocks/newsletters';
import {Newsletter} from '../../types';
import NewsletterListItem from "../NewsletterListItem/NewsletterListItem";
import {USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION} from '../../mocks/user'


import styles from "./newsletterList.module.scss"

export default async function NewsletterList() {

    const sites = await getSite();
    const newslettersList = await getNewsletters();

    return (
        <div className={styles.newsletterList}>
            {sites.map((site)=>{
                return <Fragment key={site.toString()}>
                <h2>{site}</h2>
                <div className={styles.newsletterListGrid}>
                    {newslettersList.filter((newsletter: Newsletter)=>newsletter.site === site).map((item)=>{
                        return <NewsletterListItem item={item} key={item.id} userCanSubscribe={item.userCanSubscribe}/>
                    })}
                </div>
                </Fragment>
            })}
        </div>
    )
}

async function getSite() {
    let allSites:Array<string> = []
    NEWSLETTER_ITEMS.forEach((item: Newsletter)=>{
        if (!allSites.includes(item.site)) {
            allSites.push(item.site)
        }
    })
  return allSites;
}

async function getNewsletters() {
    const userSubscription = USER_WITH_ONE_SUBSCRIPTION;

    let subscriptionsArray: Array<Newsletter> = []

    NEWSLETTER_ITEMS.forEach((item: Newsletter)=>{
        if (userSubscription.subscriptions.includes(item.subscriptions[0]) || item.subscriptions.length === 0) {
            subscriptionsArray.push({...item, userCanSubscribe: true})
        } else {
            subscriptionsArray.push({...item, userCanSubscribe: false})
        }
    })
    
  return subscriptionsArray;
}


