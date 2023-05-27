import css from './Pages.module.css';

const HomePage = () => {
  return (
    <main>
      <section>
        <div className={css.container}>
          <h1>Phone book</h1>
          <div className={css.textContainer}>
            <p className={css.titleText}>
              This application will help you record your contacts with ease,
              save them and delete them at the right time! Enjoy!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
