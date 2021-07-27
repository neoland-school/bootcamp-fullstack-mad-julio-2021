/**
 * Introduccion a POO: Tipo/forma de promgramación
 *                      Se basa en la definición de entidades/conceptos
 *                      Se acerca mucho a la definición de elementos de la vida reales
 *          * 4 principios: 
                        Encapsulacion : crear una envoltura y dentro de esa envoltura, metemos la definición de un concepto. 
                        Abstraccion : ocultar la forma en la que algo esta desarrollado 
                        Herencia : obtener/recibir propiedades y métodos de otras entidades de POO
                        Polimorfismo: habilidad que tiene una entidad de tomar múltiples formas.   
            * Clases vs Objetos
                    let a = {
                        name: 'Alex' //Atributos/propiedades con el valor que representa => variable
                        surname: 'Gonzalez'
                        walk: function (){
                            /walk stuff for person
                        }
                    } // Representa a Alex dentro del mundo/entidad de las personas

                    let b = {
                        name: 'Matias' //Atributos/propiedades con el valor que representa => variable
                        surname: 'Lallave'
                        walk: function (){
                            /walk stuff for person
                        }
                    } // Representa a Alex dentro del mundo/entidad de las personas
 * 
            ** Clase => Es una definición de una entidad/concepto

                ej: Coche: -> esto es una clase
                    propiedades/atributos:
                        numero de ruedas:
                        color:
                        matricula:
                        marca:
                        combustible:
                        kilometrajes:
                        potencia:
                        modelo: 
                    acciones:
                        arrancar:
                        frenar:
                        acelerar:
                        girar:
                        derrapar:
                        matricular:
                        cambiarRuedas:
                        aparcar:


            ** Objeto: Un individuo concreto de una clase (instancia)

                    let ferrari: //Esto ya es un coche unico
                        -numRuedas: 4,
                        -color: rojo,
                        -modelo: testarrosa
                        -matricula: 5472HHZ
                    
                    let ferrari.arrancar()

    ¿COMO LO CODIFICO?

            - Clases:
                    class <nombreClase> {

                    }

                    class Coche { //Esto es una definición de todos los coches

                        //CREAR UNA CLASE ES ENCANPSULAR SU FUNCIONALIDAD

                        //------DEFINICION PROPIEDADES-------//
                        
                        constructor(){
                            // Esta es una función que se ejecuta cada vez que cree un objeto de esta clase
                            // Sirve para INICILIZAR las propiedades/atributos
                            this.<nombreProp> = <valor>;
                            ej: this.numRuedas = 4;
                                this.color = color;
                                this.modelo = modelo;
                                this.matricula = null;
                        }


                        //------DEFINICION METODOS/ACCIONES-------//
                        arrancar(){
                            //CODIGO DE ARRANCAR
                        }

                        matricular(matricula){  //Giardar el valor de la matrícula
                            this.matricula = matricula;
                        }

                        getNumRuedas(){
                            return this.numRuedas;
                        }

                    }

            - Objeto: Crear una instancia de la clase (un individuo real)

                    let/const ferrariTestarrosa = new Coche('Testarrosa', 'rojo'); // Crea un ferrari testarrosa rojo
                    
                    ferrariTestarrosa.matricular('5453HHZ'); //Ya tengo un ferrari testarrosa rojo con matricula
                    ferrariTestarrosa.getnumRuedas(); //Me devuelve un number con el numero de ruedas CUIDADO CON ESTO, MEJOR BUSCAR ALTERNATIVA

    
    ** HERENCIA: Recibir propiedades o acciones de un/a Padre/Madre

            clase Moto {
                -numRuedas: 2;
                -color: 
                -matrícula:
                ...
            }

            clase Vehículo { //DEFINICIÓN DE VEHICULO
                constructor(color, model, wheelNum){
                    this.color = color;
                    this.model = model;
                    this.wheelNum = wheelNum;

                }
            }

            let vehiculo = new Vehiculo('verde', 'testarrosa', 4);

            clase Coche extends Vehiculo {
                constructor(color,modelo){
                    super(color, modelo, 4); //invocamos al constructor de la case que heredamos, siempre tiene que ir primero!!

                }

                //AQUI TIENE SUS METODOS PROPIOS, AHI ESTA LA GRACIA. NO SE PUEDEN USAR EN LA CLASE PADRE

                arrancar(){ //PODEMOS HACER OVERWRITE DE UN METODO QUE EXISTA EN EL PADRE

                }
            }

            let ferrariTestarrosa = new Coche ('verde', 'testarrosa');
            
 */         