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

    $('#email-type-select').on('click', function (e) {
        // $(this).val('help')
        // alert($(this).val());
        $('.email-types-wrap').toggleClass('show');
    });

    $('.email-type-item').each(function () {
        $(this).on('click', function () {
            var value;
            value = $(this).children('.email-type-content').children('.title').text();
            $('#email-type-select .email-type-display').text(value);
            $('#email-type').val(value);
        });
    });

    $('#select-email-view').on('change', function () {
        var value = $(this).val();
        switch (value) {
            case 'tablet':
                $('.prev-icon').removeClass('flaticon-desktop-monitor');
                $('.prev-icon').removeClass('flaticon-smartphone');
                $('.prev-icon').addClass('flaticon-tablet');
                break;
            case 'mobile':
                $('.prev-icon').removeClass('');
                $('.prev-icon').removeClass('flaticon-tablet');
                $('.prev-icon').addClass('flaticon-smartphone');
                break;
            default:
                $('.prev-icon').removeClass('flaticon-smartphone');
                $('.prev-icon').removeClass('flaticon-tablet');
                $('.prev-icon').addClass('flaticon-desktop-monitor');
        }
    });

    $('.open-slide-in').on('click', function () {
        $('.slide-in-wrap').toggleClass('show');
    });

    $('.btn-close').on('click', function () {
        $('.slide-in-wrap').removeClass('show');
    });





    function removeActive(elem) {
        for (var i = 0; i < elem.length; i++) {
            if (elem.hasClass('active')) {
                elem.removeClass('active');
            }
        }
    }
})();