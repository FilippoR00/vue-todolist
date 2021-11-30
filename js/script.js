const app = new Vue({
    el: "#root",
    data: {
        content : '',
        todos : [
            {
                title : "Fare esercizi",
                status : true,
            },
            {
                title: "Guardare Netflix",
                status: false,
            },
            {
                title: "Fare la spesa",
                status: false,
            },
        ],
    },
    methods: {
        addContent : function(){
            if (this.content != "" && this.content != " "){
                this.todos.push({
                    title: this.content,
                    status: false,
                },);
                this.content = "";
            }
        },
        removeContent : function(index){
            this.todos.splice(index, 1);
        },
        changeStatus : function(index){
            if (this.todos[index].status == 1){
                this.todos[index].status = false;
            } else {
                this.todos[index].status = true;
            }
            this.$forceUpdate();
        }
    },



});