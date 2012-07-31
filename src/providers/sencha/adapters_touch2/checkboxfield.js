glu.regAdapter('checkboxfield', {
    extend:'field',
    applyConventions:function (config, viewmodel) {
        Ext.applyIf(config, {
            checked:glu.conventions.expression(config.name),
            //  valid:glu.conventions.expression(config.name + 'IsValid', {optional:true}),
            label:glu.conventions.asLocaleKey(config.name)
        });
        //glu.provider.adapters.Component.prototype.applyConventions.apply(this, arguments);
    },
    beforeCreate:function (config, viewmodel) {
//        config.checked = config.checked || config.value;
    },
    afterCreate:function (control, viewmodel) {
        control.addListener('check', function () {
            control.fireEvent('checkedChanged', control);
        }, control);

        control.addListener('uncheck', function () {
            control.fireEvent('checkedChanged', control);
        }, control);
    },
    checkedBindings:{
        setComponentProperty:function (value, oldValue, options, control) {
            control.setChecked(value)
        },
        eventName:'checkedChanged',
        eventConverter:function (control) {
            return control.getChecked();
        }
    }
});
