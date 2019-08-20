$(document).ready(function() {
    $('.rf').each(function() {
        let form = $('.success-modal__form'),
            btn = form.find('.success-modal__button');

        form.find('.rfield').addClass('empty_field');


        function checkInput() {
            form.find('.rfield').each(function() {
                if ($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');
                } else {
                    // Если поле пустое добавляем класс-указание
                    $(this).addClass('empty_field');
                }
            });
        }

        function lightEmpty() {
            form.find('.empty_field').css({
                    'border-color': '#d8512d'
                }),
                form.find('.success-modal__text').text('Заполните форму!');

            // Через полсекунды удаляем подсветку
            setTimeout(function() {
                form.find('.empty_field').removeAttr('style'),
                    form.find('.success-modal__text').text('');
            }, 500);
        }

        setInterval(function() {
            // Запускаем функцию проверки полей на заполненность
            checkInput();
            // Считаем к-во незаполненных полей
            let sizeEmpty = form.find('.empty_field').size();
            // Вешаем условие-тригер на кнопку отправки формы
            if (sizeEmpty > 1) {
                if (btn.hasClass('disabled')) {
                    return false
                } else {
                    btn.addClass('disabled')
                }
            } else {
                btn.removeClass('disabled')
            }
        }, 500);
        btn.click(function() {
            if ($(this).hasClass('disabled')) {
                // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                lightEmpty();
                return false
            } else {
                // Все хорошо, все заполнено, отправляем форму
                form.submit();
                let inputInfo = $('.success-modal__input').val();
                $(".success-modal__text").text(inputInfo + ", Ваша форма отправлена");
            }
        });
    });



































    $("#button").click(function() {
        $(".success-modal").css("display", "flex")
    }), $(".success-dialog__close").click(function() {
        $(".success-modal").css("display", "none")
    });
    var s = $(".scroll-btn");
    $(window).on("scroll", function() {
            20 <= $(window).scrollTop() ? s.fadeIn() : s.fadeOut()
        }), s.on("click", function() {
            $("html,body").animate({
                scrollTop: 0
            }, 900)
        }), $("#offer-form").on("submit", function(s) {
            s.preventDefault(), $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(this).serialize(),
                success: function(s) {
                    $(".success").text(s + ", Ваша форма отправлена")
                }
            })
        }), $("#brif-form").on("submit", function(s) {
            s.preventDefault(), $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(this).serialize(),
                success: function(s) {
                    $(".success-brif").text(s + ", Ваша форма отправлена")
                }
            })
        }),
        $(".success-modal__form").on("submit", function(s) {
            s.preventDefault(), $.ajax({
                url: "mail.php",
                type: "POST",
                data: $(this).serialize(),
                success: function(s) {
                    $(".success-modal__text").text(s + ", Ваша форма отправлена")
                }
            })
        });
});