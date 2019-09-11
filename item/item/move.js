var screenAnimateElemets = {
    '.screen-1' :[
        '.screen-1__heading',
        '.screen-1__heading-1',
        '.screen-1__phone',
        '.screen-1__features-item',
        '.screen-1__features',
    ]
};

function setScreenAnimate(sctreenCls){

    var screen = document.querySelector(sctreenCls);
    var animateElements = screenAnimateElemets[sctreenCls];

    var isSetAnimateClass = false;
    var isSetAnimateDone = false;
    screen.onclick = function(){
        if(isSetAnimateClass === false)
        {
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls + ' '+animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }
        if(isSetAnimateDone === false)
        {
            for(var i=0;i<animateElements.length;i++){
            var element = document.querySelector(animateElements[i]);
            var baseCls = element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
        }
        isSetAnimateDone = true;
        return;
    }
    if(isSetAnimateDone === true){
        for(var i=0;i<animateElements.length;i++){
            var element = document.querySelector(animateElements[i]);
            var baseCls = element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
        }
        isSetAnimateDone = false;
        return;
    }
    }
    
}

setScreenAnimate('.screen-1');