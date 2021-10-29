"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        listImage: [
            {
                url: 'img/01.jpg',
                title: 'Svezia',
                subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/02.jpg',
                title: 'Svizzera',
                subTitle: 'Lorem ipsum',
            },
            {
                url: 'img/03.jpg',
                title: 'Gran Bretagna',
                subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                url: 'img/04.jpg',
                title: 'Germania',
                subTitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                url: 'img/05.jpg',
                title: 'Paradise',
                subTitle: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],

        indexActiveImg: 0
    },

    methods: {
        onClickBackBtn() {
            this.indexActiveImg--

            if (this.indexActiveImg < 0) {
                this.indexActiveImg = this.listImage.length - 1
            }
        },

        onClickNextBtn() {
            this.indexActiveImg++

            if (this.indexActiveImg > (this.listImage.length - 1)) {
                this.indexActiveImg = 0
            }
        }
    }
})