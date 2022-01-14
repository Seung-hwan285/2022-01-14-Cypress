/*
- [x] 생성시 버튼과 초기값(10)을 렌더링 한다.
- [x] + 버튼을 클릭 시 count가 1증가한다.
- [x] - 버튼을 클릭 시 count가 1감소한다.
- [x] + 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)
- [x] - 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)

 */
describe("container",()=>{

    beforeEach("홈페이지 접속 테스트",()=>{
        cy.visit("http://localhost:63342/Calc/cypress-basic/index.html?_ijt=4104rrit50gb2sdlgjr1mbcl7i&_ij_reload=RELOAD_ON_SAVE");
    });

    it("생성 버튼 초기값 테스트",()=>{

       cy.get(".count-display").should("have.value","10");
    });


    it("+버튼을 클릭하면 count 값이 1증가한다",()=> {

        cy.get(".count-display").then(input=>{
            const inputValue =Number(input.val());
            console.log(inputValue);
            cy.get(".plus-button").click();
            cy.get(".count-display").should("have.value", inputValue + 1);
        });
    });

    it("-버튼 클릭하면 count 값이 1감소한다",()=>{
       cy.get(".count-display").then(input=>{

           const inputValue=Number(input.val());

           cy.get(".minus-button").click();
           cy.get(".count-display").should("have.value",inputValue-1);
       });
    });

    it("+ max값 12",()=>{
       cy.get(".count-display").then(input=>{
           const inputValue = Number(input.val());

           cy.get(".plus-button").click();
           cy.get(".plus-button").click();
           cy.get(".plus-button").click();

           cy.get(".count-display").should("have.value",12);

       });
    });

    it("- min값 8",()=>{
       cy.get(".count-display").then(input=>{

           const inputValue = Number(input.val());
           cy.get(".minus-button").click();
           cy.get(".minus-button").click();
           cy.get(".minus-button").click();

           cy.get(".count-display").should("have.value",8);
       });
    });
});