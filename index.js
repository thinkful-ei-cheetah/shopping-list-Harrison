/* global $ */
function add(a) {
    return `<li>
    <span class="shopping-item">${a}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}
function main() {
    $("#js-shopping-list-form").on('submit', function (event) {
        event.preventDefault();
        let userinput = $('#shopping-list-entry').val()
        $('.shopping-list').append(add(userinput));
        $('#shopping-list-entry').val('');
    });
    $('.shopping-item-delete').click(function (event){
        $(this).closest('li').remove();   
    })
    $('.shopping-item-toggle').click(function(event){
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    })
    
    }    

$(main);




