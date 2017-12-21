function getCoords(input){
    input = input.split(",");
    coords = {}
    coords.x = 0;
    coords.y = 0;
    coords.z = 0;
    input.forEach(function (x) {
       switch(x) {
           case "n":
               coords.x--;
               coords.y--;
               break;
           case "ne":
               coords.y--;
               coords.z++;
               break;
           case "se":
               coords.x++;
               coords.z++;
               break;
           case "s":
               coords.x++;
               coords.y++;
               break;
           case "sw":
               coords.z--;
               coords.y++;
               break;
           case "nw":
               coords.x--;
               coords.z--;
               break;
           default:
               console.log("Wrong direction given: " + x);
       }
    });
    return coords;
}

function getStepByStepCoords(input) {
    input = input.split(",");
    coords = {};
    coords.x = 0;
    coords.y = 0;
    coords.z = 0;
    log = [];
    input.forEach(function (x) {
       switch(x) {
           case "n":
               coords.x--;
               coords.y--;
               break;
           case "ne":
               coords.y--;
               coords.z++;
               break;
           case "se":
               coords.x++;
               coords.z++;
               break;
           case "s":
               coords.x++;
               coords.y++;
               break;
           case "sw":
               coords.z--;
               coords.y++;
               break;
           case "nw":
               coords.x--;
               coords.z--;
               break;
           default:
               console.log("Wrong direction given: " + x);
       }
        log.push(Object.assign({}, coords));
    });
    return log;
}

function getMaxAbsoluteCoord(coords) {
    var abs = x => x < 0 ? x * (-1) : x;
    coords.x = abs(coords.x);
    coords.y = abs(coords.y);
    coords.z = abs(coords.z);
    max = coords.x;
    if(coords.y > max)
        max = coords.y;
    if(coords.z > max)
        max = coords.z;
    return max;
}

function solveDay1(input) {
    var coords = getCoords(input);
    return getMaxAbsoluteCoord(coords);
}

function solveDay2(input) {
    var log = getStepByStepCoords(input);
    // Get max from every
    var max = 0;
    log.forEach(function (x) {
        var localMax = getMaxAbsoluteCoord(x);
        if(localMax > max)
            max = localMax;
    });
    return max;
}