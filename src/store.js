import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        Nombre: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        precio: 2259000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 5,
        totalReviews: 230,
        detalles: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
      },
      {
        Nombre: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        precio: 2284000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133280/7/133280747G1.jpg',
        stars: 3.4,
        totalReviews: 20,
        detalles: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
      },
      {
        Nombre: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        precio: 1490000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1,
        detalles: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
      },
      {
        Nombre: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        precio: 2307000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
        stars: 4.4,
        totalReviews: 3400000,
        detalles: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
      },
      {
        Nombre: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
        precio: 2599000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
        stars: 3,
        totalReviews: 30,
        detalles: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
      },
      {
        name: 'Notebook Dell Alienware - i7 16GB',
        price: 1400000,
        image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'Notebook Dell Alienware - i7 16GB',
      },
    ],

    smartphones: [
      {
        Nombre: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        precio: 1199000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 0,
        totalReviews: 0,
        detalles: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
      },
      {
        Nombre: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        precio: 929000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        detalles: 'Smartphone Moto G 5S Dual Chip Android 7.0',
      },
      {
        Nombre: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
        precio: 3949000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
        stars: 1,
        totalReviews: 2,
        detalles: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
      },
      {
        Nombre: 'Smartphone Samsung Galaxy S7 Edge',
        precio: 1943,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 5,
        totalReviews: 310,
        detalles: 'Smartphone Samsung Galaxy S7 Edge',
      },
      {
        Nombre: 'Smartphone Motorola Moto G6 Plus',
        precio: 1699000,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
        stars: 2.9,
        totalReviews: 42,
        detalles: 'Smartphone Motorola Moto G6 Plus',
      },
      {
        Nombre: 'Smartphone Motorola Moto Z3 Play',
        precio: 2990900,
        image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
        stars: 0.5,
        totalReviews: 1,
        detalles: 'Smartphone Motorola Moto Z3 Play',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
