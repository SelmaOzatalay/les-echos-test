import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { Newsletter } from '../src/app/types'; // Assurez-vous du bon chemin d'import
import { NEWSLETTER_ITEMS } from '@/app/mocks/newsletters';
import NewsletterList from '@/app/components/NewsletterList/NewsletterList';
import { USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION } from '@/app/mocks/user';

type NewsletterPageProps = {
  newsletters: Newsletter[];
  sites: string[];
};

const NewsletterPage: NextPage<NewsletterPageProps> = ({ newsletters, sites }) => {
  return <NewsletterList newsletters={newsletters} sites={sites} />;
};

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/newsletters');
  const newsletters: Newsletter[] = await res.json();
  const userSubscription = USER_WITH_ONE_SUBSCRIPTION;

  let subscriptionsArray: Array<Newsletter> = []

  newsletters.forEach((item: Newsletter)=>{
    subscriptionsArray.push({...item, userCanSubscribe: userSubscription.subscriptions.includes(item.subscriptions[0]) || item.subscriptions.length === 0})
  })

  const sites = await getSite();

  return {
    props: {
      newsletters: subscriptionsArray || [],
      sites: sites || [],
    },
  };
};

async function getSite(): Promise<string[]> {
  let allSites: string[] = [];
  NEWSLETTER_ITEMS.forEach((item: Newsletter) => {
    if (!allSites.includes(item.site)) {
      allSites.push(item.site);
    }
  });

  return allSites;
}

export default NewsletterPage;
