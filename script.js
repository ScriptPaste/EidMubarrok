let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountainb = document.getElementById('mountain_behind');
        let mountainf = document.getElementById('mountain_front');
        let text = document.getElementById('text')
        let header = document.getElementById('header')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.bottom = value * 0.05 + '%';
            moon.style.bottom = value * -0.5 + 'px';
            mountains_front.style.bottom = value * -0.75 + 'px';
            mountains_behind.style.bottom = value * -0.15 + 'px';

            text.style.right = -100 + value * 0.5 + '%';
            text.style.top = 50 + value * 0.1 + '%';

            header.style.top = value * 0.5 + 'px';
        })
