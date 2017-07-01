        window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')


        $('#aws').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '20px',
        });
        $('#android').LineProgressbar({
            percentage: 80,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#DA4453'
        });
        $('#css').LineProgressbar({
            percentage: 70,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#E0C341'
        });
        $('#angular').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '20px',

        });
        $('#js').LineProgressbar({
            percentage: 70,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#E0C341'
        });
        $('#csharp').LineProgressbar({
            percentage: 80,
            radius: '3px',
            height: '20px',

        });

        $(function() {
            $(window).on("load resize", function() {
                $(".fill-screen").css("height", window.innerHeight);
            });
            $('body').scrollspy({
                target: '.navbar',


            });
        });
        $(document).ready(function() {
            $('map').imageMapResize();
        });

        // trying to set the offset so that the nav bar links index correctly

        // var offset = 150;
        // $('.navbar li a').click(function(event) {
        //     event.preventDefault();
        //     $($(this).attr('href'))[0].scrollIntoView();
        //     scrollBy(0, -offset);
        // });