// const headerTextarea = document.querySelector('.header_textares');
// const headerPara = document.getElementById('header_para');
// headerTextarea.addEventListener('input', hidePara);
// function hidePara(){
//     headerPara.style.display = "none";
// }

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


// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
