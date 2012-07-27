glu.regAdapter('field', {
    extend:'component',
    applyConventions:function (config, viewmodel) {
        Ext.applyIf(config, {
            value:glu.conventions.expression(config.name),
          //  valid:glu.conventions.expression(config.name + 'IsValid', {optional:true}),
            label:glu.conventions.asLocaleKey(config.name)
        });
        glu.provider.adapters.Component.prototype.applyConventions.apply(this, arguments);
    }
});