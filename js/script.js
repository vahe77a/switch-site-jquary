$(document).ready(function(){
    let ds_photo = document.getElementsByClassName('design_photos');
    let ph_photo = document.getElementsByClassName('photo_photos');
    let pr_photo = document.getElementsByClassName('print_photos');
    $('#menuBtn').on('click',function(){
        $('#topMenu').toggleClass('open');
        if($('ul.open',)){
            $('.naw').toggleClass('openNav');
        }
        if($("#topMenu").hasClass('open')){
            $('#bodyy').css("overflow", "hidden");
        }else{
            $('#bodyy').css("overflow", "scroll");
        }
    })
    let a = $('a[data-from]');
    a.click(function(e){
        e.preventDefault();
        let id = $(this).data('from');
        let ofs = $(`[data-to=${id}]`).offset().top;
        $('html,body').animate({
            scrollTop:ofs - 50
        },800);
        
        $('#topMenu').toggleClass('open');
        $('.naw').toggleClass('openNav');
        if(!$("#topMenu").hasClass('open')){
            $('#bodyy').css("overflow", "scroll");
        }
    });
    let btn = $('.btn2');
    btn.click(function(e){
        e.preventDefault();
        let id = $(this).data('from');
        let ofs = $(`[data-to=${id}]`).offset().top;
        $('html,body').animate({
            scrollTop:ofs - 50
        },800);
    });
    let btnArr = [];

    $('#pt').on('click',function(){
        if($('#pt').hasClass('check')){
            $('#ds').removeClass('check');
            $('#pr').removeClass('check');
        }else{
            $('#pt').addClass('check');
            $('#ds').removeClass('check');
            $('#pr').removeClass('check');
        }
        for(let i of ph_photo){
            i.style.display = "block";
        }
        for(let i of ds_photo){
            i.style.display = "none";
        }
        for(let i of pr_photo){
            i.style.display = "none";
        }
    })
    $('#ds').on('click',function(){
        if($('#ds').hasClass('check')){
            $('#pt').removeClass('check');
            $('#pr').removeClass('check');
        }else{
            $('#ds').addClass('check');
            $('#pt').removeClass('check');
            $('#pr').removeClass('check');
        }
        for(let i of ds_photo){
            i.style.display = "block";
        }
        for(let i of ph_photo){
            i.style.display = "none";
        }
        for(let i of pr_photo){
            i.style.display = "none";
        }
    })
    $('#pr').on('click',function(){
        if($('#pr').hasClass('check')){
            $('#pt').removeClass('check');
            $('#ds').removeClass('check');
        }else{
            $('#pr').addClass('check');
            $('#pt').removeClass('check');
            $('#ds').removeClass('check');
        }
        for(let i of pr_photo){
            i.style.display = "block";
        }
        for(let i of ph_photo){
            i.style.display = "none";
        }
        for(let i of ds_photo){
            i.style.display = "none";
        }
    })

    $('#icon').on('click',()=>{
        $('#input').val('');
    })
    $('#input').on('keypress',function(e) {
        if(e.which == 13) {
            $('#input').val('');
        }
    });

})



