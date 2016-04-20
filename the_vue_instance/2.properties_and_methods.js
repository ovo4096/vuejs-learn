// Each Vue instance proxies all the properties found in its data object.

// if you attach a new property to the instance after it has been created, it
// will not trigger any view updates.

var data = { a: 1 }
var vm = new Vue({
    data: data
})

vm.a === data.a // -> true

// setting the property also affects original data
vm.a = 2
data.a // -> 2

// ... and vice-versa
data.a = 3
vm.a // -> 3

// In addition to data properties, Vue instances expose a number of useful
// instance properties and methods.These properties and methods are prefixed
// with $ to differentiate from proxied data properties.
// For example:
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch is an instance method
vm.$watch('a', function (newVal, oldVal) {
    // this callback will be called when `vm.a` changes
})
