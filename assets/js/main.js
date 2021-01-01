(function () {

    const editor = new EditorJS({
        holder: 'editorjs',
        /** 
         * Available Tools list. 
         * Pass Tool's class or Settings object for each Tool you want to use 
         */
        tools: {
            header: Header,
            delimiter: Delimiter,
            embed: Embed,
            image: SimpleImage,
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            },
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                    }
                }
            }
        }
    });


    $('.workspace-display').on('click', function () {
        if ($('.profile-option').hasClass('show')) {
            $('.profile-option').removeClass('show')
        }
        $('.workspace-options').toggleClass('show');
    });

    $('.create-btn').on('click', function () {
        $('.create-options').toggleClass('show');
    });

    $('#love-work').on('click', function (e) {
        e.preventDefault();
        $('#love-work span').toggleClass('loved');
    });

    $('.profile-btn').on('click', function () {
        if ($('.workspace-options').hasClass('show')) {
            $('.workspace-options').removeClass('show')
        }
        $('.profile-option').toggleClass('show');
    });

    $('.floating-lock').on('click', function () {
        if ($('#locker').hasClass('flaticon-lock')) {
            $('#locker').removeClass('flaticon-lock');
            $('#locker').addClass('flaticon-open-padlock-silhouette');
        } else {
            $('#locker').removeClass('flaticon-open-padlock-silhouette');
            $('#locker').addClass('flaticon-lock');
        }
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





    function removeActive(elem) {
        for (var i = 0; i < elem.length; i++) {
            if (elem.hasClass('active')) {
                elem.removeClass('active');
            }
        }
    }
})();