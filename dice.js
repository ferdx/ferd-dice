module.exports = function(ferd) {
  
  ferd.listen(/ferd dice (\d+)/i, function(response) {
    var howMany = response.match[1] - 1;
    var number;
    var attachment = [];

    var dice = [
                'http://imgur.com/bSFuRZh.png', 
                'http://imgur.com/20ibDDV.png', 
                'http://imgur.com/vhGJmCu.png', 
                'http://imgur.com/t9vzHyP.png', 
                'http://imgur.com/bFnjB3m.png', 
                'http://imgur.com/2tiwBNG.png'
               ];

    while(howMany--) {
      number = Math.floor(Math.random() * 6);
      attachment.push({
        'fallback': number,
        'image_url': dice[number]
      });
    }

    response.postMessage({
      as_user: true,
      attachments: attachment
    });

  });

  ferd.listen(/ferd dice/i, function(response) {
    var number;
    var attachment = [];

    var dice = [
                'http://imgur.com/bSFuRZh.png', 
                'http://imgur.com/20ibDDV.png', 
                'http://imgur.com/vhGJmCu.png', 
                'http://imgur.com/t9vzHyP.png', 
                'http://imgur.com/bFnjB3m.png', 
                'http://imgur.com/2tiwBNG.png'
               ];

    number = Math.floor(Math.random() * 6);
    attachment.push({
      'fallback': number,
      'image_url': dice[number]
    });

    response.postMessage({
      as_user: true,
      attachments: attachment
    });

  });

};
