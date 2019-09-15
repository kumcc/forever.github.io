var screenAnimateElemets = {
    '.screen-1' :[
        '.screen-1__heading',
        '.screen-1__heading-1',
        '.screen-1__phone',
        '.screen-1__features',
    ],
    '.screen-2' :[
        '.screen-2__heading',
        '.screen-2__subheading',
        '.screen-2__subheading2',
        '.screen-2__phone',
        '.screen-2__subheading-1',
        '.screen-2__subheading-2',
        '.screen-2__phone1',
        '.screen-2__phone2',
        '.screen-2__phone3',
    ],
    '.screen-4' :[
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type',
    ]
};

function setScreenAnimate(screenCls){

    var screen = document.querySelector(screenCls);
    var animateElements = screenAnimateElemets[screenCls];

    var isSetAnimateClass = false;
    var isAnimateDone = false;
    screen.onclick = function(){
        if(isSetAnimateClass === false)
        {
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }
        if(isAnimateDone === false)
        {
            for(var i=0;i<animateElements.length;i++){
            var element = document.querySelector(animateElements[i]);
            var baseCls = element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
        }
        isAnimateDone = true;
        return;
    }
    if(isAnimateDone === true){
        for(var i=0;i<animateElements.length;i++){
            var element = document.querySelector(animateElements[i]);
            var baseCls = element.getAttribute('class');
            element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
        }
        isAnimateDone = false;
        return;
    }
    }
    
}

setScreenAnimate('.screen-1');
setScreenAnimate('.screen-2');
setScreenAnimate('.screen-4');