function selectGroupMenu(groupName) {
    cy.contains('a',groupName).then(menu=>{
        cy.wrap(menu).find('.expand-state g g').invoke('attr','data-name').then(attribute=>{
            if (attribute.includes('left')) {
                cy.wrap(menu).click()
                
            }
        })
    })
    
}

export class NavigatioPage{

    formLayoutPage(a){
        //cy.contains('Forms').click()
        selectGroupMenu(a)
        cy.contains('Form Layouts').click()
    }

    datePicker(){
        selectGroupMenu('Form')
        cy.contains('Datepicker').click()
    }

    Toastr(){
        selectGroupMenu('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    SmartTable(){
        selectGroupMenu('Tables & Data')
        cy.contains('Smart Table').click()
    }

    Tooltip(){
        selectGroupMenu('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigatioPage()