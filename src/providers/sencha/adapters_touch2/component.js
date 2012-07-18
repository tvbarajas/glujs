/*
 * Copyright (c) 2012 CoNarrative
 */
Ext.ns('glu.provider.adapters');
glu.regAdapter = glu.provider.regAdapter;

glu.regAdapter('component', {
    //is the property an array to walk?
    isChildArray:function () {
        return false;
    },
//is the property a sub-item to recurse into?
    isChildObject:function () {
        return false;
    },
    processChildPropertyShortcut:function (propName, config) {
        return config;
    }
});


