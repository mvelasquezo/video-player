let jsApp = function() {
    const TIEMPO = 10;
    let $vid = document.querySelector( '#vidVideo' );
    let $ply = document.querySelector( '#btnPlay' );
    let $pse = document.querySelector( '#btnPause' );
    
    let $bck = document.querySelector( '#btnBackward' );
    let $frw = document.querySelector( '#btnForward' );

    let $inp = document.querySelector( '#inputProgreso' );
    
    let fn = {};

    fn.init = () => {
        $vid.addEventListener( 'loadedmetadata', fn.handleLoaded, true );
        $vid.addEventListener( 'timeupdate', fn.handleTimeUpdate, true );
        $ply.addEventListener( 'click', fn.handlePly, true );
        $pse.addEventListener( 'click', fn.handlePse, true );
        $bck.addEventListener( 'click', fn.handleBck, true );
        $frw.addEventListener( 'click', fn.handleFrw, true );
        $inp.addEventListener( 'input', fn.handleInput, true );
    };

    fn.handleLoaded = () => {
        $inp.max = $vid.duration;
    };

    fn.handleTimeUpdate = () => {
        $inp.value = $vid.currentTime;
    };

    fn.handlePly = () => {
        $pse.hidden = !($ply.hidden = true);
        $vid.play();
    };

    fn.handlePse = () => {
        $pse.hidden = !($ply.hidden = false);
        $vid.pause();
    };

    fn.handleBck = () => {
        $vid.currentTime -= TIEMPO;
    };

    fn.handleFrw = () => {
        $vid.currentTime += TIEMPO;
    };

    fn.handleInput = () => {
        $vid.currentTime = $inp.value;
    };

    return fn;
}();

(() => {
    jsApp.init();
})();