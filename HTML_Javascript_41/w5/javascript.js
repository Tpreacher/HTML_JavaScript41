JSAnimation = (function() {
    var i;
    var l; 
    var objs = new Array(); // list of HTML elements on the DOM
    var els = [ 'panel_a','panel_b','panel_c' ];
    var xy_delta_factor = 4; // how much to move the x,y at each higher layer
    var el;
    var xx = 1; yy = 0; // starting vector deltas
    var ttl = original_ttl = 1000; // time to live...counts down toward zero each iteration
    var timer;
    var nvec;

    // initialize values for return trips through this method
    for ( i = 0; i < els.length; i++ ) {
        
        el = document.getElementById( els[ i ] );
        el.x = 0; 
        el.y = 0;
        el.xy_delta = i ^ xy_delta_factor;
        objs.push( el );

    }


    function start_stop( pause ) {

        if ( pause ){ // process "stop" button
            if ( timer ) { 
                clearInterval( timer ); 
                timer = 0; 
                return 1; 
            } else {
                debug('no timer found to start');
            }
            
        } else {
            if ( !timer ) {
                timer = setInterval(function(){
                    JSAnimation.animate();
                }, 50 ); // set up the return caller, every 50 milliseconds
            } else {
                debug('cannot start a new timer, already have one running');
            }
        }

    }


    // do the animation
    function animate() {

        // if my ttl still has cycles remaining, do the animation
        if ( --ttl > 0 ) { 
    
            // every 100 cycles, change the direction
            if ( ( ttl % 100 ) == 0 ) {
                nvec = parseInt( Math.random() * 8 );
                switch( nvec ) { 
                    case 1: xx = -1; yy = -1; break; // choose new deltas for later processing
                    case 2: xx = 0;  yy = -1; break
                    case 3: xx = 1;  yy = -1; break
                    case 4: xx = 1;  yy = 0;  break
                    case 5: xx = 1;  yy = 1;  break
                    case 6: xx = 0;  yy = 1;  break
                    case 7: xx = -1; yy = 1;  break
                    case 8: xx = -1; yy = 0;  break
                }

                console.log('picked new vector: ' + nvec + ', xx = ' + xx + ', yy = ' + yy );
            }
    
            for ( i = 0; i < objs.length; i++ ) {
        
                // calc new "x" value based on the shared delta and the layer's modifier (multiplier).
                objs[ i ].x += ( xx * objs[ i ].xy_delta ); 
                objs[ i ].y += ( yy * objs[ i ].xy_delta );
        
                objs[ i ].style.backgroundPosition = '' + objs[ i ].x + 'px ' + objs[ i ].y + 'px';

            }
    
    
        } else {

            start_stop( 1 );
            ttl = original_ttl;

        }

        return 1; // in this case, returning 1 confirms ok

    }

    return {
        animate: animate,
        start_stop: start_stop
    }

})();




function debug(str){
  // for the built-in debugger
  var o = document.getElementById('debug');
  o.innerHTML += '\n' + str;
}


<p><input type="button" value="Start Animation" data-text-1="Start Animation" data-text-0="Stop Animation" onclick="return handle_click(this);" ;="" "=""{">"}
<script>

// toggle the running state
function handle_click( el ) {
    var state;

    // initialize is_running
    if ( typeof( el.is_running ) === 'undefined' ) {
        el.is_running = 1;
    {"}"}
    
    // toggle is_running
    state = el.is_running ? 0 : 1;
    
    JSAnimation.start_stop( state );
    el.value = el.getAttribute('data-text-' + state );

    el.is_running = state;
}
</script>

</p><xmp id="debug" class="code" style="overflow:auto;" _tyle="overflow:scroll;height:40px;border:1px #ccc solid;background:#eee;" onclick="
    if(this.t){
      this.t=0;
      this.style.overflow='scroll'; this.style.height='40px';
    } else{
      this.t=1;
      this.style.overflow=''; this.style.height='';
    }
  ">(debugger output)</xmp>

