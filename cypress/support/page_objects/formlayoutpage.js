export class FormLayoutPaage{

    submitInLineNameAndEmail(){
        cy.contains('nb-card','Inline form').find('form').then(form=>{
            cy.wrap(form).find('[placeholder="Jane Doe"]').type('Omar')
            cy.wrap(form).find('[placeholder="Email"]').type('test@test.com')
            cy.wrap(form).find('[type="checkbox"]').check({force:true})
            cy.wrap(form).submit()
        })
    }

    submitInLineNameAndEmail2(){
        cy.contains('nb-card','Basic form').find('form').then(form=>{
            cy.wrap(form).find('[placeholder="Email"]').type('test@test.com')
            cy.wrap(form).find('[placeholder="Password"]').type('1234')
            cy.wrap(form).find('[type="checkbox"]').check({force:true})
            cy.wrap(form).submit()
        })
    }

}

export const onFormLayoutsPage = new FormLayoutPaage