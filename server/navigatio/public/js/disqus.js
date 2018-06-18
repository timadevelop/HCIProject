// TODO : SETUP DISQUS
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT
*  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR
*  PLATFORM OR CMS.
*
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
*  https://disqus.com/admin/universalcode/#configuration-variables
*/
/*
var disqus_config = function () {
// Replace PAGE_URL with your page's canonical URL variable
this.page.url = PAGE_URL;

// Replace PAGE_IDENTIFIER with your page's unique identifier variable
this.page.identifier = PAGE_IDENTIFIER;
};
*/


var disqus_shortname = 'sorax',
disqus_identifier = 'spotlight01';

(function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
  var d = document, s = d.createElement('script');

  // IMPORTANT: Replace EXAMPLE with your forum shortname!
  s.src = 'https://spotlight01.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
