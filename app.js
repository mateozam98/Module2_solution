(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.listItems = ShoppingListCheckOffService.getBuyItems();
  buy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.listItems = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService () {
  var service = this;

  //Initial to buy list
  var buy_list = [
    {name: "cookies", quantity: "10"},
    {name: "milk", quantity: "3"},
    {name: "protein powder", quantity: "1"},
    {name: "chicken", quantity: "3"},
    {name: "brown rice", quantity: "2"}
  ];
  var bought_list = [];

  service.buyItem = function (index) {
    bought_list.push(buy_list[index]);
    buy_list.splice(index, 1);
  };

  service.getBuyItems = function () {
    return buy_list;
  }

  service.getBoughtItems = function () {
    return bought_list;
  }

}
})();
