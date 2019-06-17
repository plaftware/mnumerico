(function(win){
    Vue.component('numberball', {
        template: `
         <li class="ball tooltip" v-on:click="onSelectNumber">
           <a :class="{'ball-select': selected}" class="number">{{value}}</a>
           <span v-if="values" class="tooltiptext">{{values}}</span>
         </li>
       `,
        data: function(){
            return{
                value: '?',
                values: undefined,
                selected: false
            }
        },
        props: ['base', 'pos'],
        methods: {
            onSelectNumber: function(){
               win.generarArbol(this);
            }
        }
    });
})(window);