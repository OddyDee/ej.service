/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
menubar.onclick = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('.burger').on('click', function(){
    $(this).toggleClass('active');
    $("#myTopnav").slideToggle();
})

$(window).on('resize', function(){
    if($(window).width() >= 700){
        $('.burger').removeClass('active');
        $("#myTopnav").removeAttr('style');
    }
    
})


    $('#myTopnav a').on('click', function(e){
        if($(window).width() <= 800){
            $('#myTopnav').slideUp();
            $('.burger').removeClass('active');
        }
    })

