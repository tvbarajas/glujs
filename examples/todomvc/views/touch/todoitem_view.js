glu.defView('todo.todoitem', {
    xtype:'container',
    layout:'hbox',
    isHovered : '@{focused}',
    height :50,
    hidden : '@{!isVisible}',
    items:[
        {
            xtype : 'checkboxfield',
            value : '@{completed}',
            width : 20
        },
        {
            xtype:'label',
            width:300,  //flex isn't working for some reason...
            disabledCls : 'todo-item-completed',
            disabled : '@{completed}',
            html : {
                html:'@{text}',
                width:300,
                alignment : 'l-l?',
                field : {
                    xtype: 'textfield'
                }
            }
        },
        {
            xtype : 'button',
            width : 20,
            hidden : '@{!removeIsVisible}',
            overCls : '',
            handler : '@{remove}'
        }
    ]
});