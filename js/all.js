 
 $(function(){
  //localstorange的資料
  var data =JSON.parse(localStorage.getItem('listData')) || [];
  //增加內容及呼叫更新畫面
  function addData(){
    var txt = $('.text').val();
    var todo = {
      content: txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data))
  }
  //更新畫面
  function updateList(items){ 
    str='';
    for(var i=0;i<items.length;i++){
      str += '<li>'+items[i].content+'<button class="del" data-index=' + i + '>刪除</button></li>'
    }
    $('.list').html(str)
    
  }
  //刪除內容後更新畫面
    function delList(){
      var index = $(this).data('index')
      data.splice(index, 1);
      localStorage.setItem('listData',JSON.stringify(data));
      updateList(data);
    }

  $('.send').on('click',function(){
    if($('.text').val()==''){
      alert('請輸入內容')
    }else{
      addData()
      $('.text').val('')
    }
  });
  $('.list').on('click','.del',delList);
  $(window).on('load',updateList(data))

})