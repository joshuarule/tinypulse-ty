/* Portions of Code Borrowed From: http://jsfiddle.net/7C76W/ */

(function() {

	var gridLocation = '/css/grid.css';

    var CMD 	  = 8,
    	modifiers = 0,
        gKey 	  = 71;

    function modifierCode(event) {
        switch (event.keyCode) {
        case 91:
        case 93:
            return CMD;
        default:
            return 0;
        }
    }

    document.addEventListener('keydown', function(event) {
    	// Grab Code Value
        var modifier = modifierCode(event);

        // Check Key Value
        if (modifier !== 0) {
            modifiers = modifiers | modifier; // add to the bitmask "stack"
        } else {
            if (modifiers & CMD && (event.keyCode? event.keyCode : event.charCode) == gKey) {
            	toggleGrid();
            	event.preventDefault();
            	event.stopPropagation();
            }
        }
    });

    document.addEventListener('keyup', function(event) {
        modifiers = modifiers & ~modifierCode(event); // remove from the stack
    });
    
    function toggleGrid(){
	    if(document.body.classList.contains("grid-on")){
		    document.body.classList.remove("grid-on");
		    document.body.classList.add("grid-off");
	    }else{
		    document.body.classList.remove("grid-off");
		    document.body.classList.add("grid-on");				    
	    }
    }
    document.writeln("<link href='" + gridLocation + "' rel='stylesheet' />");
}());