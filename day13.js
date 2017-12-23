function solvePart1(input, delay = 0) {
    var firewall = input.match(/\d+: \d+/g).map( v => v.match(/\d+/g) ).map( v => [parseInt(v[0]), parseInt(v[1])] ).reduce( (a,v) => (a[v[0]] = {cap: v[1]}, a), [] );
    // Init firewall scanners
    firewall.forEach( v => v.scanner = { position: 0, direction: true /* true - up, false - down */} );
    var packetLayer = -1;
    var severity = 0;
    var getCought = 0;
    for (var picosecond = 0; picosecond < firewall.length + delay; picosecond++) {
        if(picosecond >= delay) {
            packetLayer++;
            if (firewall[packetLayer] != undefined && firewall[packetLayer].scanner.position == 0) 
                severity += packetLayer * firewall[packetLayer].cap, getCought++;
        }
        

        firewall.forEach( function (v) {
            if (v.scanner.position == 0 && v.scanner.direction == false) {
                v.scanner.position++;
                v.scanner.direction = true;
            } else if (v.scanner.position == v.cap - 1 && v.scanner.direction == true) {
                v.scanner.position--;
                v.scanner.direction = false;
            } else {
                if (v.scanner.direction == true)
                    v.scanner.position++;
                else
                    v.scanner.position--;
            }
        });
    }

    console.log("Answer: " + severity);
    return severity;
}

function solvePart2(input) {
    for(var delay = 0; true; delay++) {
        if(solvePart1(input, delay) == 0) {
            console.log("Delay: " + delay);
            break;
        }
    }
}