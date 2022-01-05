//Найти расстояние между двумя точками в двухмерном декартовом пространстве

module.exports = getDistanceBetwPoints; 

function getDistanceBetwPoints(p1, p2) {
    if (!Array.isArray(p1) || !Array.isArray(p2)|| !p1 || !p2) {
      return 'Incorrect input data';
  }
  
    let distance = 0;
    distance = Math.sqrt(((p2[0] - p1[0])**2) + ((p2[1] - p1[1])**2));
    return distance; 
}


