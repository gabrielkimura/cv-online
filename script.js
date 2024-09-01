function trocarConteudo(section) {
    // Obtém o elemento da área de conteúdo
    const conteudo = document.getElementById('conteudo');

    // Verifica qual seção deve ser exibida com base no parâmetro 'section'
    switch (section) {
        case 'home':
            // Conteúdo da página inicial
            conteudo.innerHTML = '<p>Bem-vindo à minha página! Clique nos links acima para saber mais.</p>';
            break;
        case 'conteudo1':
            // Conteúdo da seção "Sobre Mim"
            conteudo.innerHTML = `
            <h2>Sobre Mim</h2>
            <p>Sou um desenvolvedor atuante na área há mais de 2 anos. Estudo programação faz mais de 5 anos e durante minhas experiências e estudos foquei no desenvolvimento Java para backend e Angular para frontend. Sou um desenvolvedor focado em resultados, clean code e aplicação de design patterns para garantir entregas de qualidade e com foco no desenvolvimento contínuo dos projetos.</p>
            <h3>Experiências e Conhecimentos</h3>
            <ul>
                <li>Desenvolvimento de APIs Restful e Microsserviços utilizando Java, Spring Framework, JPA e Hibernate, integrado com bancos de dados relacionais e não relacionais.</li>
                <li>Desenvolvimento de projetos Front End utilizando HTML, CSS, Angular, Javascript e Typescript, focado na responsividade, consumo de APIs e interação do usuário.</li>
                <li>Aplicação rigorosa de conceitos de clean code e adoção de design patterns como SOLID, Singleton e Adapter.</li>
                <li>Habilidade de adaptar-se rapidamente a novas tecnologias e ambientes de desenvolvimento, aprendendo e aplicando novos conceitos com velocidade para enfrentar desafios complexos.</li>
                <li>Reconhecido pela capacidade de comunicar-se efetivamente e trabalhar proativamente em equipes multidisciplinares, promovendo um ambiente de trabalho positivo e produtivo.</li>
                <li>Versionamento de projetos utilizando GIT.</li>
                <li>Criação de containers personalizados utilizando Docker.</li>
                <li>Integração de sistemas utilizando o Apache Camel.</li>
            </ul>`;
        break;
        case 'conteudo2':
            // Conteúdo da seção "Formação Acadêmica e Experiência"
            conteudo.innerHTML = `
                <h2>Formação Acadêmica e Idiomas</h2>
                <ul>
                    <li>Graduação Bacharelado em Engenharia de Software - Centro Universitário Internacional, UNINTER, previsão de conclusão em dezembro de 2026.</li>
                    <li>Graduação Bacharelado em Ciências da Computação - UNISAGRADO, 2024.</li>
                    <li>Técnico em Informática - ETEC Rodrigues de Abreu, 2020.</li>
                    <li>Inglês Intermediário.</li>
                </ul>
                <h2>Experiência Profissional</h2>
                <h3>2024 a Atual - Sensedia</h3>
                <p>Software Java Developer</p>
                
                <h3>2023 a 2024 - Yank! Solutions</h3>
                <p>Desenvolvedor Java</p>
                <ul>
                    <li>Desenvolvimento de APIs Restful e Microsserviços utilizando Java, Spring Framework e JPA. Aplicando conceitos de clean code e design patterns com criação da documentação com Swagger.</li>
                    <li>Desenvolvimento de projetos RPA utilizando Java, SpringBoot, Selenium, Sikulli, Robot e UiAutomation.</li>
                    <li>Acompanhamento de projetos e consultas via banco de dados SQLServer e Oracle.</li>
                    <li>Vivência com metodologia ágil Scrum.</li>
                    <li>Aplicação e sugestões de melhorias nos projetos já existentes.</li>
                    <li>Análise de requisitos e orçamento de horas para novos projetos.</li>
                </ul>

                <h3>2022 - 2023 - Yank! Solutions</h3>
                <p>Estágio em Desenvolvimento</p>
                <ul>
                    <li>Aplicação de melhorias em projetos já existentes.</li>
                    <li>Acompanhamento de execução dos RPA's e realizando possíveis correções.</li>
                </ul>

                <h3>2021 - 2022 - Paschoalotto Serviços Financeiros</h3>
                <p>Operador de Telemarketing</p>
                <ul>
                    <li>Atendimento e suporte ao cliente ajudando o mesmo a encontrar a melhor solução financeira.</li>
                </ul>
                
                <h2>Cursos Complementares</h2>
                <ul>
                    <li>Desenvolvimento Java com Cloud AWS - DIO.</li>
                    <li>Santander Bootcamp 2023 Fullstack Java+Angular - DIO.</li>
                    <li>Desenvolvimento Android - Udemy.</li>
                </ul>

                <h2>Certificações</h2>
                <ul>
                    <li>Criação e Desenvolvimento de Aplicativos Android.</li>
                    <li>Bootcamp para criação e desenvolvimento de APIs Restful utilizando Java, Spring Framework, JPA, conceitos de Design Patterns como SOLID, Singleton e Adapter. E criação de desenvolvimento de páginas Web utilizando HTML, CSS, Typescript e Angular.</li>
                    <li>Criação de projetos utilizando Java, Spring Boot, conceitos de Design Patterns como BFF e DDD. Fundamentos de Cloud Computing com AWS e suas funções.</li>
                </ul>`;
            break;
        case 'conteudo3':
            // Conteúdo da seção "Principais Projetos e Resultados"
            conteudo.innerHTML = `
                <h2>Principais Projetos e Resultados</h2>
                <ul>
                    <li>Desenvolvi uma API que recebe um arquivo CSV e, executando em conjunto com uma automação, o RPA realiza a leitura da planilha, coleta informações em sites definidos pelo cliente, realiza o preenchimento da planilha inicialmente enviada, e a API retorna o arquivo preenchido, otimizando o tempo de coleta dessas informações e a entrega de dados.</li>
                    <li>Implementei projetos de automação que transformaram processos repetitivos anteriormente realizados manualmente, resultando em uma significativa aceleração da produção, aumento de performance e redução de custos para as empresas.</li>
                    <li>Desenvolvi uma solução de automação para otimizar processos de cobrança, implementando o envio programado de e-mails aos clientes da empresa, melhorando a eficiência da comunicação financeira.</li>
                    <li>Participei da criação da automação do processo de emissão de certificações sanitárias, reduzindo multas e aumentando a eficiência operacional em um frigorífico.</li>
                </ul>
                <p>Veja mais dos meus projetos no meu <a href="https://github.com/gabrielkimura?tab=repositories" target="_blank">GitHub</a>.</p>`;
            break;
        case 'conteudo4':
            // Conteúdo da seção "Contato" com formulário
            conteudo.innerHTML = `
                <h2>Contato</h2>
                <form>
                    <!-- Campo para nome -->
                    <label for="name">Nome:</label><br>
                    <input type="text" id="name" name="name" required><br><br>
                    
                    <!-- Campo para e-mail -->
                    <label for="email">E-mail:</label><br>
                    <input type="email" id="email" name="email" required><br><br>
                    
                    <!-- Campo para mensagem -->
                    <label for="message">Mensagem:</label><br>
                    <textarea id="message" name="message" rows="4" required></textarea><br><br>
                    
                    <!-- Botão de enviar formulário -->
                    <button type="submit">Enviar</button>
                </form>
                
                <!-- Informações de contato adicionais -->
                <h3>Informações de Contato</h3>
                <p>Telefone: (14) 9.9905-8065</p>
                <p>E-mail: <a href="mailto:gabrielkimura7@gmail.com">gabrielkimura7@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/gabriel-massao-kimura/" target="_blank">Gabriel Massao Kimura</a></p>`;
            break;
        default:
            // Conteúdo padrão (caso nenhuma seção válida seja selecionada)
            conteudo.innerHTML = '<p>Conteúdo inicial aqui</p>';
    }
}
