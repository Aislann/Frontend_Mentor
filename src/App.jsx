import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const lists = document.querySelectorAll('.list ul li');

    const handleClick = (e) => {
      lists.forEach((list) => {
        list.classList.remove('active');
      });

      const targetList = e.currentTarget;

      if (e.target.classList.contains('close')) {
        targetList.classList.remove('active');
      } else {
        targetList.classList.add('active');
      }
    };

    lists.forEach((list) => {
      list.addEventListener('click', handleClick);
    });

    return () => {
      lists.forEach((list) => {
        list.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <body>
      <header>
        <h1>Frontend Mentor</h1>
        <h2>
          Desafios extras feitos para o Frontend Mentor
        </h2>
      </header>
      <div className="list">
        <ul>
          <li>
            <h1>QRCode</h1>
            <img className="close" src="public/close.png" alt="Fechar" />
            <div className="buttons">
              <a href="https://aislann.github.io/QRCode/" target="_blank" rel="noopener noreferrer">
                <img src="public/olho.png" alt="Visualizar" />
                <p>Visualização</p>
              </a>
              <a href="https://github.com/Aislann/QRCode" target="_blank" rel="noopener noreferrer">
                <img src="public/github.png" alt="Código-fonte" />
                <p>Código-fonte</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Card Produto</h1>
            <img className="close" src="public/close.png" alt="Fechar" />
            <div className="buttons">
              <a href="https://aislann.github.io/Card_Produto/" target="_blank" rel="noopener noreferrer">
                <img src="public/olho.png" alt="Visualizar" />
                <p>Visualização</p>
              </a>
              <a href="https://github.com/Aislann/Card_Produto" target="_blank" rel="noopener noreferrer">
                <img src="public/github.png" alt="Código-fonte" />
                <p>Código-fonte</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Resumo Produto</h1>
            <img className="close" src="public/close.png" alt="Fechar" />
            <div className="buttons">
              <a href="https://aislann.github.io/Resumo_Produto/" target="_blank" rel="noopener noreferrer">
                <img src="public/olho.png" alt="Visualizar" />
                <p>Visualização</p>
              </a>
              <a href="https://github.com/Aislann/Resumo_Produto" target="_blank" rel="noopener noreferrer">
                <img src="public/github.png" alt="Código-fonte" />
                <p>Código-fonte</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Faixa 3 colunas</h1>
            <img className="close" src="public/close.png" alt="Fechar" />
            <div className="buttons">
              <a href="https://aislann.github.io/Faixa_3colunas/" target="_blank" rel="noopener noreferrer">
                <img src="public/olho.png" alt="Visualizar" />
                <p>Visualização</p>
              </a>
              <a href="https://github.com/Aislann/Faixa_3colunas" target="_blank" rel="noopener noreferrer">
                <img src="public/github.png" alt="Código-fonte" />
                <p>Código-fonte</p>
              </a>
            </div>
          </li>
          <li>
            <h1>Card multi-column livre</h1>
            <img className="close" src="public/close.png" alt="Fechar" />
            <div className="buttons">
              <a href="https://aislann.github.io/Card_multicolumn_livre/" target="_blank" rel="noopener noreferrer">
                <img src="public/olho.png" alt="Visualizar" />
                <p>Visualização</p>
              </a>
              <a href="https://github.com/Aislann/Card_multicolumn_livre" target="_blank" rel="noopener noreferrer">
                <img src="public/github.png" alt="Código-fonte" />
                <p>Código-fonte</p>
              </a>
            </div>
          </li>
          
        </ul>
      </div>
      <script src="assets/js/script.js"></script>
    </body>
  );
};

export default App;
