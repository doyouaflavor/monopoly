// More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: false,
            progress: true,
            history: true,
            center: true,
            transition: 'slide', // none/fade/slide/convex/concave/zoom
            // More info https://github.com/hakimel/reveal.js#dependencies
//            dependencies: [
//                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
//                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
//                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
//                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
//                { src: 'plugin/zoom-js/zoom.js', async: true },
//                { src: 'plugin/notes/notes.js', async: true }
//            ]
        });
    
    $(function(){
        window.getAnswers = function(){
            var rtnArr = [];
            for(var i = 1; i <= 5; i++){
                var ans = $('[name=question-'+i+']:checked').val();
                if(ans){
                    if(!rtnArr[ans]){
                        rtnArr[ans] = 0;
                    }
                    rtnArr[ans]+=10;
                }
            }
            return rtnArr;
        }
        
        window.setFinalAnswer = function(input_text){
            $('.result').html(input_text);
        }
        
        $('input').click(function(){
            var ansArr = getAnswers(); 
            var arr = Object.keys( ansArr ).map(function ( key ) { return ansArr[key]; });
            var str = '';
            var maxAns = ansArr.indexOf(Math.max(...arr));
            console.log()
            
            if(maxAns == 1){
                str = '意志力的大富翁啊！<br>人有兩隻腳，大家都知道，但錢有四隻腳，我就追不到。<br>每天早上還來不及睜開眼睛就開始跟時間賽跑，何時能停下來好好休息呢？<div><a onclick="Reveal.right();" href="javascript:void(0);"><img src="img/result1.jpg"/></a></div>';
            }else if(maxAns == 2){
                str = '明日的大富翁啊！<br>「去年給自己定了目標存款三萬，今天掐一下手指還差五萬」<br>現在還買不起房子，現在還沒有存款，<br>沒關係，人人都有機會，在夢裡變成大富翁！<div><a onclick="Reveal.right();" href="javascript:void(0);"><img src="img/result2.jpg"/></a></div>';
            }else if(maxAns == 3){
                str = '心靈的大富翁啊！<br>只要是能用錢解決的事，一件都解決不了呢<div><a onclick="Reveal.right();" href="javascript:void(0);"><img src="img/result3.jpg"/></a></div>';
                     }
            console.log(str);
            setFinalAnswer(str);
        });
        
        $('.next').click(function(){
            Reveal.right();
        })
        
        
        
        Reveal.slide(0);

        $('input').click(function(){
            setTimeout(function(){
              Reveal.right();  

            },500);
        })

//        $('.form-iframe').load(function() {
//            setTimeout(function(){
//              Reveal.right();  
//
//            },500);
//        });
        
//        Reveal.addEventListener( 'slidechanged', function( event ) {
//            window.href=""
//        }
        
         window.fbAsyncInit = function() {
            FB.init({
              appId            : '144111119374573',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.10&appId=144111119374573";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        
        window.sendToFB = function(){
            FB.ui({
              method: 'feed',
              link: 'https://doyouaflavor.github.io/monopoly',
              caption: 'An example caption',
            }, function(response){});
                    }
  });