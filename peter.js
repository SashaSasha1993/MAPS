var array2 = [];
$(document).ready(function () {




    //    $("#chicagoB").click(function () {
    function nana() {

        var API = "http://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

        $.getJSON(API, conditions);


        function conditions(data) {


            var listCond = "<table><tr><th>Letters</th><th>Name of the country</th></tr>"

            $.each(data.results, function (i, results) {


                array2.push([data.results[i].isocode, data.results[i].country]);

                function Comparator(a, b) {
                    if (a[0] < b[0]) return -1;
                    if (a[0] > b[0]) return 1;
                    return 0;
                }


                array2.sort(Comparator);







                //                var arrayIsocode = data.results.isocode;
                //
                //
                //
                //                listCond += "<tr><td>" + results.isocode + "</td>";
                //
                //                listCond += "<td>" + results.country + "</td></tr>";



            });

            for (i = 0; i < array2.length; i++) {
                listCond += "<tr><td>" + array2[i][0] + "</td><td>" + array2[i][1] + "</td></tr>";
            }

            listCond += "</table>";
            $("#chicago").html(listCond);
        }


    };
    nana();

});
