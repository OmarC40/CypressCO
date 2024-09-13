import { onFormLayoutsPage } from "../support/page_objects/formlayoutpage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test con Pom',()=>{
    beforeEach('open page',()=>{
        cy.visit('/')
    })

    it('verificacion de la navegacion de la pagina',()=>{
        navigateTo.formLayoutPage('Form')
        navigateTo.datePicker()
        navigateTo.Toastr()
        navigateTo.SmartTable()
        navigateTo.Tooltip()
    })
    it('Prueba E2E',()=>{
        navigateTo.formLayoutPage('Form') 
        onFormLayoutsPage.submitInLineNameAndEmail()
        onFormLayoutsPage.submitInLineNameAndEmail2()
    })
})