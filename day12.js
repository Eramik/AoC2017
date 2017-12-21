function solvePart1(input) {
    var graph = input.match(/(\d+ <-> ((\d+, )*)?\d+)/g).map( x => x.match(/\d+/g)).reduce( (a,v) => (a[v[0]] = v.slice(1), a), []);
    var queue = graph[0];
    var i = 0;
    while(i < queue.length) {
        var current = graph[queue[i]];
        for(var j = 0; j < current.length; j++) {
            if(!queue.includes(current[j]))
                queue.push(current[j]);
        }
        i++;
    }
    console.log("Result: " + queue.length);
}

function solvePart2(input) {
    var graph = input.match(/(\d+ <-> ((\d+, )*)?\d+)/g).map( x => x.match(/\d+/g)).reduce( (a,v) => (a[v[0]] = v.slice(1), a), []);
    var getUnqueued = function (queue,graph) {
        for(var i = 0; i < graph.length; i++) {
            if(!queue.includes(i.toString())) {
                return i.toString();
            }
        }
        return undefined;
    }
    var queue = [];
    var i = 0;
    var groups = 0;
    var unqueued = 0;
    while(unqueued != undefined) {
        queue.push(unqueued);
        groups++
        while(i < queue.length) {
            var current = graph[queue[i]];
            for(var j = 0; j < current.length; j++) {
                if(!queue.includes(current[j]))
                    queue.push(current[j]);
            }
            i++;
        }
        unqueued = getUnqueued(queue, graph);
    }
    
    console.log("Result: " + groups);
}