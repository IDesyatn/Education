//Написать программу определения оценки студента по его рейтингу

module.exports = studGrade;

function studGrade(numGrade)
{
    if (typeof numGrade !== 'number' || numGrade < 0|| numGrade > 100) {
        return 'Неправильно введена информация'; 
    }
    
    if (numGrade >= 0 && numGrade <= 19) {
        return 'Оценка студента: F'; 
    }
    if (numGrade >= 20 && numGrade <= 39) {
        return 'Оценка студента: E';
    }
    if (numGrade >= 40 && numGrade <= 59) {
        return 'Оценка студента: D'; 
    }
    if (numGrade >= 60 && numGrade <= 74) {
         return 'Оценка студента: C'; 
    }
    if (numGrade >= 75 && numGrade <= 89) {
        return 'Оценка студента: B'; 
    }
    
    return 'Оценка студента: A'; 
    
}
