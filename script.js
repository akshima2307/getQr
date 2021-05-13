const headerTextarea = document.querySelector('.header_textares');
const headerPara = document.getElementById('header_para');
headerTextarea.addEventListener('input', hidePara);
function hidePara(){
    headerPara.style.display = "none";
}

function setUpTabs(){
    document.querySelectorAll('.header_left_nav-link').forEach(button => {
        button.addEventListener('click', () =>{
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tab_content[data-tab="${tabNumber}"]`);

            // console.log(sideBar);
            // console.log(tabsContainer);
            // console.log(tabNumber);
            // console.log(tabToActivate);
            sideBar.querySelectorAll('.header_left_nav-link').forEach(btn => {
                btn.classList.remove('header_left_nav-link--active');
            });
            tabsContainer.querySelectorAll('.tab_content').forEach(content => {
                content.classList.remove('tab_content--active');
            });
            button.classList.add('header_left_nav-link--active');
            tabToActivate.classList.add('tab_content--active');
        });
    });
}
setUpTabs();

