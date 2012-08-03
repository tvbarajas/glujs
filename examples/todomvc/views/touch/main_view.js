glu.defView('todo.main', {
    scrollable:true,
    cls:'x-content',
    items:[
        {
            docked:'top',
            xtype:'titlebar',
            items:[
                {
                    xtype:'label',
                    html:'~~todo~~'
                }
            ]
        },
        {
            layout:{
                type:'vbox',
                align:'stretch'
            },
            items:[
                {  //header
                    layout:'hbox',
                    //height:25,
                    items:[
                        {
                            xtype:'checkboxfield',
                            value:'@>{allVisibleItemsAreCompleted}',
                            disabled:'@{!completeAllIsDisabled}',
                            width:20,
                            //handler : '@{batchComplete}'
                            listeners:{
                                change:'@{batchComplete}'
                            }
                        },
                        {
                            xtype:'textfield',
                            value:'@{newItemText}',
                            cls:'todo-newItemText',
                            emptyText:'~~newItemText~~',
                            enterKeyHandler:'@{addNewItem}',
                            width:300
                        }
                    ]
                },
                {
                    html:'boo'
                },
                {
                    layout:'vbox',
                    items:'@{todoList}',
                    height:200
                }

            ]

        }

    ]
});