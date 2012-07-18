/*
 * Copyright (c) 2012 CoNarrative
 */
glu.regAdapter('label',{
    htmlBindings:{
        setComponentProperty:function (value, oldValue, options, control) {
            control.setHtml(value);
        }
    }
});