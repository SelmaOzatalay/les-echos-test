import NewsletterList from "./components/NewsletterList/NewsletterList";

export default async function Home() {

  return (
    <div>
      <div className='container'>
        <header className="app-header">
          <h1>Newsletters</h1>
          <p>Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters. </p>
        </header>
        <NewsletterList/>
      </div>
    </div>
  );
}

