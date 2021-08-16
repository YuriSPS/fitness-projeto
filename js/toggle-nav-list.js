export function initToggleNavList() {
    // selecionando o menu toggle e atribuindo a uma variavel
    const menuToggle = document.querySelector('.menu-toggle');
    // selecionando o botao de fecharNav e o atribuiundo a uma variavel
    const fecharNavBtn = document.querySelector('.btn-fecharNav');

    // função de callback que após ser clickado irá adicionar uma classe .ativo a classe .nav-list
    function handleClickNavList(event) {
        const navList = document.querySelector('.nav-list');
        navList.classList.add('ativo');
    };

    function handleClickFecharNavList(event) {
        const navList = document.querySelector('.nav-list');
        navList.classList.remove('ativo');
    }

    menuToggle.addEventListener('click', handleClickNavList);
    fecharNavBtn.addEventListener('click', handleClickFecharNavList);
}