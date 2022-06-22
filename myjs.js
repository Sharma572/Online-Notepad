// here we selecting textarea from querySelctor
const textArea = document.querySelector("#textarea");
// console.log(textArea);

// here we selecting ceckbox from querySelctor 
const saveData = document.querySelector("#auto-save");
// console.log(saveData);


// Retrived data from localStorage
(function getDataFromStorage(){
    let data = localStorage.getItem('autosave-data');
    textArea.value = data;
})();

saveData.addEventListener('change', ()=>{
let autoSave;
/* when checkbox value is checked than it will keep saving data automatically in every 1 second. otherwise it will not save in local
storage*/
if(saveData.checked){  
    autoSave = setInterval(()=>{
        localStorage.setItem('autosave-data',textArea.value);
    },1000);
}else clearInterval(autoSave);
});

