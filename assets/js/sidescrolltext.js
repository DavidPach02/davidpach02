const textContainers = document.getElementsByClassName('textscroller');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function until(conditionFunction) {
    const poll = resolve => {
      if(conditionFunction()) resolve();
      else setTimeout(_ => poll(resolve), 400);
    }
  
    return new Promise(poll);
}

async function demo(el){
    el.scrollLeft = 0;
    await sleep(3000);

    el.style.scrollBehavior = "smooth";
    while(el.scrollLeft + el.offsetWidth <= el.scrollWidth - 1){
        el.scrollTo(el.scrollLeft + 1, 0);
        await sleep(20);
    }

    await until(_ => el.scrollLeft + el.offsetWidth >= el.scrollWidth - 1);
    await sleep(3000);
    el.style.scrollBehavior = "auto";
    demo(el);
}

Array.from(textContainers).forEach((el) => {
    self.addEventListener('load', () => {
        /*self.setTimeout(() => {
            self.setInterval(() => {
                const targetScrollWidth = el.scrollWidth;
                if(el.scrollLeft + el.offsetWidth <= targetScrollWidth){
                    el.scrollTo(el.scrollLeft + 1, 0);
                }
                //console.log(el.scrollLeft + el.offsetWidth);
            }, 10);
        }, 3000);*/
        demo(el);
    });
});