/* http://www.w3schools.com/howto/howto_js_sidenav.asp */

/* Shortcuts */
function $(id) {
    return document.getElementById(id);
}

/* Return Nav Width as Int */
function getNavWidth(){
    return parseInt($("mySidenav").style.width);
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    $("mySidenav").style.width = "250px";
    $("static").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    $("mySidenav").style.width = "0";
    $("static").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

/* Toggle between two open and close */
function toggle(){
    if(getNavWidth() == "250"){
        closeNav();
    } else {
        openNav();
    }
}

/* Set Header height = nav icon height */
function setEqualHeights(){
    $btnHeight = $('navbtn').clientHeight;
    $headerHeight = $('pageHeader').clientHeight;
    
    if($btnHeight !== $headerHeight){
        console.log("made it");
        $('pageHeader').style.height = $btnHeight + "px";
    }
}