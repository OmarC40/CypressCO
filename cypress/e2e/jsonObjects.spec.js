/// <reference types="cypress"/>

describe('json',()=>{
    it('json obj',()=>{
        cy.oppenHomePage()

        const simpleObject={"key":"value","key2":"value2"}

        const simpleArray=["one","two","three"]

        const arrayObjects=[{"key":"value"},{"key2":"value2"},{"key3":"value3"}]

        const typesofDara={"String":"this is a string","number":10}

        const mix={
            "FirstName":"Omar",
            "Lastname":"Cua",
            "Age":25,
            "Student":[
                {
                    "FirstName":"Dani",
                    "Lastname":"Ce",
                },
                {
                    "FirstName":"Luis",
                    "Lastname":"Fa",
                }
            ]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])

        console.log(simpleArray[1])

        console.log(arrayObjects[2].key3)

        console.log(mix.Student[0].FirstName)



        })
})