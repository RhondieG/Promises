$.get('https://dog.ceo/api/breed/beagle/images/random', function() {
    console.log('data was fetched!');
    $.get('https://dog.ceo/api/breed/chow/images/random', function() {
        console.log('data was fetched!');
        $.get('https://dog.ceo/api/breed/chow/images/random', function() {
            console.log('data was fetched!');
            $.get('https://dog.ceo/api/breed/chow/images/random', function() {
                console.log('data was fetched!');
                $.get('https://dog.ceo/api/breed/chow/images/random', function() {
                    console.log('data was fetched!');
                })
            })
        })
    })
})