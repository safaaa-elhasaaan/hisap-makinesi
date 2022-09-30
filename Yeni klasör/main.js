
    let input = document.getElementById("out")

    function Displaye(num) {
        input.value += num;
        }
        function Clear() {
            input.value="";
        }
        function Delete() {
            input.value = input.value.slice(0,-1);
             
        }
    function cont() {
      try {
        input.value=eval(input.value)
      } catch (error) {
        input.value='errol'
      }
    }