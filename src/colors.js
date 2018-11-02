const $ = require('jquery');

let colorContent = {};

colorContent.addABackground = color => {
    $('body').css('background-color', color);
}
colorContent.changeColor = (selctor, color) =>{
    $(selctor).css('color',color)
}

export default colorContent