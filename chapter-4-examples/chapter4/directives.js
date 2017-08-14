exports.addToCart = function() {
  return {
    controller: 'AddToCartController',
    templateUrl: '/chapter4/templates/add_to_cart.html'
  };
};

exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: '/chapter4/templates/category_products.html'
  }
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: '/chapter4/templates/category_tree.html'
  }
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: '/chapter4/templates/checkout.html'
  };
};

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/chapter4/templates/nav_bar.html'
  };
};

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: '/chapter4/templates/product_details.html'
  };
};

exports.searchBar = function() {
  return {
    controller: 'SearchBarController',
    templateUrl: '/chapter4/templates/search_bar.html'
  };
};
