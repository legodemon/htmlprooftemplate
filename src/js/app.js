document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll('.nav li'), function (element) {
        element.addEventListener('mouseenter', function(){
            element.classList.add('hover');
        });

        element.addEventListener('mouseleave', function(){
            element.classList.remove('hover')
        });
    });
});