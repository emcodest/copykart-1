(function () {



    $('.workspace-display').on('click', function () {
        if ($('.profile-option').hasClass('show')) {
            $('.profile-option').removeClass('show')
        }
        $('.workspace-options').toggleClass('show');
    });

    $('.create-btn').on('click', function () {
        $('.create-options').toggleClass('show');
    });

    $('.love-work').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).children().toggleClass('loved');
            //$('.love-work span').toggleClass('loved');
        });
    });

    $('.profile-btn').on('click', function () {
        if ($('.workspace-options').hasClass('show')) {
            $('.workspace-options').removeClass('show')
        }
        $('.profile-option').toggleClass('show');
    });

    $('.floating-lock').each(function () {
        $(this).on('click', function () {
            if ($(this).children().hasClass('flaticon-lock')) {
                $(this).children().removeClass('flaticon-lock');
                $(this).children().addClass('flaticon-open-padlock-silhouette');
            } else {
                $(this).children().removeClass('flaticon-open-padlock-silhouette');
                $(this).children().addClass('flaticon-lock');
            }
        });
    });



    $('.campaign-box').each(function () {
        $(this).on('click', function () {
            removeActive($('.campaign-box'));
            $(this).addClass('active');
        });

    });

    $('.btn-submit-ad').on('click', function (e) {
        e.preventDefault();
        $('.large-display-notif').addClass('show-flex');

        setTimeout(function () {
            $('.large-display-notif').removeClass('show-flex');
        }, 3000);
    });

    $('.page-desc ~ .d-flex .campaign-title').on('click', function () {
        $('.campaigns-list-wrap').toggleClass('show');
    });

    $('.campaigns-list-wrap .nav-item').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.campaign-target-img').attr('src', $(this).attr('data-img'));
            $('.campaign-target-text').text($(this).attr('data-name'))
        });

    });

    // $('#email-type').on('focus', function (e) {
    //     e.preventDefault();
    // });





    function removeActive(elem) {
        for (var i = 0; i < elem.length; i++) {
            if (elem.hasClass('active')) {
                elem.removeClass('active');
            }
        }
    }
})();