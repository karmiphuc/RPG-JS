RPGJS.Scene.New({
	name: "Scene_Window",
	_onEnterPress: null,
	_onEnterPressChoice: null,
	ready: function(stage) {
		this.stage = stage;
	},
	
	onEnterPress: function(callback) {
		this._onEnterPress = callback;
	},
	
	onEnterPressChoice: function(callback) {
		this._onEnterPressChoice = callback;
	},
	
	box: function() {
	
		var self = this;
		this.window = RPGJS.Window.new(this, 500, 200, "window");
		this.window.position("bottom");
		this.window.open(this.stage);
		
		RPGJS.Input.reset();
		
		RPGJS.Input.press([Input.Enter, Input.Space], function() {
			if (self._onEnterPress) self._onEnterPress.call(this);
		});
	
	},
	
	
	choices: function(array) {
	
		var el, text, array_el = [],
			_canvas = this.getCanvas(),
			self = this;
	
		function determineSizeBox() {
			var max_width = 0, width;
			for (var i=0 ; i < array.length ; i++) {
				 width = _canvas.measureText(array[i], "18px").width;
				 if (width > max_width) {
					max_width = width;
				 }
			}
			return max_width;
		}
		
		var width = determineSizeBox() + 50,
			height = array.length * 35 + 25;
			
		var box = RPGJS.Window.new(this, width, height, "window");
			
		box.position("top");
		
		for (var i=0 ; i < array.length ; i++) {
			el = this.createElement(35, width);
			el.y = i * 35;
			el.attr('index', i);
			text = RPGJS.Text.new(this, array[i]);
			text.style({
				size: "18px",
				color: "white"
			}).draw(el, 0, 10);
			array_el.push(el);
			box.getContent().append(el);
		}
	
		var cursor = this.createElement();
		cursor.fillStyle = "#7778AA";
		cursor.fillRect(-10, -10, width-30, 30);
		cursor.opacity = .5;

		box.cursor.init(cursor, array_el);
		
		box.cursor.select(function(el) {
			self._onEnterPressChoice(el.attr('index'));
		});

		box.open(this.stage);
		this.stage.append(cursor);
		
		box.cursor.setIndex(0);
		
		box.cursor.enable(true);
	},
	
	text: function(_text) {
		var content = this.window.getContent();
		content.empty();
		var text = RPGJS.Text.new(this, _text);
			text.style({
				size: "18px",
				lineWidth: 300,
				color: "white"
			}).draw(content, 20, 20, {
				line: {
					frames: 20,
					onFinish: function() {
						
					}
				}
			});
	},
	exit: function() {
		RPGJS.Scene.get("Scene_Map").keysAssign();
	}
});