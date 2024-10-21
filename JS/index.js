
$(".openIcon").click(function(){
    $(".list ").css("left" , "0")
});

$(".close").click(function(){
    $(".list ").css("left" , "-200px")
});

$(".silderContent h3").click(function(){
    $(this).next().removeClass('d-none').slideDown(500);

    $(".silderContent div").not($(this).next()).slideUp(500);

    
});


$("textarea").keyup(function(){
    let mychar = $(this).val().length;
    
    $(".charNum").text(
        100 - mychar <= 0 ? "your available character finished" : 100 - mychar
    )
});



function calcDate() {
    const partyDate = new Date("2025-02-02");
    const nowDate = new Date();
    const def = partyDate - nowDate
    let days = Math.floor(def / 1000 / 60 / 60 / 24)
    let hours = Math.floor(def / 1000 / 60 / 60 - days * 24)
    let minutes = Math.floor(def / 1000 / 60 - hours * 60 - days * 24 * 60)
    let seconds = Math.floor(def / 1000 - minutes * 60 - hours * 60 * 60 - days * 24 * 60 * 60)

    $("#days").html(`${days} D`)
    $("#hours").html(`${hours} H`)
    $("#minutes").html(`${minutes} M`)
    $("#seconds").html(`${seconds} S`)
}

setInterval(calcDate, 1000)
calcDate();




$("list ul a").on("click" , function(){
    const currentSection = $(this).attr("href");
    const currentSectionOffestTop = $(currentSection).offset().top;
    
    $("html , body").animate({scrollTop: currentSectionOffestTop} , 2000)
 })