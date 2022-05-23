
function run() {
    var text = document.getElementById("text").value;    
    try {
        eval(text);
    }
    catch (e) {
        join = document.querySelector('#console').innerHTML
        document.querySelector("#console").innerHTML = join + "<br>" + e;
    } 
}

const elem = document.querySelector('#text');
addListener(elem, 'keydown', function(e) {
    if (e.keyCode == 13) {
        run();
    }
});