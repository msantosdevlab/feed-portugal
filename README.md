## Feed Portugal

<img src="https://github.com/msantosdevlab/feed-portugal/raw/main/screenshot.png" alt="Screenshot do projeto" width="400">


### Objetivo:
O projeto Feed Portugal visa desenvolver uma aplicação web que exibe as últimas notícias de Portugal, provenientes de diversas fontes, utilizando a API pública do GNews. A implementação é realizada utilizando a biblioteca React, com o propósito de aprimorar habilidades em requisições HTTP com React.

### Recursos:
- API: A aplicação faz uso da API do GNews para obter as principais notícias de Portugal.

### Funcionalidades:
- Exibição de Notícias:
A página principal apresenta as últimas notícias de Portugal, organizadas por categorias: 4 mais recentes, desporto, entretenimento e últimas.
Cada categoria possui uma cor específica para facilitar a identificação.
As notícias são exibidas com o nome do jornal, título, imagem e data de publicação.
Cada notícia possui um link para a fonte original da notícia.

- Responsividade:
O layout da aplicação é responsivo, garantindo uma experiência consistente em todos os dispositivos, através do uso de @media queries.

- Modo Escuro e Modo Claro:
A aplicação suporta dois modos de visualização: claro (Light Mode) e escuro (Dark Mode), proporcionando flexibilidade ao usuário.

- Filtragem por Jornais Portugueses:
Implementação de uma função chamada filterJournal para filtrar apenas os jornais com extensão .pt, evitando a exibição de resultados de outros países.

### Tecnologias Utilizadas:
- React: Utilização de conceitos como fetch, useState, useEffect, createContext, useContext, react-switch, react-icons para o desenvolvimento da aplicação.
- API: Integração com a API do GNews para obtenção das notícias de Portugal.
- CSS: Desenvolvimento total do estilo, sem o uso de bibliotecas ou frameworks.