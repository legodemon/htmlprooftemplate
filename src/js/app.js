document.addEventListener('DOMContentLoaded', function () {
        /*
         $(".nav li").hover(function() {
            $(this).addClass('hover');
            }, function() {
            $(this).removeClass('hover');
            });
             */

        const elements = document.querySelectorAll('.nav li');

        for (var i = 0; i < elements.length; i++) {
            elements[i].onmouseover = function () {
                this.classList.add('hover');
            };

            elements[i].onmouseout = function () {
                this.classList.remove('hover');
            }
        }
    }
);