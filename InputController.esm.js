import { Controller } from './lil-gui/lil-gui.esm.js';

export default class InputController extends Controller {

    constructor ( parent, object, property, type = 'text' ) {
        super( parent, object, property, 'input-' + type );

        this.$input = document.createElement( 'input' );
        this.$input.setAttribute( 'type', type );
        this.$input.setAttribute( 'aria-labelledby', this.$name.id );

        this.$input.addEventListener( 'input', () => {
            this.setValue( this.$input.value );
        } );

        this.$widget.appendChild( this.$input );

        this.$disable = this.$input;

        this.updateDisplay();
    }

    updateDisplay () {
        this.$input.value = this.getValue();
        return this;
    }

}