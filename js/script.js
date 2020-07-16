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
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#submitSnkrsBot")?.addEventListener("click", inject);
})
