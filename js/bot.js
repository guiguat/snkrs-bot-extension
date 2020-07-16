document.getElementById('btn-comprar')?.click();
if(location.href === "https://www.nike.com.br/Carrinho"){ 
    location.assign("https://www.nike.com.br/Checkout");
}
if(location.href === "https://www.nike.com.br/Checkout"){
    document.getElementById("seguir-pagamento")?.addEventListener("click", event => event.preventDefault())
    document.getElementById("seguir-pagamento")?.click();
    document.querySelector(".button.undefined")?.click();
    // document.getElementsByClassName("close")[1]?.click();
    const [arrow] = document.getElementsByClassName("select-cta-arrow")
    arrow?.click()
    document.getElementsByName("ccidradio")[1]?.click()
    document.getElementById("politica-trocas")?.click()
    
    // while(location.href === "https://www.nike.com.br/Checkout"){
    //    setTimeout(()=>{
    //      document.getElementById("confirmar-pagamento")?.click()
    //    }, 1500)
    //}
}



