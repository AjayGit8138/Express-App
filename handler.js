const searchval = document.getElementById('valsearch');
    var rowDetails = document.getElementById("displaying-data").getElementsByTagName("tr").length;
    console.log(rowDetails);
    searchval.addEventListener("click", function () {
        console.log("Hai");
        var input = document.getElementById("findval").value;
        console.log(input);

        finding(input);
    })
    function finding(input) {

        var count = 2;
        var k = 1;


        for (var m = 0; m < 10; m++) {
            for (var g = 0; g < 10; g++) {

                var numberoftdsone = document.getElementById("displaying-data").rows[count].cells.item(1).innerHTML;
                console.log("rownums" + numberoftdsone);
                if (numberoftdsone == input) {

                    for (var h = 0; h < 8; h++) {
                        document.getElementById("result-table").rows[1].cells.item(h).innerHTML = document.getElementById("displaying-data").rows[count].cells.item(h).innerHTML;
                        // document.getElementById("displaying-data").rows[2].cells.item(1).innerHTML;
                    }
                    console.log("value present" + numberoftdsone);
                }

            }
            count++;
        }
    }


    async function fetchresult() {
        let response = await fetch('http://localhost:8000/getdata');
        let data = await response.text();
        let patientdata = JSON.parse(data);
        console.log(patientdata);
        patientdata.forEach(function (dt) {
            $("#demotable").append("<tr>" + "<td>" + dt.pname + "</td>" +
                "<td>" + dt.aadharno + "</td>" +
                "<td>" + dt.Age + "</td>" +
                "<td>" + dt.infection + "</td>" +
                "<td>" + dt.address + "</td>" +
                "<td>" + dt.city + "</td>" +
                "<td>" + dt.state + "</td>" +
                "<td>" + dt.bg + "</td>" + "</tr>")
        });
    }