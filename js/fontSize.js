/**
 * Created by limm on 16/9/22.
 */
(function (win, doc) {

    function change() {

        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 16 + 'px';

    }

    change();

    win.addEventListener('resize', change, false)

})(window, document)