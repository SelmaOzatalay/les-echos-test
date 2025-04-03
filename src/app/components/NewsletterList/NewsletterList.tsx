import React from 'react';
import { Newsletter } from '../../types';
import NewsletterListItem from '../NewsletterListItem/NewsletterListItem';
import styles from './newsletterList.module.scss';

type NewsletterListProps = {
  newsletters: Newsletter[];
  sites: string[];
};

const NewsletterList: React.FC<NewsletterListProps> = ({ newsletters, sites }) => {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Newsletters</h1>
        <p>Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters. </p>
      </header>
      <div className={styles.newsletterList}>
        {sites.length > 0 ? (
          sites.map((site) => (
            <React.Fragment key={site}>
              <h2>{site}</h2>
              <div className={styles.newsletterListGrid}>
                {newsletters
                  .filter((newsletter) => newsletter.site === site)
                  .map((item) => (
                    <NewsletterListItem item={item} key={item.id} userCanSubscribe={item.userCanSubscribe} />
                  ))}
              </div>
            </React.Fragment>
          ))
        ) : (
          <p>Aucun site trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default NewsletterList;
