import {
  DiAngularSimple,
  DiDocker,
  DiHeroku,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiStreamline,
  DiPostgresql,
  DiMongodb,
} from 'react-icons/di';
import Main from '../../components/main/Main';

function Home() {
  return (
    <Main>
      <div className="container">
        <h1>Aprenda as melhores Tecnologias </h1>
      </div>
      <div className="divTec">
        <DiAngularSimple />
        <DiDocker />
        <DiHeroku />
        <DiHtml5 />
        <DiJavascript1 />
        <DiNodejsSmall />
        <DiReact />
        <DiSass />
        <DiStreamline />
        <DiPostgresql />
        <DiMongodb />
      </div>
      <div className="container">
        <h1 className="link">Matricule-se</h1>
      </div>
    </Main>
  );
}

export default Home;
