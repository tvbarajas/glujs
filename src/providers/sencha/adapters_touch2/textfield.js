glu.regAdapter('textfield', {
    extend:'field',
    valueBindings:{
        eventName:'change',
        eventConverter:function (field, newVal) {
            return field.getValue();
        }
    }
});

