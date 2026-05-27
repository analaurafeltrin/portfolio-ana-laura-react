import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import './styles.css';

const ProjectPage = () => {
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id='projectsSection'>
      <h1>Projetos</h1>

      <div
        id='projectDivs'
        className={mostrarTudo ? 'show-all' : ''}
        aria-live='polite'
      >
        <div className='projectContainer'>
          <h2>
            To Do List: <i>Kindle</i>
          </h2>
          <p>
            Nesse projeto, desenvolvi um site estilo 'To Do List' focado em
            livros. Nele, o usuário pode adicionar títulos de interesse à sua
            estante virtual, marcar o progresso de leitura, avaliar as obras ou
            removê-las da lista. Para a construção, utilizei as tecnologias HTML
            e CSS e a linguagem JavaScript.
          </p>
          <Button
            buttonType='projects'
            url='https://analaurafeltrin.github.io/projeto-to-do-list-kindle/'
            text='Ver no GitHub'
          />
        </div>

        {(!isMobile || mostrarTudo) && (
          <>
            <div className='projectContainer'>
              <h2>Pokedex</h2>
              <p>
                Nesse projeto, construí uma 'pokedex' através de um site de
                inspiração. Utilizei a PokeAPI para requisitar os dados
                necessários para construir o site. Utilizei as tecnologias HTML,
                CSS e <i>muito</i> Javascript.
              </p>
              <Button
                buttonType='projects'
                url='https://analaurafeltrin.github.io/projeto-pokedex/'
                text='Ver no GitHub'
              />
            </div>

            <div className='projectContainer'>
              <h2>Site de Links</h2>
              <p>
                Nesse projeto, eu tive a oportunidade de desenvolver um site de
                links para minha irmã divulgar seus cupons personalizados em
                sites afiliados. Utilizei as tecnologias HTML, CSS e apenas um
                pouquinho de JavaScript.
              </p>
              <Button
                buttonType='projects'
                url='https://github.com/analaurafeltrin/siteMaria'
                text='Ver no GitHub'
              />
            </div>

            <div className='projectContainer'>
              <h2>Lorem4</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus sunt alias fuga illo laudantium similique,
                consequatur officia neque aliquid commodi vitae, repudiandae
                harum dicta cumque voluptatem ex facilis labore! Modi..
              </p>
              <Button buttonType='projects' url='z' text='Ver no GitHub' />
            </div>
          </>
        )}
      </div>

      {isMobile && !mostrarTudo && (
        <button id='buttonSeeOthers' onClick={() => setMostrarTudo(true)}>
          Ver outros projetos
        </button>
      )}
    </section>
  );
};

export default ProjectPage;
