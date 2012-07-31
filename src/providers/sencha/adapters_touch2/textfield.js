glu.regAdapter('textfield', {
    extend:'field',
    valueBindings:{
//        setComponentProperty : function(value, oldValue, options, control)
//        {
//            control.setValue()
//        },
        eventName:'change',
        eventConverter:function (field, newVal) {
            return field.getValue();
        }
    }
});

