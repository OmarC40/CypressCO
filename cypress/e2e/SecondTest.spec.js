/// <reference types="cypress" />

//barra='img[alt="Google"] ';
//Es lo pirmero que pondremos para inicar nuestra test suite
describe('Test Suite',()=>{

    describe('Seccion adentro de la suite',()=>{

        beforeEach('login',()=>{

        })

        it('primera prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('segunda prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('tercera prueba',()=>{
            //aqui se pone el codigo que remos
        })
        it('cuarta prueba',()=>{
            //aqui se pone el codigo que remos
        })
    })

    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})

describe('Test Suite',()=>{
    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})


// final video Test Structure


describe('Test Suite',()=>{
    it('primera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('segunda prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('tercera prueba',()=>{
        //aqui se pone el codigo que remos
    })
    it('cuarta prueba',()=>{
        //aqui se pone el codigo que remos
    })
})

describe('Test Suite',()=>{
    it('primera prueba',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //tag

        cy.get('input')

        //id

        cy.get('#inputEmail1')

        //class

        cy.get('.input-full-width')
        
        //atributo

        cy.get('[fullwidth]')

        // atributoi y su valor 

        cy.get('[placeholder="Email"]')
        

        // por toda la clase 

        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // por 2 atributos debe ser sin espacios los atributos

        cy.get('[placeholder="Email"][class="input-full-width size-medium shape-rectangle"]')
    })

    it.only('segunda prueba',{retries:2},()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('Sign in')
        cy.contains( '[status="warning"]','Sign in')
        cy.get('[status="warning"]button')
        cy.contains('nb-card','Horizontal form').find('button')
        cy.contains('nb-card','Horizontal form').contains('Sign in')
        cy.contains('nb-card','Horizontal form').get('button')

        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in').parents('form').find('nb-checkbox').click()



    })

    
    
})