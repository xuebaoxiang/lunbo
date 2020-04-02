var $Play = (function(){
    var $lunbo =(
        '<div  id="slider">'
      + '<div class="slider"><img src="img/b5.png" alt=""></div>'
      + '<div class="slider"><img src="img/b1.png" alt=""></div>'
      + '<div class="slider"><img src="img/b2.png" alt=""></div>'
      + '<div class="slider"><img src="img/b3.png" alt=""></div>'
      + '<div class="slider"><img src="img/b4.png" alt=""></div>'
      + '<div class="slider"><img src="img/b5.png" alt=""></div>'
      + '<div class="slider"><img src="img/b1.png" alt=""></div>'
    + '</div>'
    + '<span id="left"><</span>'
    + '<span id="right">></span>'
    + '<ul class="nav" id="navs">'
      + '<li class="active">1</li>'
      + '<li>2</li>'
      + '<li>3</li>'
      + '<li>4</li>'
      + '<li>5</li>'
    + '</ul>')
    function show(){
        var $box = $('#box');
        $box.append($lunbo);
        var $slider = $('#slider');
        var $next = $('#right');
        var $prev = $('#left');
        var $navs = $('#navs li');
        var current = 1;
        var index = 0;
        var timer = null;
        $box.mouseover(function(){
            $next.css("opacity","0.5");
            $prev.css("opacity","0.5");
            clearInterval(timer);
        })
        $box.mouseout(function(){
            $next.css("opacity","0");
            $prev.css("opacity","0");
            autoplay();
        })
        function next(){
            current = current === 6 ? 2 : current + 1;
            var newleft = -1200 * current + $box.offset().left;
            $slider.offset({left:newleft});
            index = current < 6?current - 1:0;
        }
        function prev(){
            current = current === 0 ? 4 : current - 1;
            var newleft = -1200 * current + $box.offset().left;
            $slider.offset({left:newleft});
            index = current < 1? 4 :current - 1;
        }
        $next.click(function(){
           next();
           dot();
        })
        $prev.click(function(){
           prev();
           dot();
        })
        for(var i = 0; i < $navs.length; i++){
            (function(num){
                $navs[num].onclick = function(){
                    current = num + 1;
                    index = num;
                    $('.active').removeClass('active');
                    $navs[index].className = 'active';
                    $slider.offset({left:-1200*current + $box.offset().left})
                }
            })(i)
        }
        function autoplay(){
            timer = setInterval(function(){
                next();
                dot();
            },2000)
        }
        autoplay();
        function dot(){
            $('.active').removeClass('active');
            $navs[index].className = 'active';
        }
        
    }
    

    return {show: show}
})()