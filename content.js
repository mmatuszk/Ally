console.log('Ally Ext: Loaded');
$(document).on('click', function (e) {
  var $t = $(e.target);
  var text = $t.text().trim();
  if (text == 'Check Number:') {
    var checkNum = $t.parent().find('span').text().trim();
    var $p = $t.parent().parent();
    var dateTxt = $p.find(':contains("Posting Date:")').find('span').text();
    var date = new Date(dateTxt);
    
    var fname = 'check '+checkNum+' posted '+date.format('yyyy-mm-dd');
    console.log(fname);
    GM_setClipboard(fname);
  }
});