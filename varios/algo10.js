 
            var item = [{
            "name": "hola mundo",
            "icon": "ti-bolt",
              "id_click": "menu01",
              "id_display": "disp01",
            "submenus":[{
                "name": "hola mundo",
                "icon": "ti-bolt",
                 "url": "#/ui/boxes"
            },{
                "name": "hello world",
                "icon": "ti-cup",
                 "url": "#/ui/boxes"
            }]
        },{
            "name": "allboys",
            "icon": "ti-bolt",
            "id_click": "menu02",
            "id_display": "disp02",
            "submenus":[{
                "name": "hola mundo",
                "icon": "ti-bolt",
                 "url": "#/ui/boxes"
            },{
                "name": "hello world",
                "icon": "ti-cup",
                 "url": "#/ui/boxes"
            }]
        }];

        $scope.menus = item;
        
        $scope.helloFunction = function(event) {
            
            var lala;
            var jade;
            var id_on;
            var id_an;
            console.log($(event.currentTarget).parent().attr('id'));
            console.log($('#rock').parent().attr('id'));

            id_on = $(event.currentTarget).parent().attr('id');
            id_an = $(event.currentTarget).closest().attr('id');

            lala = $('#' + id_on);
            jade = $('#disp02');
            
            if(lala.hasClass('open')){
                lala.removeClass('open');
                jade.css('display', 'none');    
            } else {
                lala.addClass('open');
                jade.css('display', 'block');    
            }  
        };