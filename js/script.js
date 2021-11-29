const app = new Vue({
    el: "#root",
    data: {
        content : '',
        todos : [
            "Fare esercizi",
            "Guardare Netflix",
            "Fare la spesa",
        ],
        status : [
            true,
            false,
            false,
        ]
    },
    methods: {
        addContent : function(){
            if (this.content != "" && this.content != " "){
                this.todos.push(this.content);
                this.status.push("false");
                this.content = "";
            }
        },
        removeContent : function(index){
            this.todos.splice(index, 1);
            this.status.splice(index, 1);
        },
        changeStatus : function(index){
            if(this.status[index] == 1){
                this.status[index] = false;
            } else {
                this.status[index] = true;
            }
            this.$forceUpdate();
        }
    },



});