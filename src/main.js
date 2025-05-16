
import calculator from './assets/images/icon-calculator.svg';
import karma from './assets/images/icon-karma.svg';
import supervisor from './assets/images/icon-supervisor.svg';
import team from './assets/images/icon-team-builder.svg';
import './styles/global.scss';


document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1 class="header__title">
      <span class="header__title--light">Reliable, efficient delivery</span><br />
      <span class="header__title--bold">Powered by Technology</span>
    </h1>
    <p class="header__description">
      Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
    </p>
  </header>

  <section class="cards">
    <article class="card card--supervisor">
      <h2 class="card__title">Supervisor</h2>
      <p class="card__description">
        Monitors activity to identify project roadblocks
      </p>
      <img class="card__icon" src="${supervisor}" alt="" />
    </article>

    <div class="cards__center">
      <article class="card card--team-builder">
        <h2 class="card__title">Team Builder</h2>
        <p class="card__description">
          Scans our talent network to create the optimal team for your project
        </p>
        <img class="card__icon" src="${team}" alt="" />
      </article>

      <article class="card card--karma">
        <h2 class="card__title">Karma</h2>
        <p class="card__description">
          Regularly evaluates our talent to ensure quality
        </p>
        <img class="card__icon" src="${karma}" alt="" />
      </article>
    </div>

    <article class="card card--calculator">
      <h2 class="card__title">Calculator</h2>
      <p class="card__description">
        Uses data from past projects to provide better delivery estimates
      </p>
      <img class="card__icon" src="${calculator}" alt="" />
    </article>
  </section>
`

setupCounter(document.querySelector('#counter'))
