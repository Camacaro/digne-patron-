
/**
 * Con el patron Decoretor
 * lo que puedo hacer es modificar una funcion anterior para 
 * modificar la instancia de la clase a mi gusto usando
 * el Open close Principal, teniendo la clase para ser 
 * extendida pero cerrada en sus funciones para ser modificadas
 */

class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {

    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });

  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  // Copiar la funcion original
  let validate = field.validate;
  
  field.validate = function () {
    /**
     * Correr las validaciones anteriores
     */
    validate()

    let value = field.input.value;

    if ( !value ) {
      field.errors.push("Requerido")
    }
  }


  return field;
}

function EmailFieldDecorator(field: Field): Field {
  // Copiar la funcion original
  let validate = field.validate;
  
  field.validate = function () {
    /**
     * Correr las validaciones anteriores
     */
    validate()

    let value = field.input.value;

    if ( value.indexOf("@") === -1 ) {
      field.errors.push("Debe ser un email")
    }
  }


  return field;
}

let field = new Field(document.querySelector('#email'));
/**
 * Vamos decorando poco a poco a cada requerimiento que necesita el 
 * campo 
 */
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field)
