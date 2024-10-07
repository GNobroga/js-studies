

function bigCalculation() {
    function repeatAction(count, fnc) {
        for (let i = 0 ; i < count ; i++) {
            fnc();
        }
    }
   repeatAction(1, () => {
        for (let i = 0 ;  i < Number.MAX_SAFE_INTEGER / (Number.MAX_SAFE_INTEGER / 1000000000); i++) {}
   });
}

bigCalculation();

process.send('Hello my father, I finish my work!!');