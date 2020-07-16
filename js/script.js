
function inject(){
    let i = 0;
    const loop = setInterval(()=>{
        if(i<=4){
            chrome.tabs.executeScript({
                file: './js/bot.js'
            });
        }
        else clearInterval(loop)
        i++
    }, 1000)
    let str =   "....................../´¯/)\n"+
                "....................,/¯../\n"+
                ".................../..../\n"+
                "............./´¯/'...'/´¯¯`·¸\n"+
                "........../'/.../..../......./¨¯\\\n"+
                "........('(...´...´.... ¯~/'...')\n"+
                ".........\\.................'...../\n"+
                "..........''...\\.......... _.·´\n"+
                "............\..............(\n"+ 
                "..............\\.............\\...\n"+
                "PAU NO CU DO CUCA "
    console.log(str)
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#submitSnkrsBot")?.addEventListener("click", inject);
})
