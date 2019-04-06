(function () {
    var buttons = document.querySelectorAll('.accordion__btn');
    var contents = document.querySelectorAll('.accordion__content');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.style.backgroundColor = "#fff";
            } else {
                for (let i = 0; i < contents.length; i++) {
                    contents[i].style.maxHeight = null;
                    buttons[i].style.backgroundColor = "#fff";
                }
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.backgroundColor = "sandybrown";
            }
        });
    }
}());