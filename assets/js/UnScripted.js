$(function()
  {    
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/16BeSv3QNBDO1CQU_363fYAAxsgrRaoJ6q_9vMg8OG18/pubhtml';
    //https://docs.google.com/spreadsheets/d/16BeSv3QNBDO1CQU_363fYAAxsgrRaoJ6q_9vMg8OG18/edit?usp=sharing
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSosVnDt1fGbGvPNAYp_VZs312YYoDvslRQOzWzGIA26VESHnIKtKl_f9s4FKYnWFWm6H3K_3EyuEqa/pubhtml?gid=0&single=true    
  
    function init() {        
      Tabletop.init( { key: publicSpreadsheetUrl,        
                       callback: showInfo,                       
                       simpleSheet: true                    
                        })
    }
  
    function showInfo(data, tabletop) {    
      var Ldata = data.filter(function(entry){
        return entry.Language
      })                   
      var Lli = "";
      for(var i = 0; i < Ldata.length; i++)
      {        
        Lli += "<li><a href='#'>" + Ldata[i].Language + "</a></li>"        
      }
      $('#language').html(Lli);
      var Adata = data.filter(function(entry){
        return entry.Author
      })                   
       var Ali = "";
      for(var i = 0; i < Adata.length; i++)
      {        
        Ali += "<li><a href='#'>" + Adata[i].Author + "</a></li>"        
      }
      $('#author').html(Ali);
    }
    window.addEventListener('DOMContentLoaded', init)    
})