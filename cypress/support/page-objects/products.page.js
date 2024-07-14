class ProductsPage {

    visitUrl() {
        cy.visit('produtos')
    }

    searchProduct() {
        // código
    }

    searchProductList(nameProduct) {
        cy.get('.product-block')
        .contains(nameProduct)
        .click() 
    }

    visitProduct() {
    
    }

    addProductCart() {

    }

}

export default new ProductsPage()