/**
 * Created by limm on 16/9/22.
 */
/*图片预加载*/

function loadImages(arr, fnSucc, fnLoad) {
    var LEN = arr.length;
    var loaded = 0;
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var oImg = new Image();
        oImg.src = 'images/' + arr[i];
        result.push(oImg);
        oImg.onload = function() {
            loaded++;
            if (loaded == LEN) {
                fnSucc && fnSucc(result);
            }
            fnLoad(loaded, LEN);
        }

    }
}
$(document).ready(function() {
    var arrImages = [
        'bg3.jpg',
        's1/ele.png',
        's1/line.png',
        's1/logo.png',
        's1/ta.png',
        's1/theme.png',
        's1/w1.png',
        's1/w2.png',
        's1/w3.png',
        's2/ele.png',
        's2/line.png',
        's2/loca.png',
        's2/map.png',
        's2/w.png',
        's3/ele.png',
        's3/loca.png',
        's3/map.png',
        's3/w.png',
        's4/ele.png',
        's4/loca.png',
        's4/w.png',
        's5/ele.png',
        's5/loca.png',
        's5/w.png',
        's6/ele.png',
        's6/loca.png',
        's6/w.png',
        's6/cho.png',
        's7/ele.png',
        's7/loca.png',
        's7/map.png',
        's7/w.png',
        's8/ele0.png',
        's8/ele1.png',
        's8/ele2.png',
        's8/ele3.png',
        's8/ele4.png',
        's8/line.png',
        's8/w.png',
        's9/ele.png',
        's9/ele2.png',
        's9/w1.png',
        's9/w2.png'
    ];
    loadImages(arrImages, function(res) {
        //res
        setTimeout(function() {
            $('.load').css('display', 'none');
            $('.count').css('display', 'block');
        }, 300);

    }, function(loaded, LEN) {
        $('load').css({ 'display': 'block' });
    });
});


function getPos(obj) {
    var l = 0;
    var t = 0;
    while (obj) {
        l += obj.offsetLeft;
        t += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {
        'left': l,
        'top': t
    };
}
