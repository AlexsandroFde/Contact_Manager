
# Contact Manager

**Contact Manager** é uma aplicação web simples que permite o gerenciamento de contatos através de uma interface intuitiva. Os usuários podem adicionar, editar e excluir contatos, com os dados armazenados no navegador via `localStorage` para persistência.

## Objetivo

O principal objetivo do projeto é proporcionar uma maneira prática de gerenciar uma lista de contatos. Ele foi desenvolvido para praticar e demonstrar o uso de padrões de projeto como **Observer**, além de boas práticas de manipulação de DOM e armazenamento de dados no navegador.

## Funcionalidades

- **Adicionar Contato**: Permite inserir um novo contato com nome e número de telefone.
- **Editar Contato**: Contatos existentes podem ser editados ao clicar neles, abrindo um modal de edição.
- **Excluir Contato**: Contatos podem ser removidos da lista com um clique.
- **Persistência Local**: Os dados são armazenados no `localStorage`, garantindo que os contatos persistam entre sessões.

## Como Usar

1. **Adicionar Contato**:
   - Preencha os campos de nome e número de telefone.
   - Clique no botão "Adicionar Contato" para salvar o novo contato.
   
2. **Editar Contato**:
   - Clique no contato desejado na lista para abrir o modal de edição.
   - Atualize as informações e clique em "Salvar" para aplicar as mudanças.

3. **Excluir Contato**:
   - Clique no ícone de lixeira ao lado do contato que deseja remover.

Os contatos serão exibidos na lista e todas as ações (inclusão, edição e exclusão) são automaticamente salvas no `localStorage`.

## Implementação

O projeto utiliza uma arquitetura MVC modular com classes e eventos customizados para tornar o código mais limpo e desacoplado. O padrão de projeto **Observer** é usado para atualizar a interface da lista de contatos sempre que uma alteração ocorre nos dados.


### Tecnologias Utilizadas

- **HTML5**: Para estruturação da página.
- **CSS3**: Para estilização da interface.
- **JavaScript**: Para manipulação da lógica de negócios e eventos.
- **LocalStorage**: Para persistência de dados no navegador.

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.
