RPGJS.Materials = {
    "characters": {
        "1": "2.png",
        "2": "1.png",
        "3": "event1.png"
    },
    "tilesets": {
        "1": "tileset.png"
    },
    "autotiles": {
        "2":"autotile1.png",
        "3":"autotile2.png"
    },
    "bgms": {
        "1": "the_kings_crowning_v1.mp3"
    },
    "animations": {
        "1": "anim.png"
    },
    "windowskins": {
        "1": "window.png"
    }
};

RPGJS.Database = {
    "actors": {
        "1": {
            "graphic": "1"
        }
    },
    "tilesets": {
        "1": {
            "propreties":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[5,0],[5,0],[5],[5],[5],[],[],[],[null,15],[null,15],[null,15],[null,15],[null,15],[],[5],[5],[null,15],[0],[null,15],[5],[5],[],[null,15],[null,15],[null,15],[5],[null,15],[null,15],[null,15],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[],[],[5],[5],[5],[5],[],[],[],[],[null,15],[],[],[null,15],[],[],[],[],[null,15],[],[],[null,15],[],[],[5],[5],[5],[5],[5],[null,15],[],[null,15],[5],[5],[null,15],[null,15],[null,15],[null,15],[],[null,15],[null,15],[null,15],[],[],[],[null,15],[],[],[null,15],[null,15],[],[],[],[],[],[],[null,15],[null,15],[5],[5,0],[5,0],[5,0],[5,0],[5],[5],[5],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,0],[null,0],[null,15],[null,15],[null,15],[null,15],[],[],[],[],[],[],[null,15],[5],[],[],[],[],[],[],[null,15],[null,15],[],[],[],[],[5],[5],[5],[5],[],[],[],[],[5],[5],[5],[5],[5],[5],[null,15],[null,15],[5],[5],[5],[5],[null,15],[null,15],[],[],[],[null,15],[null,15],[],[5],[5],[null,15],[null,15],[null,15],[null,15],[],[],[null,15],[null,15],[],[],[null,15],[null,15],[null,15],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[5],[5],[5],[5],[0],[],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[5,0],[5,0],[5,0],[5,0],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[null,15],[],[],[],[],[],[],[5],[5,0],[],[],[],[],[],[],[null,15],[null,15],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[null,15],[null,15],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
            "graphic":"1"
        }
    },
    "autotiles":{
        "1":{
            "propreties":[[0,0],[0,15]],
            "autotiles":["2","3"],
        }
    },
    "common_events": {
        "1":{
            "commands":[
                "SHOW_TEXT: {'text': 'A common event'}"
            ]
        }
    },
    "animations": {
        "1": {
            "graphic": "1",
            "frequence": "2",
            "pattern_w": "5",
            "pattern_h": "3",
            "frames": [
                [{pattern: 1, x: -96, y: -96, zoom: 50, rotation: 0, opacity: 100}],
                [{pattern: 2, x: -96, y: -96, zoom: 80, rotation: 0, opacity: 150}],
                [{pattern: 3, x: -96, y: -96, zoom: 100, rotation: 0, opacity: 255}],
                [{pattern: 1, x: -96, y: -96, zoom: 100, rotation: 0, opacity: 255}],
                [{pattern: 2, x: -96, y: -96, zoom: 100, rotation: 0, opacity: 255}],
                [{pattern: 3, x: -96, y: -96, zoom: 100, rotation: 0, opacity: 255}],
                [{pattern: 1, x: -96, y: -96, zoom: 100, rotation: 0, opacity: 255}],
                [{pattern: 2, x: -96, y: -96, zoom: 120, rotation: 0, opacity: 200}],
                [{pattern: 3, x: -96, y: -96, zoom: 140, rotation: 0, opacity: 180}],
                [{pattern: 1, x: -96, y: -96, zoom: 160, rotation: 0, opacity: 150}],
                [{pattern: 2, x: -96, y: -96, zoom: 180, rotation: 0, opacity: 120}],
                [{pattern: 3, x: -96, y: -96, zoom: 200, rotation: 0, opacity: 100}]
            ]
        }
    },
    "map_infos": {
        "1": {
            "tileset_id":   "1",
            "autotiles_id": "1"
        }
    }

};

RPGJS.defines({
    canvas: "canvas",
    autoload: false
}).ready(function() {

    RPGJS.Player.init({
        actor: 1,
        start: {x: 12, y: 12, id: 1}
    });

    RPGJS.Scene.map(function() {
        var e = RPGJS.Map.createEvent("EV-1", 6, 8.5);

        e.addPage({
            "trigger": "action_button",
            "type": "fixed",
            "graphic": "2"
        }, [
            "TRANSFER_PLAYER: {'position-type': 'constant', 'appointement': {'x':1,'y': 1, 'id':2}}"
        ]);

        e.display();

        RPGJS.Player.freeze = true;

        var interpreter = Class.New("Interpreter");

        interpreter.assignCommands([
            'SHOW_TEXT: {"text": "Ho Chi Minh - 2020 A.D.\\n\\nSunny day.\\n\\nPeaceful.\\n\\nQuiet."}',

            'SHOW_TEXT: {"text": "Ho Chi Minh - 2020 A.D.\\n\\nSunny day.\\n\\nPeaceful.\\n\\nQuiet."}',

            'SHOW_TEXT: {"text": "Ho Chi Minh - 2020 A.D.\\n\\nSunny day.\\n\\nPeaceful.\\n\\nQuiet."}'
        ]);

        interpreter.execCommands(function() {
            var interpreter = Class.New("Interpreter");

            interpreter.assignCommands([
                "CHOICES: ['Yes', 'No', 'Maybe']",

                "CHOICE_0",
                    "SHOW_TEXT: {'text': 'Yes :)'}",
                "CHOICE_1",
                    "SHOW_TEXT: {'text': 'No :('}",
                "CHOICE_2",
                    "SHOW_TEXT: {'text': 'Maybe :|'}",

                "ENDCHOICES"
            ]);

            interpreter.execCommands(function() {
                RPGJS.Player.freeze = false;
            });
        });



    });
});