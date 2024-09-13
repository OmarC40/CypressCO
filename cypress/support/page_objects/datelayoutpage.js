

function selectDayFromCurrent() {
    let date=new Date();
    date.setDate(date.getDate()+90);
    let futureDay= date.getDate()
    let futureMonth= date.toLocaleDateString('en-US',{month:'short'}).slice(0, 3);
    console.log(futureMonth)
    let futureYear= date.getFullYear()
    let dateToAssert=`${futureMonth} ${futureDay}, ${futureYear}`
    cy.get('@calendarMonthYear').then((calendarMonthYear)=>{
        if (!calendarMonthYear.includes(futureMonth)||!calendarMonthYear.includes(futureYear)){
            cy.get('[ng-reflect-icon="chevron-right-outline"]').click()
            selectDayFromCurrent()
        }else{
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    
}



export class DatePickerLayoutPage{

    selectCommonDatePicker(){
    
    cy.get('input[placeholder="Form Picker"]').as('DatePick')
    cy.get('@DatePick').click()
    cy.get('nb-calendar-pageable-navigation').invoke('attr','ng-reflect-date').as('calendarMonthYear')
    selectDayFromCurrent()
    cy.get('@DatePick').invoke('prop','value').should('contain',dateToAssert)
    cy.get('@DatePick').should('have.value',dateToAssert)
    }
}


const datepick= new DatePickerLayoutPage