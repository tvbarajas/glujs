describe('UI Control: textfield', function () {
    Given('a view with container that contains items (more containers)', function () {
        var view, vm, itemId;
        itemId = Ext.id();
        Meaning(function () {
            testNs = {
                locale:{
                    message:'Enter your message'
                },
                models:{

                },
                viewmodels:{
                    tester:{
                        message:'Hello'
                    }
                },
                views:{
                    tester:{
                        xtype:'container',
                        items:[
                            {
                                xtype:'container'

                            },
                            {   id:itemId,
                                xtype:'textfield',
                                name:'message'
                            }
                        ]
                    }
                }
            };

            vm = glu.model({
                ns:'testNs',
                mtype:'tester'
            });
            vm.init();
            view = glu.view(vm,'testNs','tester');

        });
        ShouldHave('set the textfield label to the localized value.', function () {
            expect(Ext.getCmp(itemId).getLabel()).toEqual('Enter your message')
        });
    });
});