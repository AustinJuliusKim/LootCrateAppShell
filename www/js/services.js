angular.module('starter.services', [])
.factory('Subscriptions', function(){
  var subscription = [{
    id: 0,
    user_id: 1,
    shirt_size: 'M M',
    plan_id: 2,
    plan_name: "Loot Anime",
    plan_period: 1,
    cost: 24.95,
    shipping_cost: 5,
    last_4: 1111,
    created_at: "Fri, 29 Jan 2016 22:23:33 PST -08:00",
    name: "Anime Subscription 1"
  }, {
    id: 1,
    user_id: 1,
    shirt_size: 'M M',
    plan_id: 1,
    plan_name: "Loot Crate",
    plan_period: 1,
    cost: 13.95,
    shipping_cost: 6,
    last_4: 1111,
    created_at: "Fri, 29 Jan 2016 22:33:33 PST -08:00",
    name: "Loot Crate Subscription 1"    
  }, {
    id: 2,
    user_id: 1,
    shirt_size: 'M M',
    plan_id: 3,
    plan_name: "Level Up",
    plan_period: 1,
    cost: 9.99,
    shipping_cost: 0,
    last_4: 1111,
    created_at: "Fri, 29 Jan 2016 22:33:33 PST -08:00",
    name: "Level Up Subscription 1"
  }];

  return {
    all: function(){
      return subscriptions;
    },
    remove: function(subscription){
      subscriptions.splice(subscriptions.indexOf(subscription), 1)
    },
    get: function(subscriptionId){
      for (var i = 0; i < subscriptions.length; i++){
        if (subscriptions[i].id === parseInt(subscriptionId)) {
          return subscriptions[i];
        }
      }
      return null;
    }
  }
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
