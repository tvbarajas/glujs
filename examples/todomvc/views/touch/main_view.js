glu.defView('todo.main', {
    centered:false,
    border:false,
    layout:{
        type:'vbox'
    },
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
            layout:'hbox',
            height:50,
            items:[
                {
                    xtype:'checkboxfield',
                    value:'@>{allVisibleItemsAreCompleted}',
                    disabled:'@{!completeAllIsDisabled}',
                    width:50,
                    height:40,
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
                    width:300,
                    height:40
                }


            ]
        },
        { //list body
            layout:'vbox',
            flex:1,
            items:'@{todoList}'
        }



    ]
});