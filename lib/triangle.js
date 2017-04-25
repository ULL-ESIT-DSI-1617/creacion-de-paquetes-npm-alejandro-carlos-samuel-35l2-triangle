let Shape = require('@alejandro-carlos-samuel/ull-shape');

/**
 * Figura triangulo
 * @type {Triangle}
 */

class Triangle extends Shape {
    /**
     * Constructor de la clase Triangle que llama a la clase padre con las opciones.
     * @param  {Object} options Objeto que contiene la base y altura del triángulo.
     */
    constructor(options) {
      super(options)
    }
    /**
     * Método que calcula el área del triágulo
     * @return {number} Valor numérico que define el área del triángulo.
     */
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;