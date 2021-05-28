const qrtypeCategory = [...document.querySelectorAll('.qrtype_category')];
const qrtypeBtn = document.querySelector('.qrtype_btn');
const qrtypea = document.querySelector('.qrtype_a');
qrtypeCategory.map(function(a){
    a.addEventListener('click', function(){
        const check = [...document.querySelectorAll('.check')];
        check.map(function(i){i.style.display = 'none';})
        a.childNodes[7].style.display = "block";
        qrtypeBtn.style.backgroundColor = '#00288a';

        const hash = a.hash;
        displayForms(hash);
    })
});
function displayForms(type){
    qrtypea.addEventListener('click',function(){
        if(type === "#website"){
            
        }
    })
};




// DashBoard Tabs.
function setUpTabs(){
    document.querySelectorAll('.dashtabs_btn').forEach(button => {
        button.addEventListener('click', () =>{
            console.log("Hello");
            const sideBar = button.parentElement;
            const dashtabsContainer = sideBar.parentElement;
            const dashtabNumber = button.dataset.forTab;
            const tabToActivate = dashtabsContainer.querySelector(`.dashtabs_content[data-tab="${dashtabNumber}"]`);

        
            sideBar.querySelectorAll('.dashtabs_btn').forEach(btn => {
                btn.classList.remove('dashtabs_btn--active');
            });
            dashtabsContainer.querySelectorAll('.dashtabs_content').forEach(content => {
                content.classList.remove('dashtabs_content--active');
            });
            button.classList.add('dashtabs_btn--active');
            tabToActivate.classList.add('dashtabs_content--active');
        });
    });
}
setUpTabs();
