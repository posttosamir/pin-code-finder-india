// document.querySelector("#num").addEventListener("click", submit());
// console.log(code);
// function submit() {
//   let code = document.getElementById("num").value;
//   console.log(code);
//   try {
//     // get data from user and validate it.

//     let code = document.getElementById("num").value;
//   } catch (error) {}
// }

// =====================================================================================================
// =====================================================================================================
// let a = 3 - "2";
// let b = 3 - "2";
// console.log(a);
// console.log(b);
async function submit() {
  try {
    let code = document.getElementById("num").value;

    if (code.length > 6 || code.length < 6) {
      alert("length should be 6");
    }
    let displayData = "";

    let response = await fetch(`https://api.postalpincode.in/pincode/${code}`);
    let data = await response.json();

    // console.log(data);

    if (data[0].PostOffice === null) {
      alert("please select correct Pin!");
    } else {
      // console.log(data[0].PostOffice[0].Name);

      // data.forEach(element => {

      // });

      // displayData += `
      //   Name: ${data[0].PostOffice[0].Name}
      //   `;

      // document.getElementById("display").innerHTML = displayData;
      // document.getElementById("pin_input").innerHTML = code;
      document.getElementById("state").value = data[0].PostOffice[0].State;
      document.getElementById("district").value =
        data[0].PostOffice[0].District;
      document.getElementById("Area").value = data[0].PostOffice[0].Name;
      document.getElementById("num").value = "";
    }
  } catch (error) {
    console.log(error);
  }
}

function refresh() {
  document.getElementById("state").value = "";
  document.getElementById("district").value = "";
  document.getElementById("Area").value = "";
  document.getElementById("num").value = "";
}
