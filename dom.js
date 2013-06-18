var manipulateDOM = function() {
    // YOUR CODE HERE
    var body = document.getElementById("body");
    var gameContent = document.createElement("div");
    gameContent.id = "gameContent";
    var gameCanvas = document.createElement("canvas");
    gameCanvas.id = "gameCanvas";
    gameContent.appendChild(gameCanvas);
    body.appendChild(gameContent);
};