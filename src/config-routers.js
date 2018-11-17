
const routes = [{
        path: '/',
        name: 'index',
        meta: {
            title: '贝塞尔曲线',
        },
        component: function(resolve) {
            require(['./views/index.vue'], resolve);
        },        
    }, {
        path: '/test',
        name: 'test',
        meta: {
            title: '贝塞尔曲线',
        },
        component: function(resolve) {
            require(['./views/test.vue'], resolve);
        },        
    },{
        path: '/test1',
        name: 'test1',
        meta: {
            title: 'test1',
        },
        component: function(resolve) {
            require(['./views/test1.vue'], resolve);
        }
    },{
        path: '/test2',
        name: 'test2',
        meta: {
            title: 'test2',
        },
        component: function(resolve) {
            require(['./views/test2.vue'], resolve);
        },
    },{
        path: '/test3',
        name: 'test3',
        meta: {
            title: 'test3',
        },
        component: function(resolve) {
            require(['./views/test3.vue'], resolve);
        }
    },{
        path: '/test4',
        name: 'test4',
        meta: {
            title: 'test4',
        },
        component: function(resolve) {
            require(['./views/test4.vue'], resolve);
        }
    },{
        path: '/test5',
        name: 'test5',
        meta: {
            title: 'test5',
        },
        component: function(resolve) {
            require(['./views/test5.vue'], resolve);
        }
    },{
        path: '/test6',
        name: 'test6',
        meta: {
            title: 'test6',
        },
        component: function(resolve) {
            require(['./views/test6.vue'], resolve);
        }
    },
]

export default routes
