$(document).ready(function(){
    var weapons;
        weapons = [
        {
            "name": "44_pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 1.2,
            "value": 99,
            "armo": 29,
            "images": $('.image_44pistol')

        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53,
            "armo": 36,
            "images": $('.image_10pistol')
        },
        {
            "name": "assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "armo": 34,
            "images": $('.image_rifle')

        }
    ];



     $('.item-list a').click(function (e) {
       $('.item-stats').show();

            var current_item = $(e.currentTarget).attr('class');
             console.log(current_item);


             for (item in weapons) {
                 if (weapons[item].name == current_item) {
                     console.log(weapons[item]);

                     var container = $(".item-stats");
                     container.find('.damage').html(weapons[item].damage);
                     container.find('.armo').html(weapons[item].armo);
                     container.find('.fire_rate').html(weapons[item].fire_rate);
                     container.find('.range').html(weapons[item].range);
                     container.find('.accuracy').html(weapons[item].accuracy);
                     container.find('.weight').html(weapons[item].weight);
                     container.find('.value').html(weapons[item].value);
                     container.find('.images').html(weapons[item].images);
                 }
             }


         });


});