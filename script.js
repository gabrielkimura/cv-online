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
                <p>Sou um desenvolvedor atuante na área há mais de 2 anos...</p>
                <h3>Experiências e Conhecimentos</h3>
                <ul>
                    <!-- Lista de conhecimentos -->
                    <li>Desenvolvimento de APIs Restful e Microsserviços...</li>
                    <!-- Outros itens omitidos para brevidade -->
                </ul>`;
            break;
        case 'conteudo2':
            // Conteúdo da seção "Formação Acadêmica e Experiência"
            conteudo.innerHTML = `
                <h2>Formação Acadêmica e Idiomas</h2>
                <ul>
                    <!-- Lista de formações acadêmicas -->
                    <li>Graduação Bacharelado em Engenharia de Software...</li>
                    <!-- Outros itens omitidos para brevidade -->
                </ul>
                <h2>Experiência Profissional</h2>
                <h3>2024 a Atual - Sensedia</h3>
                <p>Software Java Developer</p>
                <!-- Lista de experiências profissionais -->
                <h3>2023 a 2024 - Yank! Solutions</h3>
                <p>Desenvolvedor Java</p>
                <ul>
                    <li>Desenvolvimento de APIs Restful...</li>
                    <!-- Outros itens omitidos para brevidade -->
                </ul>`;
            break;
        case 'conteudo3':
            // Conteúdo da seção "Principais Projetos e Resultados"
            conteudo.innerHTML = `
                <h2>Principais Projetos e Resultados</h2>
                <ul>
                    <!-- Lista de projetos realizados -->
                    <li>Desenvolvi uma API que recebe um arquivo CSV...</li>
                    <!-- Outros itens omitidos para brevidade -->
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
