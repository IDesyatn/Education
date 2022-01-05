//Определить какой четверти принадлежит точка с координатами (х,у)

module.exports = defineQuarter; 

function defineQuarter(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 'Неправильные входные данные'; 
    }
    if (x == 0 && y == 0) {
        return 'Точка находится в цетре координат';
    }
    else if (x == 0 || y == 0) {
       return 'Точка находится на оси';
    }
    else if (x > 0 && y > 0) {
       return 'Точка находится в первой четверти';
    }
    else if (x < 0 && y > 0) {
        return 'Точка находится во второй четверти';
    }
    else if (x < 0 && y < 0) {
        return 'Точка находится в третьей четверти';
    }
    else {
        return 'Точка находится в четвертой четверти';
    }
}